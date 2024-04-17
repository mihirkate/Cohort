const express = require("express");
const app = express();
const port = 3000;
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
/*
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

/* ----------------------   ------------------------------------------ */

app.use(express.json());

/* ----------------------   ------------------------------------------ */

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.statusCode(411).json({
      msg: "Wrong Inputs ",
    });
    return;
  }
  // else put in Momgo-db DB
  await todo.create({
    title: createPayload.title,
    descriprtion: createPayload.descriprtion,
    completed: false,
  });

  res.json({
    msg: "Todo Created ",
  });
});

/* ----------------------   ------------------------------------------ */

app.get("/todos", async (req, res) => {
  const allTodos = await todo.find({});
  console.log(allTodos);

  res.json({
    allTodos,
  });
});

/* ----------------------   ------------------------------------------ */

app.put("/completed", (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "Wrong Inputs ",
    });
    return;
  }

  // else put in Momgo-db DB

  todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: "Todo Updated ",
  });
});

/* ----------------------   ------------------------------------------ */

app.listen(port, () => {
  console.log(`Listening to the server  ${port}`);
});
