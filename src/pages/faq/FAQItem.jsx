/* eslint-disable react/prop-types */
import { MinusCircle, PlusCircle } from 'lucide-react';
import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item border-b border-gray-200 py-2 app-font">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left text-lg font-medium text-gray-700 flex justify-between items-center focus:outline-none"
      >
        {question}
        <span className="text-teal-500">{isOpen ? <MinusCircle/> : <PlusCircle/>}</span>
      </button>
      {isOpen && <div className="mt-2 text-gray-600">{answer}</div>}
    </div>
  );
};

export default FAQItem;
