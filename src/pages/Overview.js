import React from "react";

export default function Overview() {
  return (
    
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Overblik</h1>
      <p className="text-gray-600 mb-6">
        Velkommen til dit projekt- og kundedashboard for Øresund Byg & Rådgivning.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 border rounded-lg shadow-sm bg-gray-50">
          <h2 className="text-lg font-semibold mb-2 text-gray-700">Aktive projekter</h2>
          <p className="text-3xl font-bold text-blue-600">7</p>
        </div>

        <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold">Tailwind er aktiv ✅</h2>
          <p className="mt-2">Denne boks vises korrekt, hvis Tailwind virker.</p>
        </div>


        <div className="p-4 border rounded-lg shadow-sm bg-gray-50">
          <h2 className="text-lg font-semibold mb-2 text-gray-700">Kunder</h2>
          <p className="text-3xl font-bold text-green-600">15</p>
        </div>

        <div className="p-4 border rounded-lg shadow-sm bg-gray-50">
          <h2 className="text-lg font-semibold mb-2 text-gray-700">Udførte opgaver</h2>
          <p className="text-3xl font-bold text-gray-800">42</p>
        </div>
      </div>
    </div>
  );
}
