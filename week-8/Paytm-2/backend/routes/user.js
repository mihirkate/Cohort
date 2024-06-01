// backend/routes/user.js
const express = require("express");
const zod = require("zod");
const router = express.Router();
const { User, Account } = require("../db");
const { JWT_SECRET } = require("../config");

const jwt = require("jsonwebtoken");
const { authMiddleware } = require("../middleware");

const signupBody = zod.object({
  username: zod.string().email(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string().min(6),
});

router.get("/", (req, res) => {
  res.send("Hii from user ");
});

// -------------Signup Route ----------------------

router.post("/signup", async (req, res) => {
  const body = req.body;
  console.log(body);

  const { success } = signupBody.safeParse(body);

  if (!success) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs"
    })
  }
  // if successfully parsing zod validation  then find the userId

  const existingUser = await User.findOne({
    username: req.body.username
  })

  console.log(existingUser);
  // if user id is already existing then return

  if (existingUser) {
    return res.json({
      msg: "email already exists /inputs invalid  from exixt",
    });
  }
  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });
  console.log(user);

  const userId = user._id;

  await Account.create({
    userId,
    balance: 1 + Math.random() * 10000,
  });

  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );
  //console.log(token);
  res.json({
    msg: "user created successfully",
    token: token,
  });
});

// -------------Signin Route ----------------------

const signinBody = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

router.post("/signin", async (req, res) => {
  const { success } = signinBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs"
    })
  }

  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,

  });

  if (user) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      JWT_SECRET
    );
    console.log(token);
    res.json({
      token: token,
    });
    return;
  }
  res.status(411).json({
    message: "Error while logging in",
  });
});

//------------------update: Route to update user information--------------

const updateBody = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});
router.put("/", authMiddleware, async (req, res) => {
  const { success } = updateBody.safeParse(req.body);
  if (!success) {
    res.status(411).json({
      msg: "error while updating the information",
    });
  }
  await User.findOne({ _id: req.userId }, req.body);
  res.json({
    message: "Updated successfully",
  });
});

/*------------------update: Route2: Route to get users from the backend, 
filterable via firstName/lastName */

router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";
  const users = await User.find({
    $or: [{
      firstName: {
        "$regex": filter
      }
    }, {
      lastName: {
        "$regex": filter
      }
    }]
  })
  console.log(typeof users, users);
  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});
module.exports = router;
