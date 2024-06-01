const express = require("express");
const { Account } = require("../db");
const { default: mongoose } = require("mongoose");
const { authMiddleware } = require("../middleware");
const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
    const account = await Account.findOne({
        userId: req.userId,
    });
    console.log(account);
    res.json({
        balance: account.balance,
    });
});


router.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    console.log(session);
    const { amount, to } = req.body;

    if (!amount || amount.balance < amount) {
        session.abortTransaction();

        return res.status(400).json({
            message: "Insufficient balance"
        });
    }
    const toAccount = await Account.findOne({ userId: to }).session(session);

    if (!toAccount) {
        session.abortTransaction();

        return res.status(400).json({
            message: "Invalid account "
        });
    }

    Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);


    // commit the transactiob
    await session.commitTransaction();

    res.json({
        message: "Transfer successful"
    });
})
module.exports = router;
