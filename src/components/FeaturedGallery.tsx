import { motion } from "framer-motion";
import { Camera, Heart, MapPin } from "lucide-react";

const FeaturedGallery = () => {
  const featuredImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "College Graduation Day",
      location: "University Campus",
      date: "May 2022",
      likes: 25,
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Annual Trip to Mountains",
      location: "Himachal Pradesh",
      date: "Dec 2023",
      likes: 32,
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Birthday Celebration",
      location: "Home",
      date: "Aug 2023",
      likes: 18,
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Beach Adventure",
      location: "Goa",
      date: "Jan 2024",
      likes: 41,
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured Memories
          </h2>
          <p className="text-xl text-gray-300">
            Capturing our most precious moments together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-4">
                <h3 className="text-white font-semibold mb-2">{image.title}</h3>
                <div className="flex items-center text-gray-300 text-sm mb-2">
                  <MapPin size={14} className="mr-1" />
                  <span>{image.location}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">{image.date}</span>
                  <div className="flex items-center text-red-400">
                    <Heart size={14} className="mr-1 fill-current" />
                    <span>{image.likes}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300">
            <Camera size={20} className="mr-2" />
            View All Photos
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedGallery;
