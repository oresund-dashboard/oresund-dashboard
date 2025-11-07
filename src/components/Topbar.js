import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export default function Topbar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="flex items-center justify-between bg-white border-b p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Øresund Byg" className="h-10 w-auto" />
        <span className="font-semibold text-lg text-gray-800">Øresund Byg & Rådgivning</span>
      </div>

      <div className="text-right text-gray-600 text-sm">
        <p>{time.toLocaleDateString()}</p>
        <p>{time.toLocaleTimeString()}</p>
        <p className="text-xs text-gray-400">v1.0 beta</p>
      </div>
    </header>
  );
}
