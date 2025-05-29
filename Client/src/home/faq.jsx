import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Sahayak?",
      answer:
        "Sahayak is a free emotional support platform connecting people with trained volunteer listeners for anonymous, non-judgmental conversations.",
    },
    {
      question: "Who’s it for, is Sahayak for me?",
      answer:
        "Yes. Sahayak is for anyone who needs someone to talk to—whether you're feeling stressed, anxious, lonely, or just want to vent.",
    },
    {
      question: "What Sahayak is not:",
      answer:
        "Sahayak is not a replacement for professional therapy or medical care. It’s emotional peer support, not clinical treatment.",
    },
    {
      question: "When should I choose therapy over peer support?",
      answer:
        "If you're experiencing persistent mental health issues or crisis situations, professional therapy is the appropriate option.",
    },
    {
      question: "Do you also provide therapy?",
      answer:
        "No, Sahayak provides peer-based emotional support, not therapy. However, we can guide you on how to seek professional help.",
    },
    {
      question: "Can I become a listener?",
      answer:
        "Yes! Sahayak welcomes compassionate volunteers. You’ll receive basic training to support others effectively.",
    },
    {
      question: "I would like to donate to Sahayak. How can I do that?",
      answer:
        "You can donate via the official website by clicking the donate button. Every contribution helps expand support access to more people.",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 text-gray-800">
      <h2 className="text-3xl font-semibold text-center mb-10">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`border ${
              openIndex === index ? "border-purple-500" : "border-gray-200"
            } rounded-lg`}
          >
            <button
              onClick={() => toggle(index)}
              className={`w-full text-left p-4 font-medium flex justify-between items-center ${
                openIndex === index ? "text-purple-600" : "text-gray-800"
              }`}
            >
              {item.question}
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-600">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
