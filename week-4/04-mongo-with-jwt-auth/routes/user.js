const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken");
const { Admin, Course, User } = require("../db/index");
const { JWT_SECRET } = require("../config");

// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;
  User.create({
    username,
    password,
  });
  res.json({
    msg: "user created successfully ",
  });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const user = await User.find({
    username,
    password,
  });

  if (user) {
    const token = jwt.sign(
      {
        username,
      },
      JWT_SECRET
    );
    res.json({
      token,
    });
  } else {
    res.status(411).json({
      msg: "incorrect credentials",
    });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const response = await Course.find({});
  res.json({
    courses: response,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const username = req.username;
  const courseId = req.params.courseId;
  console.log(username);

  try {
    await User.updateOne(
      {
        username: username,
      },
      {
        $push: { purchasedCourses: courseId },
      }
    );
  } catch (error) {
    console.log(error);
  }
  res.json({
    msg: "purchased complete",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username: req.username,
  });
  console.log(user.purchasedCourses);

  const courses = await Course.findOne({
    _id: { $in: user.purchasedCourses },
  });

  res.json({
    msg: courses,
  });
});

module.exports = router;
