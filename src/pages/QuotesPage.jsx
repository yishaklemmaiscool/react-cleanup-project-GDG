import React from "react";
import useQuotes from "../hooks/useQuotes";
import Loading from "../components/loading";
import QuoteSection from "../components/QuoteSection";

function QuotesPage() {
  const { quotes, loading, error } = useQuotes();

  if (loading) {
    return (
      <div className="text-center p-8">
        <Loading message="Loading inspirational quotes..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 m-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
        <p className="font-bold">Error</p>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-6">
        Inspirational Quotes
      </h1>

      <ul className="space-y-3">
        {quotes.map((q) => (
          <QuoteSection key={q.id} quote={q.text} author={q.description} />
        ))}
      </ul>
    </div>
  );
}

export default QuotesPage;
