import React from "react";
import { motion } from "framer-motion";
import { Heart, Star, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-secondary-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-20 w-2 h-2 bg-accent-400 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-10 w-4 h-4 bg-primary-300 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="p-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full">
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent">
              AAASU
            </motion.h1>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-4 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full">
              <Heart className="w-8 h-8 text-white fill-white" />
            </motion.div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl md:text-4xl font-semibold text-white mb-4">
            Legacy of Friendship
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A digital chronicle celebrating the unbreakable bond of five friends
            -<span className="text-primary-400 font-semibold"> Arun</span>,
            <span className="text-secondary-400 font-semibold"> Atul</span>,
            <span className="text-accent-400 font-semibold"> Ashutosh</span>,
            <span className="text-primary-300 font-semibold"> Satyam</span>, and
            <span className="text-secondary-300 font-semibold"> Utkarsh</span>
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span>Since 2018</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <Heart className="w-4 h-4 text-red-400 fill-red-400" />
            <span>Infinite Memories</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Forever Friends</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
