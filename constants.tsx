
import { 
  Glasses, 
  Globe, 
  Box, 
  Cpu, 
  Linkedin, 
  Github, 
  Mail,
  Layers,
  Smartphone,
  Monitor,
  Bot
} from 'lucide-react';
import { Project, Service, SocialLink, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#what-i-build' },
  { label: 'Projects', href: '#projects' },
  { label: 'Vision', href: '#/vision' },
  { label: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/dhiran-karki',
    icon: Linkedin,
    label: 'Connect on LinkedIn'
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/Dhiran28',
    icon: Github,
    label: 'View GitHub Profile'
  },
  {
    platform: 'YouTube',
    url: 'https://youtube.com/@apar.meta',
    icon: Monitor,
    label: 'View YouTube Channel'
  },
  {
    platform: 'Email',
    url: 'mailto:contact@dhiran28.com',
    icon: Mail,
    label: 'Send Email'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'vr',
    title: 'VR & Haptics',
    description: 'Unity & C# simulations focusing on custom hardware integration, haptic feedback gloves, and immersive training scenarios.',
    icon: Glasses
  },
  {
    id: 'ar',
    title: 'AR & Filters',
    description: 'Spark AR and WebAR experiences reaching 52M+ views. Top 120 Meta Creator recognized for viral effects.',
    icon: Smartphone
  },
  {
    id: 'iot',
    title: 'IoT & Embedded',
    description: 'Real-time systems using Raspberry Pi, ESP32, and Arduino (C++) to bridge physical sensors with digital alerts.',
    icon: Cpu
  },
  {
    id: 'ml',
    title: 'AI & Robotics',
    description: 'Autonomous bots and edge-based ML (TensorFlow Lite) for object detection and gesture control.',
    icon: Bot
  }
];

// ==========================================
// IMAGE UPLOAD GUIDE
// ==========================================
// 1. Project Images: 
//    - Recommended Size: 1280 x 720 pixels (720p)
//    - Aspect Ratio: 16:9
//    - Format: JPG or WEBP (smaller file size)
//
// 2. Profile Picture (in About section):
//    - Recommended Size: 800 x 800 pixels
//    - Aspect Ratio: 1:1 (Square)
//
// 3. How to use local images:
//    - Place images in: public/Images/your-file.jpg
//    - Set imageUrl: '/Images/your-file.jpg'
// ==========================================

export const PROJECTS: Project[] = [
  // --- VR PROJECTS ---
  {
    id: 'first-responder',
    title: 'First Responder Training',
    category: 'Virtual Reality',
    filter: 'VR',
    description: 'A VR simulation training tool featuring custom-built haptic gloves using flex sensors. Utilizes TensorFlow Lite on Oculus Go for real-time gesture recognition.',
    tags: ['Unity', 'TensorFlow Lite', 'Haptics', 'Oculus Go'],
    imageUrl: '/Images/First_Responder.jpeg', 
    featured: true,
    role: 'Lead Developer & Hardware Engineer',
    year: '2019',
    client: 'Academic / Research',
    challenge: 'Developing a low-cost, portable training solution that could accurately simulate tactile feedback for first responders without relying on expensive, tethered hardware.',
    solution: 'Designed custom haptic gloves using flex sensors and pressure sensors integrated with an Oculus Go. Implemented lightweight ML models (TensorFlow Lite) directly on the edge device for real-time gesture recognition.',
    outcome: 'Successfully reduced latency and improved training realism. The system allows first responders to "feel" pulse and pressure, significantly enhancing muscle memory retention compared to standard controllers.'
  },
  {
    id: 'pm-office',
    title: 'Virtual Tour of PM Office',
    category: 'VR Visualization',
    filter: 'VR',
    description: 'Immersive VR headset-based experience for the Prime Minister to preview future office space. Optimized lighting and teleportation for realistic decision-making.',
    tags: ['Unity', 'VR', 'ArchViz', 'Teleportation'],
    imageUrl: '/Images/Singhadurbar.jpeg', 
    featured: true,
    role: 'VR Developer & Project Manager',
    year: '2020',
    client: 'Government of Nepal',
    challenge: 'Visualizing a high-stakes government infrastructure project before construction to facilitate rapid decision-making by high-level officials, including the Prime Minister.',
    solution: 'Built a high-fidelity VR walkthrough in Unity with baked Global Illumination for realistic lighting. Implemented a simple, intuitive teleportation system for non-gamer users.',
    outcome: 'The tool was used by Prime Minister KP Sharma Oli to approve design changes, saving potential renovation costs and ensuring the final construction met state requirements.'
  },

  // --- AR PROJECTS ---
  {
    id: 'face-filters',
    title: 'Viral Face Filters',
    category: 'Augmented Reality',
    filter: 'AR',
    description: 'Created engaging filters for TikTok/Instagram with over 52M+ views. Recognized as a top 120 Meta Creator. Includes a YouTube channel teaching AR development.',
    tags: ['Spark AR', 'Content Creation', 'Education'],
    imageUrl: '/Images/Face_filter.jpg',
    featured: true,
    link: 'https://youtube.com/@apar.meta',
    role: 'AR Creator & Educator',
    year: '2020 - Present',
    client: 'Personal Brand / Meta',
    challenge: 'Standing out in a saturated market of AR effects while also providing educational value to the creator community.',
    solution: 'Focused on high-quality, interactive, and culturally relevant filters. Launched a YouTube channel "@apar.meta" to share tutorials on Spark AR and effect creation.',
    outcome: 'Garnered over 52 million views across platforms. Recognized as a Top 120 Meta Creator globally during a hackathon. Built a community of aspiring AR developers.'
  },
  {
    id: 'ar-car-viz',
    title: 'AR Car Visualization',
    category: 'Augmented Reality',
    filter: 'AR',
    description: 'Unity3D-based AR application allowing users to place and interact with realistic car models in their environment. Features dynamic browsing and scaling.',
    tags: ['Unity3D', 'AR Core', 'Mobile AR'],
    imageUrl: '/Images/AR_car.jpeg',
    link: 'https://youtu.be/-LndoOTxegU',
    role: 'AR Developer',
    year: '2021',
    challenge: 'Allowing users to visualize large-scale objects (cars) in their driveway with accurate scale and lighting estimation on mobile devices.',
    solution: 'Utilized Unity AR Foundation to handle plane detection and light estimation. Implemented intuitive touch gestures for scaling, rotating, and placing the 3D car models.',
    outcome: 'A seamless mobile AR experience that allows prospective car buyers to visualize vehicles in their own space, bridging the gap between digital browsing and physical showrooms.'
  },
  {
    id: 'ar-guess-game',
    title: 'AR Word Guess Game',
    category: 'Augmented Reality',
    filter: 'AR',
    description: 'Educational game for kids where correct answers unlock real-world 3D objects in AR. Blends learning with interactive play.',
    tags: ['AR', 'Education', 'Gamification'],
    imageUrl: '/Images/AR guess game.jpeg',
    link: 'https://youtube.com/shorts/gvMlIgsHm8Y',
    role: 'Game Developer',
    year: '2021',
    challenge: 'Making traditional spelling and word games engaging for young children using immersive technology.',
    solution: 'Created a gamified loop where answering correctly "summons" the object into the real world using AR. For example, spelling "BIRD" correctly makes a 3D bird appear and chirp.',
    outcome: 'Increased engagement and retention in early testing with children. Demonstrated the potential of AR in interactive education.'
  },

  // --- IoT PROJECTS ---
  {
    id: 'project-bigfoot',
    title: 'Project Bigfoot',
    category: 'IoT & Conservation',
    filter: 'IoT',
    description: 'Elephant monitoring system using Raspberry Pi and ESP32 accelerometers. Provides real-time notifications to local communities to prevent human-wildlife conflict.',
    tags: ['IoT', 'Embedded C++', 'Raspberry Pi', 'Social Impact'],
    imageUrl: '/Images/Bigfoot.jpg',
    featured: true,
    role: 'Embedded Systems Engineer',
    year: '2019',
    client: 'Engineering Adda Nepal',
    challenge: 'Human-elephant conflict is a major issue in border regions. Locals needed a way to detect elephants approaching settlements before visual confirmation.',
    solution: 'Developed a geophone-based vibration detection system using ESP32 accelerometers buried near wildlife corridors. Data is processed via Raspberry Pi to filter noise and alert local army/communities via GSM.',
    outcome: 'The system successfully differentiated heavy footfalls from other vibrations. It was covered by national news for its innovative approach to wildlife conservation and public safety.'
  },
  {
    id: 'smart-automation',
    title: 'Event Automation System',
    category: 'IoT & Automation',
    filter: 'IoT',
    description: 'Automated diya lighting and curtain opening system controlled via mobile app. Successfully used by PM KP Sharma Oli during an inauguration event.',
    tags: ['Arduino Nano', 'Bluetooth HC-05', 'Android', 'Automation'],
    imageUrl: '/Images/KIOCH.png',
    role: 'Hardware Developer',
    year: '2019',
    client: 'Event Organizers',
    challenge: 'Modernizing a traditional inauguration ceremony while ensuring 100% reliability for a high-profile VIP event.',
    solution: 'Built a custom Android app communicating via Bluetooth (HC-05) to an Arduino Nano. The system mechanically lit a traditional lamp and opened curtains with a single tap.',
    outcome: 'Flawless execution during the inauguration by the Prime Minister. Showcased how IoT can subtly enhance traditional ceremonies.'
  },
  {
    id: 'medi-minder',
    title: 'Medi Minder',
    category: 'IoT & Healthcare',
    filter: 'IoT',
    description: 'Award-winning medicine reminder system for the elderly using Arduino Uno and RTC. Features alarm schedules and voice info buttons.',
    tags: ['Arduino', 'Hardware Design', 'Healthcare', 'Prototyping'],
    imageUrl: '/Images/medi_minder.jpg',
    role: 'Inventor',
    year: 'High School Project',
    challenge: 'Elderly patients often forget medication schedules or mix up prescriptions.',
    solution: 'Designed a hardware box with individual compartments. An RTC module triggers alarms at specific times, and a button press plays recorded voice instructions for the specific medicine.',
    outcome: 'Won the "Best Hardware Award" at a science exhibition. effectively solved a daily problem for elderly care in a low-cost format.'
  },
  {
    id: 'syauji-gsm',
    title: 'Syauji: Farm Communication',
    category: 'IoT & Agriculture',
    filter: 'IoT',
    description: 'GSM-based two-way communication system between farms and city offices. Updates fruit readiness and supply stock in real-time via NodeMCU.',
    tags: ['NodeMCU', 'GSM', 'Agriculture', 'IoT'],
    imageUrl: '/Images/syauji.png',
    role: 'System Integrator',
    year: '2018',
    challenge: 'Bridging the communication gap between remote fruit farms and city-based distribution offices without relying on unstable internet connections.',
    solution: 'Utilized GSM modules with NodeMCU to send SMS-based data packets. Farmers could press buttons to signal harvest readiness; offices could signal demand.',
    outcome: 'Streamlined the supply chain, reducing fruit spoilage and improving logistics planning. Won an "Innovative Idea Award".'
  },

  // --- AI & ROBOTICS ---
  {
    id: 'mars-robot',
    title: 'Mars Exploration Robot',
    category: 'Robotics & AI',
    filter: 'AI',
    description: 'Dual-robot system simulating Mars exploration. Uses OpenCV on Raspberry Pi for autonomous obstacle avoidance and sample collection.',
    tags: ['OpenCV', 'Python', 'Raspberry Pi', 'Robotics'],
    imageUrl: '/Images/mars robot.png',
    role: 'Robotics Engineer',
    year: '2018',
    client: 'National Robotics Competition',
    challenge: 'Simulating a complex Mars mission involving a carrier bot and an autonomous rover working in tandem.',
    solution: 'The main bot transported the rover to the "Mars" zone. The rover used a Pi Camera and OpenCV to detect colored "stones", pick them up, and return to the lander.',
    outcome: 'Secured First Runner-Up position. Demonstrated advanced inter-robot communication and computer vision on edge devices.'
  },
  {
    id: 'cataract-detection',
    title: 'Cataract Detection AI',
    category: 'Machine Learning',
    filter: 'AI',
    description: 'Portable Computer-Aided Diagnostic system using Raspberry Pi Zero and CNNs to classify eye images as "Normal" or "Cataract" outside clinical settings.',
    tags: ['Python', 'TensorFlow', 'Edge AI', 'Healthcare'],
    imageUrl: '/Images/cataract.jpeg',
    role: 'ML Developer',
    year: '2020',
    challenge: 'Providing accessible eye-care diagnostics in rural areas where ophthalmologists are scarce.',
    solution: 'Trained a Convolutional Neural Network (CNN) on a dataset of eye images. Optimized the model to run on a low-power Raspberry Pi Zero for portability.',
    outcome: 'Created a functional prototype that allows non-medical personnel to screen for cataracts with high accuracy, potentially preventing blindness in underserved areas.'
  },
  {
    id: 'mustang-bot',
    title: 'Mustang Bot (Robocon)',
    category: 'Robotics',
    filter: 'AI',
    description: 'Award-winning autonomous robot capable of crossing suspension bridges and tracking colorful lines. Winner of "Best Engineering Award" at Robocon Nepal.',
    tags: ['Robotics', 'Arduino', 'Mechanical Design', 'Competition'],
    imageUrl: '/Images/mustang.png',
    role: 'Lead Engineer',
    year: '2017',
    client: 'Robocon Nepal',
    challenge: 'Navigating a robot across a swinging suspension bridge and tracking non-standard colorful lines.',
    solution: 'Engineered a custom suspension system to maintain stability on the bridge. Developed a multi-sensor color tracking algorithm to handle the complex path.',
    outcome: 'Won the "Best Engineering Award" for the robust mechanical design and reliable navigation logic.'
  },
  {
    id: 'sumo-bot',
    title: 'Automatic Sumo Robot',
    category: 'Robotics',
    filter: 'AI',
    description: 'Autonomous sumo robot using IR sensors for opponent tracking and edge detection. Secured First Runner-Up at KOLTE national competition.',
    tags: ['Arduino', 'Sensors', 'Autonomous', 'Competition'],
    imageUrl: '/Images/kolte.jpg',
    role: 'Programmer & Builder',
    year: '2017',
    challenge: 'Building a robot that can autonomously push an opponent out of a ring while staying inside itself.',
    solution: 'Used IR sensors for edge detection (to stop falling) and ultrasonic sensors to track the opponent. Implemented aggressive maneuvering algorithms.',
    outcome: 'High agility and robust construction allowed the bot to outmaneuver heavier opponents, securing 2nd place nationally.'
  }
];
