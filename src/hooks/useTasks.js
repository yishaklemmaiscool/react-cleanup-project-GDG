import { useState, useEffect } from "react";

export default function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const fakeTasks = [
          { id: 1, text: "Buy groceries", description: "pending" },
          { id: 2, text: "Finish report", description: "in-progress" },
          { id: 3, text: "Call mom", description: "completed" },
          { id: 4, text: "Pay bills", description: "pending" },
          { id: 5, text: "Schedule meeting", description: "pending" },
          { id: 6, text: "Book dentist", description: "completed" },
        ];
        setTasks(fakeTasks);
      } catch (err) {
        setError("Failed to load tasks");
      } finally {
        setLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return { tasks, loading, error };
}
