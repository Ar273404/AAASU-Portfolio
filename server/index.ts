import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, '../dist')));
// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'AAASU Portfolio API is running!' });
});

// Mock data endpoints
app.get('/api/members', (req, res) => {
  const members = [
    {
      id: 1,
      name: 'Arun',
      role: 'The Leader',
      bio: 'Natural leader with a passion for technology and innovation.',
      education: 'B.Tech in Computer Science',
      skills: ['Leadership', 'React.js', 'Node.js', 'Team Management'],
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'arun@example.com'
    },
    // Add other members...
  ];
  res.json(members);
});

app.get('/api/gallery', (req, res) => {
  const photos = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg',
      title: 'Graduation Day',
      location: 'University',
      date: 'May 2022',
      likes: 25,
      category: 'college'
    },
    // Add more photos...
  ];
  res.json(photos);
});

app.get('/api/diary', (req, res) => {
  const entries = [
    {
      id: 1,
      title: 'The Epic Road Trip Adventure',
      excerpt: 'Five friends, one car, endless memories...',
      author: 'Arun',
      date: 'March 15, 2024',
      readTime: '8 min read',
      likes: 42,
      comments: 15
    },
    // Add more entries...
  ];
  res.json(entries);
});

// Catch all handler: send back React's index.html file for any non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 AAASU Portfolio server running on port ${PORT}`);
});