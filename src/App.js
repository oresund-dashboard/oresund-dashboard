import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

// Sider
import Overview from "./pages/Overview";
import Customers from "./pages/Customers";
import Projects from "./pages/Projects";
import Economy from "./pages/Economy";
import Todo from "./pages/Todo";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar />

        {/* Hovedindhold */}
        <div className="flex-1 flex flex-col">
          {/* Topbar */}
          <Topbar />

          {/* Sideindhold */}
          <main className="p-6 overflow-auto">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/economy" element={<Economy />} />
              <Route path="/todo" element={<Todo />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}
