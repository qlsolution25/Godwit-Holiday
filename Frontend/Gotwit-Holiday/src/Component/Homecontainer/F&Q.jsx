import { useState } from "react";
import { ChevronDown, ChevronUp, Plus } from "lucide-react";

export default function TravelCenterFAQ() {
  const [openItems, setOpenItems] = useState({ 0: true });

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqItems = [
    {
      question: "Is Godwit Holidays ATOL protected?",
      answer: "Yes. Godwit Holidays owns an ATOL certification issued by the Civil Aviation Authority, which guarantees that all our flight arrangements and flight-inclusive packages are 100% financially protected."
    },
    {
      question: "Why Should I book holidays with Godwit Holidays?",
      answer: "Godwit Holidays offers comprehensive holiday packages with ATOL protection, competitive prices, and excellent customer service. We provide a wide range of destinations and travel options to suit every budget and preference."
    },
    {
      question: "Why should I book flights with Godwit Holidays?",
      answer: "Our flights are ATOL protected, we offer competitive prices, flexible booking options, and 24/7 customer support. We work with major airlines to provide you with the best flight deals and reliable service."
    },
    {
      question: "Can I book with Low Deposits?",
      answer: "Yes, we offer low deposit options to make your holiday booking more affordable. You can secure your holiday with a small initial payment and spread the remaining cost over manageable installments."
    },
    {
      question: "What holiday destinations do you offer?",
      answer: "We offer a wide range of destinations including popular European beach resorts, exotic tropical locations, city breaks, adventure holidays, and cultural tours across the globe. Contact us for specific destination availability."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white p-6 text-center">
          <h1 className="text-2xl md:text-3xl font-bold">
            Frequently Asked Questions About Godwit Holidays
          </h1>
          <div className="w-12 h-1 bg-orange-400 mx-auto mt-3"></div>
        </div>

        {/* FAQ Items */}
        <div className="p-6 space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-gray-50 hover:bg-gray-100 transition-colors duration-200 rounded-xl border border-gray-200 shadow-sm">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-xl"
              >
                <span className="text-blue-600 font-medium text-sm md:text-base pr-4">
                  {item.question}
                </span>
                <div className="flex-shrink-0">
                  {openItems[index] ? (
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <ChevronUp className="w-4 h-4 text-white" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                      <Plus className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              </button>
              
              {openItems[index] && (
                <div className="px-6 pb-4 bg-white rounded-b-xl">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}