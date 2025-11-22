import { useEffect, useState } from "react";
import { fetchTodos, createTodo, updateTodo, deleteTodo } from "./api";
import "./app.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");

  // Load todos on mount
  useEffect(() => {
    loadTodos();
  }, []);

  async function loadTodos() {
    try {
      const data = await fetchTodos();
      setTodos(data);
    } catch (err) {
      console.error("Failed to fetch todos", err);
    }
  }

  async function handleAdd(e) {
    e.preventDefault();
    if (!newTitle.trim()) return;
    try {
      const todo = await createTodo(newTitle.trim());
      setTodos((prev) => [todo, ...prev]);
      setNewTitle("");
    } catch (err) {
      console.error("Failed to create todo", err);
    }
  }

  async function toggleComplete(todo) {
    try {
      const updated = await updateTodo(todo._id, {
        title: todo.title,
        completed: !todo.completed,
      });
      setTodos((prev) =>
        prev.map((t) => (t._id === updated._id ? updated : t))
      );
    } catch (err) {
      console.error("Failed to update todo", err);
    }
  }

  function startEditing(todo) {
    setEditingId(todo._id);
    setEditingTitle(todo.title);
  }

  async function saveEdit(todo) {
    if (!editingTitle.trim()) return;
    try {
      const updated = await updateTodo(todo._id, {
        title: editingTitle.trim(),
        completed: todo.completed,
      });
      setTodos((prev) =>
        prev.map((t) => (t._id === updated._id ? updated : t))
      );
      setEditingId(null);
      setEditingTitle("");
    } catch (err) {
      console.error("Failed to save edit", err);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteTodo(id);
      setTodos((prev) => prev.filter((t) => t._id !== id));
    } catch (err) {
      console.error("Failed to delete todo", err);
    }
  }

  return (
    <div className="app">
      <h1>Todo List</h1>

      <form onSubmit={handleAdd} className="todo-form">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo._id} className={todo.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo)}
            />

            {editingId === todo._id ? (
              <>
                <input
                  type="text"
                  value={editingTitle}
                  onChange={(e) => setEditingTitle(e.target.value)}
                />
                <button onClick={() => saveEdit(todo)}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <span>{todo.title}</span>
                <button onClick={() => startEditing(todo)}>Edit</button>
                <button onClick={() => handleDelete(todo._id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;