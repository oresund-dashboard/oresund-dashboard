import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function ProjectDetails() {
  const { id } = useParams();

  // Midlertidige data (kan senere hentes fra database)
  const project = {
    id,
    name: "Villa Hellerup",
    customer: "Anders Nielsen",
    status: "I gang",
    phase: "Byggeri",
    cost: 180000,
    budget: 250000,
    todo: ["Gulve lægges", "El-arbejde færdiggøres", "Maler afslutning"],
    createdAt: "2025-03-20 09:45",
  };

  const [tasks, setTasks] = useState(project.todo);
  const [newTask, setNewTask] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const totalCost = project.cost.toLocaleString();
  const profit = (project.budget - project.cost).toLocaleString();

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <Link
        to="/projects"
        className="text-blue-600 hover:underline text-sm mb-4 inline-block"
      >
        ← Tilbage til projekter
      </Link>

      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        Projekt #{project.id} – {project.name}
      </h1>

      {/* Stamdata */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="border rounded p-4 bg-gray-50">
          <h2 className="font-semibold text-lg text-gray-700 mb-2">Projektinfo</h2>
          <p><strong>Kunde:</strong> {project.customer}</p>
          <p><strong>Status:</strong> {project.status}</p>
          <p><strong>Fase:</strong> {project.phase}</p>
          <p><strong>Oprettet:</strong> {project.createdAt}</p>
        </div>

        <div className="border rounded p-4 bg-gray-50">
          <h2 className="font-semibold text-lg text-gray-700 mb-2">Økonomi</h2>
          <p><strong>Budget:</strong> {project.budget.toLocaleString()} kr.</p>
          <p><strong>Udgifter:</strong> {totalCost} kr.</p>
          <p>
            <strong>Fortjeneste:</strong>{" "}
            <span
              className={`font-bold ${
                project.budget - project.cost >= 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {profit} kr.
            </span>
          </p>
        </div>
      </div>

      {/* To-do sektion */}
      <div className="border rounded p-4 bg-gray-50">
        <h2 className="font-semibold text-lg text-gray-700 mb-4">Opgaver / To-do</h2>

        <form onSubmit={addTask} className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Tilføj opgave..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1 border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
          >
            Tilføj
          </button>
        </form>

        {tasks.length === 0 ? (
          <p className="text-gray-500">Ingen opgaver tilføjet endnu.</p>
        ) : (
          <ul className="divide-y border rounded">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-2 hover:bg-gray-50"
              >
                <span>{task}</span>
                <button
                  onClick={() => handleDeleteTask(index)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Slet
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
