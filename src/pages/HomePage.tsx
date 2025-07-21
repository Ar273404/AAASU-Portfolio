import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Heart, Camera, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import QuoteRotator from "../components/QuoteRotator";
import FeaturedGallery from "../components/FeaturedGallery";
import RecentMemories from "../components/RecentMemories";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <QuoteRotator />
      <FeaturedGallery />
      <RecentMemories />

      {/* Call to Action Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-8">
            Explore Our Journey
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <Users className="w-12 h-12 text-primary-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Our Profiles
              </h3>
              <p className="text-gray-300 mb-4">
                Meet the AAASU family and learn about each member's journey
              </p>
              <Link
                to="/profiles"
                className="inline-flex items-center text-primary-400 hover:text-primary-300">
                Explore Profiles <ChevronRight size={16} className="ml-1" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <Camera className="w-12 h-12 text-secondary-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Memory Gallery
              </h3>
              <p className="text-gray-300 mb-4">
                Relive our best moments through photos and videos
              </p>
              <Link
                to="/gallery"
                className="inline-flex items-center text-secondary-400 hover:text-secondary-300">
                View Gallery <ChevronRight size={16} className="ml-1" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <BookOpen className="w-12 h-12 text-accent-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Our Stories
              </h3>
              <p className="text-gray-300 mb-4">
                Read our diary entries and shared memories
              </p>
              <Link
                to="/diary"
                className="inline-flex items-center text-accent-400 hover:text-accent-300">
                Read Stories <ChevronRight size={16} className="ml-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
