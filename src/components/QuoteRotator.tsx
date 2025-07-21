import  { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const quotes = [
  {
    text: "True friendship is not about being there when it's convenient; it's about being there when it's not.",
    author: "Arun",
    color: "from-primary-400 to-primary-600",
  },
  {
    text: "Friends are the family we choose for ourselves, and I chose the best ones.",
    author: "Atul",
    color: "from-secondary-400 to-secondary-600",
  },
  {
    text: "In the arithmetic of friendship, we never really know how much we mean to each other.",
    author: "Ashutosh",
    color: "from-accent-400 to-accent-600",
  },
  {
    text: "A good friend knows all your stories. A best friend helped you write them.",
    author: "Satyam",
    color: "from-purple-400 to-purple-600",
  },
  {
    text: "Friendship isn't about whom you have known the longest. It's about who walked into your life and said 'I'm here for you.'",
    author: "Utkarsh",
    color: "from-pink-400 to-pink-600",
  },
];

const QuoteRotator = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 bg-black/20">
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-center">
            <div
              className={`bg-gradient-to-r ${quotes[currentIndex].color} p-8 rounded-2xl shadow-2xl`}>
              <Quote className="w-12 h-12 text-white mx-auto mb-6 opacity-80" />
              <blockquote className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-6">
                "{quotes[currentIndex].text}"
              </blockquote>
              <cite className="text-xl text-white/90 font-semibold">
                - {quotes[currentIndex].author}
              </cite>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Quote indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {quotes.map((_, index) => (
            <button title="button"
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuoteRotator;
