import React, { useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function Economy() {
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({
    description: "",
    amount: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: expenses.length + 1,
      description: form.description,
      amount: Number(form.amount),
      date: new Date().toLocaleDateString(),
    };
    setExpenses([...expenses, newExpense]);
    setForm({ description: "", amount: "" });
  };

  const totalExpense = expenses.reduce((sum, e) => sum + e.amount, 0);
  const totalBudget = 250000; // du kan ændre dette
  const profit = totalBudget - totalExpense;

  const chartData = expenses.map((e) => ({
    name: e.date,
    Udgifter: e.amount,
  }));

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Økonomi</h1>

      {/* Formular til udgifter */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <input
          type="text"
          name="description"
          placeholder="Beskrivelse"
          value={form.description}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Beløb (kr.)"
          value={form.amount}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded hover:bg-blue-700 py-2"
        >
          Tilføj udgift
        </button>
      </form>

      {/* Oversigt */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="p-4 border rounded bg-gray-50 text-center">
          <h2 className="font-semibold text-gray-700">Samlet budget</h2>
          <p className="text-2xl text-blue-600 font-bold">{totalBudget.toLocaleString()} kr.</p>
        </div>

        <div className="p-4 border rounded bg-gray-50 text-center">
          <h2 className="font-semibold text-gray-700">Udgifter</h2>
          <p className="text-2xl text-red-600 font-bold">{totalExpense.toLocaleString()} kr.</p>
        </div>

        <div className="p-4 border rounded bg-gray-50 text-center">
          <h2 className="font-semibold text-gray-700">Fortjeneste</h2>
          <p
            className={`text-2xl font-bold ${
              profit >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {profit.toLocaleString()} kr.
          </p>
        </div>
      </div>

      {/* Diagram */}
      <div className="w-full h-64">
        <ResponsiveContainer>
          <LineChart data={chartData}>
            <Line type="monotone" dataKey="Udgifter" stroke="#2563eb" strokeWidth={3} />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Udgiftstabel */}
      {expenses.length > 0 && (
        <table className="w-full border text-left mt-6">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">#</th>
              <th className="p-2 border">Dato</th>
              <th className="p-2 border">Beskrivelse</th>
              <th className="p-2 border">Beløb</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((e) => (
              <tr key={e.id}>
                <td className="p-2 border text-gray-600">#{e.id}</td>
                <td className="p-2 border">{e.date}</td>
                <td className="p-2 border">{e.description}</td>
                <td className="p-2 border">{e.amount.toLocaleString()} kr.</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
