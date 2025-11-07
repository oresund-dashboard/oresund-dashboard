import React, { useState } from "react";

export default function Settings() {
  const [settings, setSettings] = useState({
    companyName: "Øresund Byg & Rådgivning",
    email: "kontakt@oresund-byg.dk",
    phone: "+45 12 34 56 78",
    address: "Nordsjælland, Danmark",
    defaultBudget: 250000,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert("Indstillinger gemt! (senere kan dette gemmes permanent)");
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Indstillinger</h1>
      <p className="text-gray-600 mb-6">
        Tilpas dine virksomhedsoplysninger og standardindstillinger for dashboardet.
      </p>

      <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Firmanavn
          </label>
          <input
            type="text"
            name="companyName"
            value={settings.companyName}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            value={settings.email}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Telefon
          </label>
          <input
            type="text"
            name="phone"
            value={settings.phone}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Adresse
          </label>
          <input
            type="text"
            name="address"
            value={settings.address}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Standardbudget (kr.)
          </label>
          <input
            type="number"
            name="defaultBudget"
            value={settings.defaultBudget}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>

        <div className="col-span-full">
          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Gem indstillinger
          </button>
        </div>
      </form>
    </div>
  );
}
