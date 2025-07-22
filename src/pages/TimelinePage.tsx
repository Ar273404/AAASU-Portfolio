import { motion } from "framer-motion";
import {
  MapPin,
  Users,
  GraduationCap,
  Briefcase,
  Star,
  Heart,
} from "lucide-react";

const TimelinePage = () => {
  const timelineEvents = [
    {
      year: "2018",
      title: "The Beginning",
      description:
        "Five strangers met in the college cafeteria. Little did we know this would be the start of something beautiful.",
      location: "College Campus",
      icon: Users,
      color: "from-primary-400 to-primary-600",
      image:
        "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      year: "2019",
      title: "First Group Trip",
      description:
        "Our first adventure together to the mountains. This trip cemented our bond forever.",
      location: "Manali, Himachal Pradesh",
      icon: MapPin,
      color: "from-secondary-400 to-secondary-600",
      image:
        "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      year: "2020",
      title: "Surviving Lockdown Together",
      description:
        "Even when physically apart, we stayed connected through daily video calls and online games.",
      location: "Virtual World",
      icon: Heart,
      color: "from-purple-400 to-purple-600",
      image:
        "https://images.pexels.com/photos/4031011/pexels-photo-4031011.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      year: "2021",
      title: "Project Collaboration",
      description:
        "We worked together on our final year project, combining all our skills to create something amazing.",
      location: "College Lab",
      icon: Star,
      color: "from-accent-400 to-accent-600",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      year: "2022",
      title: "Graduation Day",
      description:
        "We made it! Five friends graduating together, ready to take on the world.",
      location: "University Auditorium",
      icon: GraduationCap,
      color: "from-green-400 to-green-600",
      image:
        "https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      year: "2023",
      title: "Career Adventures Begin",
      description:
        "Starting our professional journeys in different cities, but our friendship remained strong.",
      location: "Various Cities",
      icon: Briefcase,
      color: "from-indigo-400 to-indigo-600",
      image:
        "https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      year: "2024",
      title: "Reunion & New Beginnings",
      description:
        "Despite being in different cities, we reunited for an epic road trip and created this digital legacy.",
      location: "Multiple Destinations",
      icon: Users,
      color: "from-pink-400 to-pink-600",
      image:
        "https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      year: "2025+",
      title: "The Future Awaits",
      description:
        "Whatever comes next, we'll face it together. Here's to many more years of friendship and adventures!",
      location: "Anywhere & Everywhere",
      icon: Star,
      color:
        "from-gradient-to-r from-primary-400 via-secondary-400 to-accent-400",
      image:
        "https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our Journey Timeline
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From strangers to brothers - the milestones that shaped our
            incredible friendship. Each year brought new adventures, challenges,
            and unforgettable memories.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-400 via-secondary-400 to-accent-400 transform md:-translate-x-1/2"></div>

          {timelineEvents.map((event, index) => {
            const Icon = event.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-16 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}>
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${event.color} rounded-full flex items-center justify-center border-4 border-gray-900`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`ml-24 md:ml-0 md:w-5/12 ${
                    isEven ? "md:mr-8" : "md:ml-8"
                  }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-3xl font-bold text-white">
                          {event.year}
                        </h2>
                        <div className="flex items-center text-gray-400 text-sm">
                          <MapPin size={16} className="mr-1" />
                          <span>{event.location}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-primary-300 mb-3">
                        {event.title}
                      </h3>

                      <p className="text-gray-300 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Our Friendship in Numbers
          </h3>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-400 mb-2">7+</div>
              <div className="text-gray-300">Years Together</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-400 mb-2">
                15+
              </div>
              <div className="text-gray-300">Adventures</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-400 mb-2">
                1000+
              </div>
              <div className="text-gray-300">Memories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">∞</div>
              <div className="text-gray-300">Bond Strength</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TimelinePage;

