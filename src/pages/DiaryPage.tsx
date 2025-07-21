import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, User, Calendar, Heart, MessageCircle, Share2 } from 'lucide-react';

const DiaryPage = () => {
  const diaryEntries = [
    {
      id: 1,
      title: "The Epic Road Trip That Changed Everything",
      excerpt: "Five friends, one car, endless memories. What started as a simple weekend getaway turned into the adventure of a lifetime...",
      content: "It was supposed to be a simple weekend trip to the mountains, but as always with our group, nothing goes according to plan - and that's exactly what makes it perfect...",
      author: "Arun",
      date: "March 15, 2024",
      readTime: "8 min read",
      likes: 42,
      comments: 15,
      image: "https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Adventure", "Friendship", "Travel"]
    },
    {
      id: 2,
      title: "Celebrating Utkarsh's Dream Job",
      excerpt: "From countless coding sessions to landing the dream job at Google. Here's how we celebrated our coding genius...",
      content: "The call came at 3 PM on a Tuesday. Utkarsh's voice was shaking with excitement as he told us the news we'd all been waiting for...",
      author: "Satyam",
      date: "March 10, 2024",
      readTime: "5 min read",
      likes: 38,
      comments: 22,
      image: "https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Success", "Career", "Celebration"]
    },
    {
      id: 3,
      title: "The Great Cooking Disaster of 2024",
      excerpt: "What happens when five guys decide to cook together? Spoiler alert: Keep the pizza delivery number handy...",
      content: "It started with such good intentions. We were all going to cook together, create a masterpiece, and have a great time...",
      author: "Ashutosh",
      date: "March 5, 2024",
      readTime: "6 min read",
      likes: 55,
      comments: 28,
      image: "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Funny", "Cooking", "Disaster"]
    },
    {
      id: 4,
      title: "Remember When We Almost Missed Graduation?",
      excerpt: "A hilarious tale of oversleeping, borrowed ties, and the fastest sprint across campus in history...",
      content: "The night before graduation, we stayed up way too late reminiscing about our college years. Big mistake...",
      author: "Atul",
      date: "February 28, 2024",
      readTime: "4 min read",
      likes: 31,
      comments: 18,
      image: "https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["College", "Graduation", "Memories"]
    },
    {
      id: 5,
      title: "Our First Group Video Call During Lockdown",
      excerpt: "How technology brought us closer when the world kept us apart. The story of maintaining friendship through screens...",
      content: "March 2020 changed everything. Suddenly, we couldn't meet in person, couldn't hang out, couldn't be together...",
      author: "Utkarsh",
      date: "February 20, 2024",
      readTime: "7 min read",
      likes: 47,
      comments: 25,
      image: "https://images.pexels.com/photos/4031011/pexels-photo-4031011.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Lockdown", "Technology", "Adaptation"]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6">AAASU Diary</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our digital journal filled with memories, adventures, and the stories that define our friendship. 
            Each entry is a chapter in our ongoing saga of brotherhood.
          </p>
        </motion.div>

        <div className="space-y-12">
          {diaryEntries.map((entry, index) => (
            <motion.article
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 group"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={entry.image}
                    alt={entry.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center text-gray-400 text-sm">
                      <User size={16} className="mr-2" />
                      <span>{entry.author}</span>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar size={16} className="mr-2" />
                      <span>{entry.date}</span>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <BookOpen size={16} className="mr-2" />
                      <span>{entry.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors">
                    {entry.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {entry.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {entry.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6 text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Heart size={18} className="text-red-400" />
                        <span>{entry.likes}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MessageCircle size={18} className="text-blue-400" />
                        <span>{entry.comments}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <button title='button' className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                        <Share2 size={18} className="text-gray-300" />
                      </button>
                      <button className="px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-500 to-primary-500 text-white rounded-lg hover:from-accent-600 hover:to-primary-600 transition-all duration-300">
            <BookOpen size={20} className="mr-2" />
            Write New Story
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default DiaryPage;