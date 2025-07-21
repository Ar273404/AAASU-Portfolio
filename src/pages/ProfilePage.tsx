import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  GraduationCap,
  Heart,
} from "lucide-react";

const ProfilesPage = () => {
  const members = [
    {
      id: 1,
      name: "Arun",
      role: "The Leader",
      bio: "Natural leader with a passion for technology and innovation. Always the one to organize our group adventures.",
      education: "B.Tech in Computer Science",
      favoriteQuote:
        "Leadership is not about being in charge, it's about taking care of those in your charge.",
      image:
        "https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=400",
      gradient: "from-primary-500 to-primary-700",
      skills: ["Leadership", "React.js", "Node.js", "Team Management"],
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "arun@example.com",
    },
    {
      id: 2,
      name: "Atul",
      role: "The Creative Mind",
      bio: "Creative designer and artist who brings color to our group. Master of making everything look beautiful.",
      education: "B.Des in Product Design",
      favoriteQuote: "Creativity is intelligence having fun.",
      image:
        "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
      gradient: "from-secondary-500 to-secondary-700",
      skills: ["UI/UX Design", "Illustration", "Photography", "Branding"],
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "atul@example.com",
    },
    {
      id: 3,
      name: "Ashutosh",
      role: "The Problem Solver",
      bio: "Analytical mind who can solve any problem. The go-to person when things get complicated.",
      education: "B.Tech in Information Technology",
      favoriteQuote:
        "Every problem has a solution, you just need to find the right angle.",
      image:
        "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=400",
      gradient: "from-accent-500 to-accent-700",
      skills: [
        "Problem Solving",
        "Python",
        "Data Analysis",
        "Algorithm Design",
      ],
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "ashutosh@example.com",
    },
    {
      id: 4,
      name: "Satyam",
      role: "The Motivator",
      bio: "The most optimistic person you'll ever meet. Always knows how to lift everyone's spirits up.",
      education: "B.Com in Business Management",
      favoriteQuote: "Believe you can and you're halfway there.",
      image:
        "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400",
      gradient: "from-purple-500 to-purple-700",
      skills: [
        "Public Speaking",
        "Team Building",
        "Business Strategy",
        "Marketing",
      ],
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "satyam@example.com",
    },
    {
      id: 5,
      name: "Utkarsh",
      role: "The Tech Genius",
      bio: "Coding wizard who can build anything from scratch. The backbone of all our technical projects.",
      education: "B.Tech in Software Engineering",
      favoriteQuote:
        "Code is like humor. When you have to explain it, it's bad.",
      image:
        "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400",
      gradient: "from-pink-500 to-pink-700",
      skills: [
        "Full Stack Development",
        "DevOps",
        "Cloud Computing",
        "Mobile Apps",
      ],
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "utkarsh@example.com",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Meet the AAASU Family
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Five unique individuals united by an unbreakable bond of friendship.
            Each bringing their own flavor to our amazing journey together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 group">
              <div className={`bg-gradient-to-r ${member.gradient} p-6`}>
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-white/20"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2">
                      <Heart className="w-4 h-4 text-red-500 fill-current" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {member.name}
                    </h2>
                    <p className="text-white/90 font-medium text-lg">
                      {member.role}
                    </p>
                    <div className="flex items-center text-white/70 mt-2">
                      <GraduationCap size={16} className="mr-2" />
                      <span className="text-sm">{member.education}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {member.bio}
                </p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">
                    Skills & Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-4 mb-6">
                  <p className="text-gray-300 italic">
                    "{member.favoriteQuote}"
                  </p>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                    <Github size={20} className="text-gray-300" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                    <Linkedin size={20} className="text-gray-300" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                    <Mail size={20} className="text-gray-300" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilesPage;
