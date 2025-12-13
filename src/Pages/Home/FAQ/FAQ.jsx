import React, { useState } from 'react';
import { Link } from 'react-router';
import { FiChevronDown, FiChevronUp, FiArrowUpRight } from 'react-icons/fi';

const faqs = [
  {
    question: 'How does this posture corrector work?',
    answer:
      'A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.',
  },
  {
    question: 'Is it suitable for all ages and body types?',
    answer:
      'Yes! The posture corrector is designed to fit a wide range of ages and body types comfortably and effectively.',
  },
  {
    question: 'Does it really help with back pain and posture improvement?',
    answer:
      'Consistent usage can significantly reduce back pain and visibly improve posture by aligning the spine correctly.',
  },
  {
    question: 'Does it have smart features like vibration alerts?',
    answer:
      'Some advanced models include vibration reminders that alert you whenever you slouch.',
  },
  {
    question: 'How will I be notified when the product is back in stock?',
    answer:
      "You can subscribe to our email notifications, and we’ll alert you as soon as it's available.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-center text-4xl font-bold mb-3">
        Frequently Asked Question (FAQ)
      </h2>
      <p className="text-center text-gray-500 max-w-2xl mx-auto mb-10">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce pain, and strengthen your body with
        ease!
      </p>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border rounded-lg ${
              openIndex === index ? 'border-teal-400' : 'border-gray-200'
            }`}
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium">{faq.question}</span>
              {openIndex === index ? (
                <FiChevronUp className="text-xl" />
              ) : (
                <FiChevronDown className="text-xl" />
              )}
            </button>

            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-10 flex justify-center">
        <Link
          to="/askFAQ"
          className="flex items-center gap-2 bg-[#B8E34F] text-black font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition"
        >
          See More FAQ’s
          <FiArrowUpRight className="text-lg" />
        </Link>
      </div>
    </div>
  );
};

export default FAQ;
