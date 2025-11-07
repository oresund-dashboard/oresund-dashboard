import React, { useState } from "react";

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;
    const newTask = {
      id: tasks.length + 1,
      text: taskText,
      completed: false,
      createdAt: new Date().toLocaleDateString(),
    };
    setTasks([...tasks, newTask]);
    setTaskText("");
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">To-do</h1>
      <p className="text-gray-600 mb-6">Hold styr på dine opgaver og projektaktiviteter.</p>

      {/* Formular til at tilføje opgave */}
      <form onSubmit={handleAdd} className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Skriv en ny opgave..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className="flex-1 border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
        >
          Tilføj
        </button>
      </form>

      {/* Opgaveliste */}
      {tasks.length === 0 ? (
        <p className="text-gray-500">Ingen opgaver endnu.</p>
      ) : (
        <ul className="divide-y border rounded">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between p-3 hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                  className="w-5 h-5 accent-blue-600"
                />
                <span
                  className={`text-gray-800 ${
                    task.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {task.text}
                </span>
              </div>
              <div className="text-sm text-gray-500 flex items-center gap-3">
                <span>{task.createdAt}</span>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Slet
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
