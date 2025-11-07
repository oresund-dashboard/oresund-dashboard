import React, { useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    name: "",
    customer: "",
    status: "planlagt",
    phase: "design",
    cost: "",
    todo: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      ...form,
      id: projects.length + 1,
      createdAt: new Date().toLocaleString(),
    };
    setProjects([...projects, newProject]);
    setForm({
      name: "",
      customer: "",
      status: "planlagt",
      phase: "design",
      cost: "",
      todo: "",
    });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Projekter</h1>

      {/* Formular til nyt projekt */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
      >
        <input
          type="text"
          name="name"
          placeholder="Projektnavn"
          value={form.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="customer"
          placeholder="Kunde"
          value={form.customer}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="planlagt">Planlagt</option>
          <option value="igang">I gang</option>
          <option value="afsluttet">Afsluttet</option>
        </select>

        <select
          name="phase"
          value={form.phase}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="design">Design</option>
          <option value="byggeri">Byggeri</option>
          <option value="afslutning">Afslutning</option>
        </select>

        <input
          type="number"
          name="cost"
          placeholder="Omkostninger (kr.)"
          value={form.cost}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="text"
          name="todo"
          placeholder="To-do / noter"
          value={form.todo}
          onChange={handleChange}
          className="border p-2 rounded col-span-full"
        />

        <button
          type="submit"
          className="col-span-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Opret projekt
        </button>
      </form>

      {/* Projektliste */}
      {projects.length === 0 ? (
        <p className="text-gray-500">Ingen projekter oprettet endnu.</p>
      ) : (
        <table className="w-full border text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">#</th>
              <th className="p-2 border">Projektnavn</th>
              <th className="p-2 border">Kunde</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Fase</th>
              <th className="p-2 border">Omkostninger</th>
              <th className="p-2 border">Oprettet</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p.id}>
                <td className="p-2 border text-gray-600">#{p.id}</td>
                <td className="p-2 border">{p.name}</td>
                <td className="p-2 border">{p.customer}</td>
                <td className="p-2 border capitalize">{p.status}</td>
                <td className="p-2 border">{p.phase}</td>
                <td className="p-2 border">{p.cost} kr.</td>
                <td className="p-2 border text-sm text-gray-500">{p.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
