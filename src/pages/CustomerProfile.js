import React from "react";
import { useParams, Link } from "react-router-dom";

export default function CustomerProfile() {
  const { id } = useParams();

  // Midlertidige testdata (kan hentes fra database senere)
  const customer = {
    id,
    name: "Anders Nielsen",
    email: "anders@example.com",
    address: "Strandvejen 12, 2900 Hellerup",
    type: "Erhverv",
    billing: "CVR: 12345678",
    projectSum: 320000,
    createdAt: "2025-03-14 10:32",
  };

  const projects = [
    { id: 1, name: "Villa Hellerup", status: "I gang", cost: 180000 },
    { id: 2, name: "Kontorindretning", status: "Afsluttet", cost: 140000 },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <Link
        to="/customers"
        className="text-blue-600 hover:underline text-sm mb-4 inline-block"
      >
        ← Tilbage til kunder
      </Link>

      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        Kundeprofil #{customer.id}
      </h1>

      {/* Stamdata */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="border rounded p-4 bg-gray-50">
          <h2 className="font-semibold text-lg text-gray-700 mb-2">
            Stamoplysninger
          </h2>
          <p><strong>Navn:</strong> {customer.name}</p>
          <p><strong>E-mail:</strong> {customer.email}</p>
          <p><strong>Adresse:</strong> {customer.address}</p>
          <p><strong>Type:</strong> {customer.type}</p>
          <p><strong>Faktura:</strong> {customer.billing}</p>
          <p><strong>Oprettet:</strong> {customer.createdAt}</p>
        </div>

        <div className="border rounded p-4 bg-gray-50">
          <h2 className="font-semibold text-lg text-gray-700 mb-2">
            Økonomioversigt
          </h2>
          <p><strong>Samlet projektsum:</strong></p>
          <p className="text-3xl font-bold text-green-600 mb-2">
            {customer.projectSum.toLocaleString()} kr.
          </p>
          <p className="text-sm text-gray-500">
            (beregnes automatisk ud fra kundens projekter)
          </p>
        </div>
      </div>

      {/* Projekter */}
      <h2 className="text-xl font-bold mb-4 text-gray-800">Tilknyttede projekter</h2>
      {projects.length === 0 ? (
        <p className="text-gray-500">Ingen projekter registreret for denne kunde.</p>
      ) : (
        <table className="w-full border text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">#</th>
              <th className="p-2 border">Projekt</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Omkostninger</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p.id}>
                <td className="p-2 border text-gray-600">#{p.id}</td>
                <td className="p-2 border">{p.name}</td>
                <td className="p-2 border">{p.status}</td>
                <td className="p-2 border">{p.cost.toLocaleString()} kr.</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
