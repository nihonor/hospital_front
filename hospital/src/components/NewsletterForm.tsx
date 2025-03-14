import React, { useState } from "react";

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Email submitted:", email);
  };

  return (
    <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 ">
        For Newsletter
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email here"
          className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pr-color"
          required
        />
        <button
          type="submit"
          className="bg-pr-color text-white px-8 py-3 rounded-xl hover:bg-pr-color/80 transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;
