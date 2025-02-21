import express from "express";
import morgan from "morgan";
import bp from "body-parser";
import dotenv from "dotenv";
import connectDB from "./connectDB.mjs";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
app.use(morgan("dev"));

const PORT = process.env.PORT || 8000;

//making database schema
const todoScheme = new mongoose.Schema({
  id: String,
  text: String,
});

const Todo = mongoose.model("todo", todoScheme);

//api to post new todos into database
app.post("/todo", async (req, res) => {
  try {
    const { text } = req.body;
    const newTodo = new Todo({ text });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//get ALL todos

app.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Deleting Todo
app.delete("/todo/:id", async (req, res) => {
  try {
    const result = await Todo.findByIdAndDelete(req.params.id);
    if (!result) return res.status(400).json({ message: "Todo Not Found" });
    res.json({ message: "Todo deleted Successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

//Updating Todo
app.put("/todo/:id", async (req, res) => {
  try {
    const { text } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { text },
      { new: true }
    );
    if (!updatedTodo)
      return res.status(404).json({ message: "Todo not found" });
    res.json(updatedTodo);
  } catch (error) {
    console.error("Error updating todo:", error);
    res.status(500).json({error:error.message})
  }
});

//connection to db and running server on successful connection
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on Port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Database Connection Failed: ", err);
  });
