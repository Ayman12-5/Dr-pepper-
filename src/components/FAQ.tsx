import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What are the 23 flavors in Dr Pepper?",
    answer: "That's a closely guarded secret! The unique blend of 23 flavors is what makes Dr Pepper one of a kind. We can tell you it's a mix of fruit and spice flavors, but the exact recipe is locked away."
  },
  {
    question: "Does Dr Pepper contain caffeine?",
    answer: "Yes, original Dr Pepper contains caffeine. However, we also offer Caffeine Free Dr Pepper for those who prefer it."
  },
  {
    question: "Is Dr Pepper a cola?",
    answer: "No! Dr Pepper is not a cola, nor is it a fruit-flavored beverage. It's its own unique category of soft drink."
  },
  {
    question: "How do I enter the Tuition Giveaway?",
    answer: "You can enter the Tuition Giveaway by scanning the QR code on specially marked packaging or visiting our Campaigns page during the promotional period."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-dp-cream-dark text-dp-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl text-dp-red mb-4">You Asked.</h2>
          <p className="text-xl text-dp-dark/80 font-medium">
            Everything you need to know about your favorite drink.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-bold text-xl pr-8">{faq.question}</span>
                <ChevronDown 
                  size={24} 
                  className={`text-dp-red transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-lg text-dp-dark/70 font-medium border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
