import { ASSET_PATHS, FALLBACK_IMAGES } from '../utils/assets';

export interface GalleryPhoto {
  id: number;
  src: string;
  title: string;
  category: 'trips' | 'celebrations' | 'college' | 'casual';
  location: string;
  date: string;
  likes: number;
}

export const galleryPhotos: GalleryPhoto[] = [
  // College Photos
  {
    id: 1,
    src: ASSET_PATHS.gallery.college[0] || FALLBACK_IMAGES.gallery,
    title: "First Day of College",
    category: "college",
    location: "University Campus",
    date: "Aug 2018",
    likes: 15
  },
  {
    id: 2,
    src: ASSET_PATHS.gallery.college[1] || FALLBACK_IMAGES.gallery,
    title: "Study Group Session",
    category: "college",
    location: "Library",
    date: "Feb 2020",
    likes: 12
  },
  {
    id: 3,
    src: ASSET_PATHS.gallery.college[2] || FALLBACK_IMAGES.gallery,
    title: "College Festival",
    category: "college",
    location: "Campus Ground",
    date: "Oct 2021",
    likes: 28
  },
  
  // Trip Photos
  {
    id: 4,
    src: ASSET_PATHS.gallery.trips[0] || FALLBACK_IMAGES.gallery,
    title: "Goa Beach Adventure",
    category: "trips",
    location: "Goa",
    date: "Jan 2024",
    likes: 41
  },
  {
    id: 5,
    src: ASSET_PATHS.gallery.trips[1] || FALLBACK_IMAGES.gallery,
    title: "Himachal Mountains",
    category: "trips",
    location: "Himachal Pradesh",
    date: "Dec 2023",
    likes: 32
  },
  {
    id: 6,
    src: ASSET_PATHS.gallery.trips[2] || FALLBACK_IMAGES.gallery,
    title: "Epic Road Trip",
    category: "trips",
    location: "Highway Adventure",
    date: "Jun 2024",
    likes: 35
  },
  
  // Celebration Photos
  {
    id: 7,
    src: ASSET_PATHS.gallery.celebrations[0] || FALLBACK_IMAGES.gallery,
    title: "Birthday Celebration",
    category: "celebrations",
    location: "Home",
    date: "Aug 2024",
    likes: 18
  },
  {
    id: 8,
    src: ASSET_PATHS.gallery.celebrations[1] || FALLBACK_IMAGES.gallery,
    title: "Graduation Day",
    category: "celebrations",
    location: "University",
    date: "May 2022",
    likes: 25
  },
  {
    id: 9,
    src: ASSET_PATHS.gallery.celebrations[2] || FALLBACK_IMAGES.gallery,
    title: "Job Celebration",
    category: "celebrations",
    location: "Restaurant",
    date: "Mar 2023",
    likes: 22
  },
  
  // Casual Photos
  {
    id: 10,
    src: ASSET_PATHS.gallery.casual[0] || FALLBACK_IMAGES.gallery,
    title: "Cafe Meetup",
    category: "casual",
    location: "Local Cafe",
    date: "Mar 2024",
    likes: 15
  },
  {
    id: 11,
    src: ASSET_PATHS.gallery.casual[1] || FALLBACK_IMAGES.gallery,
    title: "Movie Night",
    category: "casual",
    location: "Home",
    date: "Feb 2024",
    likes: 19
  },
  {
    id: 12,
    src: ASSET_PATHS.gallery.casual[2] || FALLBACK_IMAGES.gallery,
    title: "Gaming Session",
    category: "casual",
    location: "Gaming Zone",
    date: "Jan 2024",
    likes: 16
  }
];

// Featured photos for homepage
export const featuredPhotos = galleryPhotos.slice(0, 4);