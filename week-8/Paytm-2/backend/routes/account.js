const express = require("express");
const { Account } = require("../db");
const { default: mongoose } = require("mongoose");
const { authMiddleware } = require("../middleware");
const router = express.Router();

router.get('/balance', authMiddleware, async (req, res) => {

    try {
        const account = await Account.findOne({
            userId: req.userId
        });
        console.log(req.userId)
        console.log(account);
        if (!account) {
            return res.status(404).json({ message: 'Account not found' });
        }
        res.json({
            balance: account.balance,
        });

    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
});


router.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    const { amount, to } = req.body;
    console.log(to);
    if (!amount || amount.balance < amount) {
        session.abortTransaction();

        return res.status(400).json({
            message: "Insufficient balance"
        });
    }
    const toAccount = await Account.findOne({ userId: to }).session(session);
    console.log("to account :", toAccount);
    if (!toAccount) {
        session.abortTransaction();

        return res.status(400).json({
            message: "Invalid account"
        });
    }

    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);



    // commit the transactiob
    await session.commitTransaction();
    console.log(toAccount.balance);
    res.json({
        message: "Transfer successful"
    });
})
module.exports = router;
