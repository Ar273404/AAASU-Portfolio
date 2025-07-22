// Asset path utilities for AAASU Portfolio

export const ASSET_PATHS = {
  // Profile photos
  profiles: {
    arun: '/images/profiles/Arun.jpg',
    atul: '/images/profiles/Atul.jpg',
    ashutosh: '/images/profiles/Aashutosh.jpg',
    satyam: '/images/profiles/Satyam.jpg',
    utkarsh: '/images/profiles/Utkarsh.jpg',
  },
  
  // Gallery photos by category
  gallery: {
    trips: [
      '/images/gallery/trips/trip.jpg',
      '/images/gallery/trips/trip1.jpg',
      '/images/gallery/trips/trip2.jpg',
      '/images/gallery/trips/trip3.jpg',
      '/images/gallery/trips/trip4.jpg',
      
    ],
    celebrations: [
      '/images/gallery/celeberations/celebration1.jpg',
      '/images/gallery/celeberations/celebration2.jpg',
      '/images/gallery/celeberations/Birthday.jpg',
      '/images/gallery/celeberations/celebration3.jpg',
    //   '/images/gallery/celebrations/graduation-ceremony-2022.jpg',
    //   '/images/gallery/celebrations/job-celebration-2023.jpg',
    ],
    college: [
      '/images/gallery/college/college3.jpg',
      '/images/gallery/college/college2.jpg',
      '/images/gallery/college/college3.jpg',
    //   '/images/gallery/college/first-day-2018.jpg',
    //   '/images/gallery/college/study-group-2020.jpg',
    //   '/images/gallery/college/college-fest-2021.jpg',
    ],
    casual: [
      '/images/gallery/casual/Casual1.jpg',
       '/images/gallery/casual/Casual3.jpg',
       '/images/gallery/casual/Casual3jpg.jpg',
    //   '/images/gallery/casual/movie-night-2023.jpg',
    //   '/images/gallery/casual/gaming-session-2024.jpg',
    ],
  },
  
  // Timeline milestone photos
  timeline: {
    2018: '/images/timeline/2018-beginning.jpg',
    2019: '/images/timeline/2019-first-trip.jpg',
    2020: '/images/timeline/2020-lockdown.jpg',
    2021: '/images/timeline/2021-project.jpg',
    2022: '/images/timeline/2022-graduation.jpg',
    2023: '/images/timeline/2023-careers.jpg',
    2024: '/images/timeline/2024-reunion.jpg',
  },
  
  // Hero section images
  hero: {
    main: '/images/hero/group-hero.jpg',
    banner: '/images/hero/friendship-banner.jpg',
  },
  
  // Videos
  videos: {
    memories: [
      '/videos/memories/college-memories-2022.mp4',
      '/videos/memories/trip-highlights-2023.mp4',
    ],
    celebrations: [
      '/videos/celebrations/graduation-speech-2022.mp4',
      '/videos/celebrations/birthday-wishes-2024.mp4',
    ],
  },
};

// Fallback images (using Pexels as backup)
export const FALLBACK_IMAGES = {
  profile: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=400',
  gallery: 'https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg?auto=compress&cs=tinysrgb&w=800',
  timeline: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600',
  hero: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920',
};

// Utility function to get image with fallback
export const getImageWithFallback = (localPath: string, fallbackUrl: string): string => {
  // In a real app, you might want to check if the local image exists
  // For now, we'll use the local path and let the browser handle 404s
  return localPath || fallbackUrl;
};

// Helper to get profile image
export const getProfileImage = (memberName: keyof typeof ASSET_PATHS.profiles): string => {
  return ASSET_PATHS.profiles[memberName] || FALLBACK_IMAGES.profile;
};

// Helper to get timeline image
export const getTimelineImage = (year: keyof typeof ASSET_PATHS.timeline): string => {
  return ASSET_PATHS.timeline[year] || FALLBACK_IMAGES.timeline;
};