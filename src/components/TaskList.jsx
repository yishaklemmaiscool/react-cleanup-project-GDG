import React from "react";

export default function TaskList({ tasks = [], title }) {
  const badgeMap = {
    completed: "bg-green-100 text-green-800",
    "in-progress": "bg-yellow-100 text-yellow-800",
    pending: "bg-red-100 text-red-800",
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {title && <h2 className="text-2xl font-semibold mb-4">{title}</h2>}

      {tasks.length === 0 ? (
        <div className="p-4 bg-gray-50 rounded text-gray-600">No tasks found.</div>
      ) : (
        <ul className="space-y-3">
          {tasks.map((task) => {
            const badgeClass = badgeMap[task.description] || "bg-blue-100 text-blue-800";
            return (
              <li
                key={task.id}
                className="p-4 border rounded-lg shadow-sm flex justify-between items-center bg-white"
              >
                <span className="text-lg text-gray-800">{task.text}</span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${badgeClass}`}>
                  {task.description}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
