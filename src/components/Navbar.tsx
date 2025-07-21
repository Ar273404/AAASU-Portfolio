import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Users, Camera, BookOpen, Clock, Target } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", name: "Home", icon: Users },
    { path: "/profiles", name: "Profiles", icon: Users },
    { path: "/gallery", name: "Gallery", icon: Camera },
    { path: "/diary", name: "Diary", icon: BookOpen },
    { path: "/timeline", name: "Timeline", icon: Clock },
    { path: "/dreams", name: "Dreams", icon: Target },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-lg border-b border-white/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-white">
            <Link to="/" className="flex items-center space-x-2">
              <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                AAASU
              </span>
              <span className="text-white">Legacy</span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}>
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}>
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded-lg hover:bg-white/10">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-2 px-4 py-3 text-left w-full transition-all duration-200 ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}>
                  <Icon size={18} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
