import { getProfileImage } from '../utils/assets';

export interface Member {
  id: number;
  name: string;
  role: string;
  bio: string;
  education: string;
  favoriteQuote: string;
  image: string;
  gradient: string;
  skills: string[];
  github: string;
  linkedin: string;
  email: string;
}

export const members: Member[] = [
 {
  id: 1,
  name: "Arun Yadav",
  role: "The Leader",
  bio: "Natural leader with a passion for technology and innovation. Always the one to organize our group adventures and lead with clarity.",
  education: "B.Tech in Computer Science",
  favoriteQuote: "Leadership is not about being in charge, it's about taking care of those in your charge.",
  image: getProfileImage('arun'),  // Make sure this function returns a valid image URL or import
  gradient: "from-primary-500 to-primary-700",
  skills: ["Leadership", "React.js", "Node.js", "Express.js", "MongoDB", "Team Management"],
  github: "https://github.com/Ar273404",     
  linkedin: "https://www.linkedin.com/in/arun273404/",  
  email: "arun273404@gmail.com"                  
},
  {
    id: 2,
    name: "Atul",
    role: "Cyber Security Expert",
    bio: "The ethical hacker of the group—cracks codes, not rules. Always two steps ahead of the threat.",
    education: "B.Tech in IT and Politicnic in Electronics Engineering",
    favoriteQuote: "Tomorrow, do thy worst, for I have lived today..",
    image: getProfileImage("atul"),
    gradient: "from-secondary-500 to-secondary-700",
    skills: [
      "Ethical Hacking",
      "Vulnerability Assessment",
      "Penetration Testing",
      "Network Security",
      "Wireshark Analysis",
      "Metasploit Framework",
    ],
    github: "https://github.com/ak-mishra96",
    linkedin: "https://www.linkedin.com/in/atul-mishra-8170761a0/",
    email: "akmishraa00@gmail.com",
  }, 
  {
    id: 3,
    name: "Ashutosh",
    role: "Programmer",
    bio: "Tech-savvy with a passion for building scalable applications and tackling complex backend systems.",
    education: "B.Tech in Computer Science And Politicnic in Mechanical",
    favoriteQuote:
      "Every problem has a solution, you just need to find the right angle.",
    image: getProfileImage("ashutosh"),
    gradient: "from-accent-500 to-accent-700",
    skills: ["Problem Solving", "Software Development", "Algorithms"],
    github: "https://github.com/Ashutosh-Repos",
    linkedin: "https://www.linkedin.com/in/ashutosh-kumar-2867182a2/",
    email: "clashutosh04@gmail.com",
  },
  {
    id: 4,
    name: "Satyam",
    role: "The Phoenix",
    bio: " A thinker , A doer  and A dreamer fused into one .",
    education: "B.tech in Electrical Engineering ",
    favoriteQuote: "Never Ever Give Up .",
    image: getProfileImage('satyam'),
    gradient: "from-purple-500 to-purple-700",
    skills: ["The Motivator","Chess Champion"],
    github: "satyamjaiswalgorakhpur",
    linkedin: "https://www.linkedin.com/in/satyam-jaiswal-2a58bb230",
    email: "satya1092003@gmail.com"
  },
  {
  id: 5,
  name: "Utkarsh Raj Anand",
  role: "The Tech Genius",
  bio: "Ex-DRDO intern and MCAT topper who builds apps faster than you can blink. Har baat baat pe rota hai, bina bataye form bhar deta hai, aur har chiz chupata hai jaise kuch toh zaroori secret ho.",
  education: "B.Tech in Electrical Engineering (EE), Politicnic in Electronics Engineering",
  favoriteQuote: "Code is like humor. When you have to explain it, it's bad.",
  image: getProfileImage('utkarsh'),
  gradient: "from-pink-500 to-pink-700",
  skills: ["HTML DOM Master","Data Scientist", "Python Developer","Embedded Systems"],
  github: "https://github.com/utkarshrajanand63",
  linkedin: "https://linkedin.com/in/utkarshrajanand63",
  email: "utkarshrajanand63@gmail.com"
}
];