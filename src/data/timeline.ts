import { getTimelineImage } from '../utils/assets';
import { Users, MapPin, Heart, Star, GraduationCap, Briefcase } from 'lucide-react';

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  location: string;
  icon: any;
  color: string;
  image: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: "2018",
    title: "The Beginning",
    description: "Five strangers met in the college cafeteria. Little did we know this would be the start of something beautiful.",
    location: "College Campus",
    icon: Users,
    color: "from-primary-400 to-primary-600",
    image: getTimelineImage(2018)
  },
  {
    year: "2019",
    title: "First Group Trip",
    description: "Our first adventure together to the mountains. This trip cemented our bond forever.",
    location: "Manali, Himachal Pradesh",
    icon: MapPin,
    color: "from-secondary-400 to-secondary-600",
    image: getTimelineImage(2019)
  },
  {
    year: "2020",
    title: "Surviving Lockdown Together",
    description: "Even when physically apart, we stayed connected through daily video calls and online games.",
    location: "Virtual World",
    icon: Heart,
    color: "from-purple-400 to-purple-600",
    image: getTimelineImage(2020)
  },
  {
    year: "2021",
    title: "Project Collaboration",
    description: "We worked together on our final year project, combining all our skills to create something amazing.",
    location: "College Lab",
    icon: Star,
    color: "from-accent-400 to-accent-600",
    image: getTimelineImage(2021)
  },
  {
    year: "2022",
    title: "Graduation Day",
    description: "We made it! Five friends graduating together, ready to take on the world.",
    location: "University Auditorium",
    icon: GraduationCap,
    color: "from-green-400 to-green-600",
    image: getTimelineImage(2022)
  },
  {
    year: "2023",
    title: "Career Adventures Begin",
    description: "Starting our professional journeys in different cities, but our friendship remained strong.",
    location: "Various Cities",
    icon: Briefcase,
    color: "from-indigo-400 to-indigo-600",
    image: getTimelineImage(2023)
  },
  {
    year: "2024",
    title: "Reunion & New Beginnings",
    description: "Despite being in different cities, we reunited for an epic road trip and created this digital legacy.",
    location: "Multiple Destinations",
    icon: Users,
    color: "from-pink-400 to-pink-600",
    image: getTimelineImage(2024)
  }
];