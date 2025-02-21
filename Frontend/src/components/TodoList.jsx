import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  //Adding Todo
  const handleOnClick = () => {
    if (!newTask.trim()) return;
    fetch("http://localhost:5000/todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: newTask }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTodos([...todos, data]);
        setNewTask("");
      });
  };

  //Deleting Todo
  const deleteTodo = (id) => {
    fetch(`http://localhost:5000/todo/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then(() => {
        setTodos(todos.filter((todo) => todo._id !== id));
      })
      .catch((error) => console.error("Error Deleting Todo", error));
  };

  //updating Todo

  const updatingTodo = (id, newText) => {
    fetch(`http://localhost:5000/todo/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: newText }), 
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((updatedTodo) => {
        setTodos((prevTodos) =>
          prevTodos.map((todo) => (todo._id === id ? updatedTodo : todo))
        );
      })
      .catch((error) => console.error("Error updating todo:", error));
  };
  

  console.log(todos);

  return (
    <div className="w-4/5 m-auto">
      <h1 className=" uppercase text-center p-8 text-2xl font-bold text-shadow">
        TODO-LIST
      </h1>
      <div className="flex justify-center items-center mt-8">
        <input
          className="border p-2 rounded-lg w-88"
          type="text"
          placeholder="Enter any task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="bg-blue-500 p-2 rounded-lg ml-2 w-20 text-white shadow-lg"
          onClick={handleOnClick}
        >
          ADD
        </button>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center mt-8">
        {todos.map((todo) => (
          <TodoItem
            text={todo.text}
            key={todo._id}
            id={todo._id}
            deleteTodo={deleteTodo}
            updatingTodo={updatingTodo}
          />
        ))}
      </div>
    </div>
  );
};
export default TodoList;
