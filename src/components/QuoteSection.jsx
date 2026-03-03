import React from "react";

export default function QuoteSection({ quote, author, bgColor = "bg-purple-50" }) {
  return (
    <li className={`p-4 border rounded-lg shadow-sm flex justify-between items-center ${bgColor}`}>
      <span className="text-lg text-gray-800 italic">{quote}</span>
      <span className="px-3 py-1 rounded-full text-sm font-medium text-gray-700">{author}</span>
    </li>
  );
}
