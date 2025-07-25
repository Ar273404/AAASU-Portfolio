// 

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Camera,
  Heart,
  Download,
  MapPin,
  Calendar,
} from "lucide-react";
import { galleryPhotos } from "../data/gallery";

const GalleryPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filters = [
    { id: "all", name: "All Photos" },
    { id: "trips", name: "Trips" },
    { id: "celebrations", name: "Celebrations" },
    { id: "college", name: "College" },
    { id: "casual", name: "Casual" },
  ];

  const filteredPhotos =
    selectedFilter === "all"
      ? galleryPhotos
      : galleryPhotos.filter((photo) => photo.category === selectedFilter);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6">Memory Gallery</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A visual journey through our most cherished moments together. From
            spontaneous adventures to milestone celebrations.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-full p-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedFilter === filter.id
                    ? "bg-primary-500 text-white"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}>
                {filter.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button title="button" className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30">
                    <Heart size={16} className="text-white" />
                  </button>
                  <button title="button" className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30">
                    <Download size={16} className="text-white" />
                  </button>
                </div>

                {/* Photo Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {photo.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-300">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        <span>{photo.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        <span>{photo.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-red-400">
                      <Heart size={14} className="mr-1 fill-current" />
                      <span>{photo.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300">
            <Camera size={20} className="mr-2" />
            Load More Photos
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default GalleryPage;