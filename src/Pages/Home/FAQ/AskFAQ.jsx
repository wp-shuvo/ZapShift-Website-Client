import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AskFAQ = () => {
  const [question, setQuestion] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!question.trim()) {
      toast.error('Please enter your question');
      return;
    }

    toast.success('Your question has been submitted!');
    setQuestion(''); // Clear input
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-4">Ask a Question</h2>
      <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">
        If you didn't find your answer in the FAQ section, feel free to submit
        your question below.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-6 border border-gray-200"
      >
        <label className="block text-lg font-medium mb-2">Your Question</label>

        <textarea
          value={question}
          onChange={e => setQuestion(e.target.value)}
          placeholder="Write your question here..."
          className="textarea textarea-bordered w-full h-32 mb-5"
        ></textarea>

        <button
          type="submit"
          className="btn bg-[#B8E34F] text-black font-semibold w-full hover:opacity-90"
        >
          Submit Question
        </button>
      </form>
    </div>
  );
};

export default AskFAQ;
