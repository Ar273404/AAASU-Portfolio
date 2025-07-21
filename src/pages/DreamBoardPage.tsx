import { motion } from "framer-motion";
import {
  Target,
  BookOpen,
  Briefcase,
  Heart,
  Star,
  TrendingUp,
  Award,
  Globe,
} from "lucide-react";

const DreamBoardPage = () => {
  const members = [
    {
      name: "Arun",
      avatar:
        "https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=200",
      gradient: "from-primary-500 to-primary-700",
      dreams: [
        {
          category: "Career",
          icon: Briefcase,
          goal: "Lead a tech startup",
          progress: 75,
          deadline: "2026",
        },
        {
          category: "Education",
          icon: BookOpen,
          goal: "MBA from IIM",
          progress: 60,
          deadline: "2025",
        },
        {
          category: "Personal",
          icon: Heart,
          goal: "Travel 20 countries",
          progress: 40,
          deadline: "2030",
        },
      ],
    },
    {
      name: "Atul",
      avatar:
        "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200",
      gradient: "from-secondary-500 to-secondary-700",
      dreams: [
        {
          category: "Career",
          icon: Star,
          goal: "Design Studio Owner",
          progress: 50,
          deadline: "2027",
        },
        {
          category: "Education",
          icon: Award,
          goal: "UX Design Certification",
          progress: 80,
          deadline: "2024",
        },
        {
          category: "Personal",
          icon: Globe,
          goal: "Photography Exhibition",
          progress: 30,
          deadline: "2025",
        },
      ],
    },
    {
      name: "Ashutosh",
      avatar:
        "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=200",
      gradient: "from-accent-500 to-accent-700",
      dreams: [
        {
          category: "Career",
          icon: TrendingUp,
          goal: "Data Science Manager",
          progress: 65,
          deadline: "2026",
        },
        {
          category: "Education",
          icon: BookOpen,
          goal: "PhD in AI/ML",
          progress: 20,
          deadline: "2028",
        },
        {
          category: "Personal",
          icon: Target,
          goal: "Run a Marathon",
          progress: 45,
          deadline: "2024",
        },
      ],
    },
    {
      name: "Satyam",
      avatar:
        "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=200",
      gradient: "from-purple-500 to-purple-700",
      dreams: [
        {
          category: "Career",
          icon: Briefcase,
          goal: "Business Consultant",
          progress: 70,
          deadline: "2025",
        },
        {
          category: "Education",
          icon: Award,
          goal: "CFA Certification",
          progress: 85,
          deadline: "2024",
        },
        {
          category: "Personal",
          icon: Heart,
          goal: "Volunteer 100 hours/year",
          progress: 60,
          deadline: "2024",
        },
      ],
    },
    {
      name: "Utkarsh",
      avatar:
        "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=200",
      gradient: "from-pink-500 to-pink-700",
      dreams: [
        {
          category: "Career",
          icon: Star,
          goal: "Senior Software Architect",
          progress: 80,
          deadline: "2025",
        },
        {
          category: "Education",
          icon: BookOpen,
          goal: "Cloud Architecture Cert",
          progress: 90,
          deadline: "2024",
        },
        {
          category: "Personal",
          icon: Globe,
          goal: "Open Source Contributor",
          progress: 55,
          deadline: "2025",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Dream Board</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our aspirations, goals, and dreams for the future. Supporting each
            other as we chase our individual and collective dreams.
          </p>
        </motion.div>

        <div className="space-y-12">
          {members.map((member, memberIndex) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: memberIndex * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden">
              {/* Member Header */}
              <div className={`bg-gradient-to-r ${member.gradient} p-6`}>
                <div className="flex items-center space-x-4">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-16 h-16 rounded-full border-4 border-white/20"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      {member.name}'s Dreams
                    </h2>
                    <p className="text-white/80">
                      Turning dreams into reality, one goal at a time
                    </p>
                  </div>
                </div>
              </div>

              {/* Dreams Grid */}
              <div className="p-6 grid md:grid-cols-3 gap-6">
                {member.dreams.map((dream, dreamIndex) => {
                  const Icon = dream.icon;

                  return (
                    <motion.div
                      key={dreamIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: memberIndex * 0.1 + dreamIndex * 0.05,
                      }}
                      className="bg-white/10 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`p-2 bg-gradient-to-r ${member.gradient} rounded-lg`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-gray-400 text-sm font-medium">
                            {dream.category}
                          </span>
                        </div>
                        <span className="text-gray-400 text-sm">
                          {dream.deadline}
                        </span>
                      </div>

                      <h3 className="text-white font-semibold mb-4 text-lg">
                        {dream.goal}
                      </h3>

                      {/* Progress Bar */}
                      <div className="mb-2">
                        <div className="flex justify-between text-sm text-gray-400 mb-2">
                          <span>Progress</span>
                          <span>{dream.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${dream.progress}%` }}
                            transition={{
                              duration: 1,
                              delay: memberIndex * 0.1 + dreamIndex * 0.1,
                            }}
                            className={`bg-gradient-to-r ${member.gradient} h-2 rounded-full`}
                          />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Group Goals Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 backdrop-blur-lg rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Our Collective Dreams
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Target className="w-8 h-8 text-primary-400" />
                <h4 className="text-xl font-semibold text-white">
                  Group Reunion 2025
                </h4>
              </div>
              <p className="text-gray-300 mb-4">
                Plan an epic month-long trip across Europe to celebrate our
                friendship and achievements.
              </p>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-primary-400 to-secondary-400 h-2 rounded-full w-3/4"></div>
              </div>
              <div className="text-right text-sm text-gray-400 mt-2">
                75% planned
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Star className="w-8 h-8 text-accent-400" />
                <h4 className="text-xl font-semibold text-white">
                  AAASU Foundation
                </h4>
              </div>
              <p className="text-gray-300 mb-4">
                Start a foundation to help underprivileged students with
                education and career guidance.
              </p>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-accent-400 to-primary-400 h-2 rounded-full w-1/4"></div>
              </div>
              <div className="text-right text-sm text-gray-400 mt-2">
                25% conceptualized
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DreamBoardPage;
