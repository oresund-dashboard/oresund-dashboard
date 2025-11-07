import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumbs({ items }) {
  if (!items || items.length === 0) return null;
  return (
    <nav className="text-sm mb-4 text-gray-500">
      {items.map((item, index) => (
        <span key={index}>
          {index > 0 && " / "}
          {item.path ? (
            <Link to={item.path} className="hover:underline">
              {item.label}
            </Link>
          ) : (
            item.label
          )}
        </span>
      ))}
    </nav>
  );
}
