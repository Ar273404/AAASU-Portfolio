import { motion } from "framer-motion";
import { Calendar, User, MessageCircle } from "lucide-react";

const RecentMemories = () => {
  const memories = [
    {
      id: 1,
      title: "Our Epic Road Trip Adventure",
      excerpt:
        "Five friends, one car, endless memories. Read about our spontaneous journey across three states...",
      author: "Arun",
      date: "2 days ago",
      readTime: "5 min read",
      image:
        "https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      title: "Celebrating Utkarsh's New Job",
      excerpt:
        "From countless interview preparations to finally landing the dream job. Here's how we celebrated...",
      author: "Satyam",
      date: "1 week ago",
      readTime: "3 min read",
      image:
        "https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 3,
      title: "The Great Cooking Disaster",
      excerpt:
        "What happens when five guys try to cook together? Spoiler alert: Order pizza as backup...",
      author: "Ashutosh",
      date: "2 weeks ago",
      readTime: "4 min read",
      image:
        "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <section className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Recent Stories</h2>
          <p className="text-xl text-gray-300">
            Latest entries from our digital diary
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memories.map((memory, index) => (
            <motion.article
              key={memory.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 group cursor-pointer">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={memory.image}
                  alt={memory.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
                  {memory.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {memory.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      <span>{memory.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>{memory.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle size={14} className="mr-1" />
                    <span>{memory.readTime}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-500 to-primary-500 text-white rounded-lg hover:from-accent-600 hover:to-primary-600 transition-all duration-300">
            Read All Stories
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default RecentMemories;
