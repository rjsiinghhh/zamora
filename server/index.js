const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');


// middle ware

app.use(cors());
app.use(express.json());


// Routes

// create a todo for schdueling 

app.post("/daily", async (req, res) => {
    try {
        const { date } = req.body;
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (date, description) VALUES($1, $2) RETURNING *",
            [date, description]
        );
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//get all todos

app.get("/todos", async (req, res) => {
    try {
      const allTodos = await pool.query("SELECT * FROM todo");
      res.json(allTodos.rows);
    } catch (err) {
      console.error(err.message);
    }
  });