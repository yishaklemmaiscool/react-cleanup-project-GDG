import { useState, useEffect } from "react";

export default function useQuotes() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const fakeQuotes = [
          { id: 101, text: "\"The best way to predict the future is to invent it.\"", description: "Alan Kay" },
          { id: 102, text: "\"Life is what happens when you're busy making other plans.\"", description: "John Lennon" },
          { id: 103, text: "\"Get busy living or get busy dying.\"", description: "Stephen King" },
          { id: 104, text: "\"You only live once, but if you do it right, once is enough.\"", description: "Mae West" },
          { id: 105, text: "\"The only way to do great work is to love what you do.\"", description: "Steve Jobs" },
          { id: 106, text: "\"Simplicity is the ultimate sophistication.\"", description: "Leonardo da Vinci" },
        ];
        setQuotes(fakeQuotes);
      } catch (err) {
        setError("Failed to load quotes");
      } finally {
        setLoading(false);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return { quotes, loading, error };
}
