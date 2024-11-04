/* eslint-disable react/no-unescaped-entities */
import  { useState } from 'react';
import FAQItem from './FAQItem';
import Layout from '../../components/layout/Layout';
import { Search } from 'lucide-react';

const FAQSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const faqs = [
    { question: "How can I rent a two-wheeler online?", answer: "You can rent a two-wheeler by visiting our website and following the steps provided." },
    // { question: "Do I need to pay a security deposit to rent a Freedo?", answer: "Yes, a security deposit is required when renting a Freedo." },
    { question: "What is the condition of the vehicles?", answer: "All vehicles are regularly maintained and serviced for your safety and comfort." },
    {
      "question": "Is home delivery possible for the vehicle?",
      "answer": "No, we currently do not offer home delivery services. Please visit our location for pickup."
    },    
    { question: "What documents are required for renting a scooter/bike?", answer: "You need to provide a valid driving license and a government-issued ID proof." },
  ];

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
            <div className="py-10">
      <div className="container mx-auto px-4">
        <h2 className=" text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 rounded-md bg-white drop-shadow text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <span className="absolute right-5 top-3 text-gray-400">
          
            <Search/>
          </span>
        </div>

        <div className="bg-white drop-shadow rounded-md p-6 space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))
          ) : (
            <p className="text-gray-600 text-center app-font">No FAQs found for "{searchQuery}"</p>
          )}
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default FAQSection;
