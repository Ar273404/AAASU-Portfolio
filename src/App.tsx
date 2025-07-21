import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProfilesPage from "./pages/ProfilePage";
import GalleryPage from "./pages/GalleryPage";
import DiaryPage from "./pages/DiaryPage";
import TimelinePage from "./pages/TimelinePage";
import DreamBoardPage from "./pages/DreamBoardPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profiles" element={<ProfilesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/diary" element={<DiaryPage />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/dreams" element={<DreamBoardPage />} />
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
