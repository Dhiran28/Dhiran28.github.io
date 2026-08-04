
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
  Bot,
  Brain,
  Code,
  FileText
} from 'lucide-react';
import { Project, Service, SocialLink, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#what-i-build' },
  { label: 'Projects', href: '#projects' },
  { label: 'Focus', href: '#currently-exploring' },
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
    platform: 'Email',
    url: 'mailto:mail.dhirankarki@gmail.com',
    icon: Mail,
    label: 'Send Email'
  },
  {
    platform: 'Resume',
    url: '#contact',
    icon: FileText,
    label: 'Download Resume'
  }
];

export const SPECIALIZATIONS = [
  'Artificial Intelligence & Machine Learning',
  'Computer Vision',
  'Extended Reality (AR/VR/MR)',
  'Robotics & Embedded Systems',
  'Internet of Things (IoT)',
  'Full-Stack Software Development'
];

export const WHAT_I_BUILD_CARDS = [
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    subtitle: 'Intelligent systems & machine learning models',
    icon: Brain,
    items: [
      'Machine Learning',
      'Computer Vision',
      'Edge AI',
      'Intelligent Applications'
    ]
  },
  {
    id: 'xr',
    title: 'Extended Reality',
    subtitle: 'Spatial computing & interactive simulations',
    icon: Glasses,
    items: [
      'Virtual Reality',
      'Augmented Reality',
      'Spatial Computing',
      'Interactive Simulations'
    ]
  },
  {
    id: 'connected',
    title: 'Connected Systems',
    subtitle: 'Robotics, IoT & hardware integration',
    icon: Cpu,
    items: [
      'Robotics',
      'Embedded Systems',
      'Internet of Things',
      'Sensor Integration'
    ]
  },
  {
    id: 'software',
    title: 'Software Engineering',
    subtitle: 'Backend APIs & scalable full-stack applications',
    icon: Code,
    items: [
      'Backend APIs',
      'Cloud Integration',
      'Full Stack Development',
      'Scalable Systems'
    ]
  }
];

export const CURRENTLY_EXPLORING = [
  'Agentic AI',
  'Large Language Models',
  'Computer Vision',
  'Edge AI',
  'Intelligent XR',
  'AI Software Engineering'
];

export const CURRENTLY_BUILDING = CURRENTLY_EXPLORING;

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
    description: 'An AI-powered VR emergency training platform featuring custom haptic gloves and real-time gesture recognition.',
    problem: 'Emergency responders require realistic training environments that are expensive and difficult to scale.',
    solution: 'Developed an immersive VR training platform with custom haptic gloves and TensorFlow Lite-based gesture recognition for natural interaction.',
    tags: ['Unity', 'TensorFlow Lite', 'Oculus Go', 'C#', 'Embedded Systems'],
    impact: 'Real-time AI-powered interaction using wearable hardware.',
    imageUrl: '/Images/First_Responder.jpeg', 
    featured: true,
    role: 'Lead Developer & Hardware Engineer',
    year: '2019',
    client: 'Academic / Research',
    challenge: 'Developing a low-cost, portable training solution that could accurately simulate tactile feedback for first responders without relying on expensive, tethered hardware.',
    outcome: 'Successfully reduced latency and improved training realism. The system allows first responders to "feel" pulse and pressure, significantly enhancing muscle memory retention compared to standard controllers.'
  },
  {
    id: 'pm-office',
    title: 'Virtual Tour of Prime Minister Office',
    category: 'VR Visualization',
    filter: 'VR',
    description: 'Immersive architectural visualization enabling high-level stakeholders to evaluate future office spaces before construction.',
    problem: 'High-stakes government architectural projects require spatial verification before physical construction begins.',
    solution: 'Built a high-fidelity VR walkthrough with baked global illumination and non-gamer intuitive teleportation controls.',
    tags: ['Unity', 'VR', 'ArchViz', 'C#', 'Lighting Optimization'],
    impact: 'Adopted by Prime Minister KP Sharma Oli to approve key design decisions prior to build out.',
    imageUrl: '/Images/Singhadurbar.jpeg', 
    featured: true,
    role: 'VR Developer & Project Manager',
    year: '2020',
    client: 'Government of Nepal',
    challenge: 'Visualizing a high-stakes government infrastructure project before construction to facilitate rapid decision-making by high-level officials, including the Prime Minister.',
    outcome: 'The tool was used by Prime Minister KP Sharma Oli to approve design changes, saving potential renovation costs and ensuring the final construction met state requirements.'
  },

  // --- AR PROJECTS ---
  {
    id: 'face-filters',
    title: 'Viral Face Filters',
    category: 'Augmented Reality',
    filter: 'AR',
    description: 'Published interactive AR experiences reaching 52M+ views across Meta platforms.',
    problem: 'Standing out in competitive digital media requires engaging interactive AR filters.',
    solution: 'Designed viral augmented reality face effects and created educational development tutorials on YouTube.',
    tags: ['Spark AR', 'Meta Platform', 'Social AR', '3D Modeling'],
    impact: 'Accumulated 52M+ views and earned recognition as a Meta Top 120 AR Creator.',
    imageUrl: '/Images/Face_filter.jpg',
    featured: true,
    link: 'https://youtube.com/@apar.meta',
    role: 'AR Creator & Educator',
    year: '2020 - Present',
    client: 'Personal Brand / Meta',
    challenge: 'Standing out in a saturated market of AR effects while also providing educational value to the creator community.',
    outcome: 'Garnered over 52 million views across platforms. Recognized as a Top 120 Meta Creator globally during a hackathon. Built a community of aspiring AR developers.'
  },
  {
    id: 'ar-car-viz',
    title: 'AR Car Visualization',
    category: 'Augmented Reality',
    filter: 'AR',
    description: 'Mobile AR application allowing users to place, inspect, and interact with realistic 3D vehicle models in real environments.',
    problem: 'Car buyers cannot easily evaluate vehicle scale, design, and appearance outside physical showrooms.',
    solution: 'Created a mobile AR application with plane detection and environmental lighting estimation to place interactive 3D car models in real spaces.',
    tags: ['Unity', 'ARCore', 'Mobile AR', 'C#'],
    impact: 'Enabled dynamic real-world vehicle placement and inspection on consumer smartphones.',
    imageUrl: '/Images/AR_car.jpeg',
    link: 'https://youtu.be/-LndoOTxegU',
    role: 'AR Developer',
    year: '2021',
    challenge: 'Allowing users to visualize large-scale objects (cars) in their driveway with accurate scale and lighting estimation on mobile devices.',
    outcome: 'A seamless mobile AR experience that allows prospective car buyers to visualize vehicles in their own space, bridging the gap between digital browsing and physical showrooms.'
  },
  {
    id: 'ar-guess-game',
    title: 'AR Word Guess Game',
    category: 'Augmented Reality',
    filter: 'AR',
    description: 'Gamified educational AR application where solving word puzzles unlocks interactive 3D objects in the user environment.',
    problem: 'Traditional spelling and vocabulary exercises often fail to engage young learners.',
    solution: 'Designed a gamified AR learning application where solving word puzzles unlocks animated 3D objects in the user environment.',
    tags: ['Unity', 'AR', 'Gamification', 'Mobile'],
    impact: 'Demonstrated gamified augmented reality as an effective tool for early childhood education.',
    imageUrl: '/Images/AR guess game.jpeg',
    link: 'https://youtube.com/shorts/gvMlIgsHm8Y',
    role: 'Game Developer',
    year: '2021',
    challenge: 'Making traditional spelling and word games engaging for young children using immersive technology.',
    outcome: 'Increased engagement and retention in early testing with children. Demonstrated the potential of AR in interactive education.'
  },

  // --- IoT PROJECTS ---
  {
    id: 'project-bigfoot',
    title: 'Project Bigfoot',
    category: 'IoT & Conservation',
    filter: 'IoT',
    description: 'IoT wildlife monitoring system using ESP32 accelerometers and Raspberry Pi to detect elephant movement in real time.',
    problem: 'Communities near wildlife corridors lack early warning systems for elephant movements, risking human-wildlife conflict.',
    solution: 'Built an IoT detection network using buried ESP32 accelerometers and Raspberry Pi processing to transmit real-time alerts via GSM.',
    tags: ['Raspberry Pi', 'ESP32', 'IoT', 'Embedded C++', 'GSM'],
    impact: 'Successfully detected footfall vibrations to deliver automated community warnings in vulnerable regions.',
    imageUrl: '/Images/Bigfoot.jpg',
    featured: true,
    role: 'Embedded Systems Engineer',
    year: '2019',
    client: 'Engineering Adda Nepal',
    challenge: 'Human-elephant conflict is a major issue in border regions. Locals needed a way to detect elephants approaching settlements before visual confirmation.',
    outcome: 'The system successfully differentiated heavy footfalls from other vibrations. It was covered by national news for its innovative approach to wildlife conservation and public safety.'
  },
  {
    id: 'smart-automation',
    title: 'Event Automation System',
    category: 'IoT & Automation',
    filter: 'IoT',
    description: 'Automated ceremony control system synchronizing lighting and stage operations via mobile application.',
    problem: 'Traditional inauguration ceremonies required error-prone manual physical coordination for lights and staging.',
    solution: 'Engineered a custom Bluetooth-enabled microcontroller system triggered via an Android app for synchronized curtain and lighting control.',
    tags: ['Arduino Nano', 'Bluetooth HC-05', 'Android', 'Embedded Systems'],
    impact: 'Deployed seamlessly during an official government inauguration event led by the Prime Minister.',
    imageUrl: '/Images/KIOCH.png',
    role: 'Hardware Developer',
    year: '2019',
    client: 'Event Organizers',
    challenge: 'Modernizing a traditional inauguration ceremony while ensuring 100% reliability for a high-profile VIP event.',
    outcome: 'Flawless execution during the inauguration by the Prime Minister. Showcased how IoT can subtly enhance traditional ceremonies.'
  },
  {
    id: 'medi-minder',
    title: 'Medi Minder',
    category: 'IoT & Healthcare',
    filter: 'IoT',
    description: 'Award-winning medicine reminder assistant featuring scheduled medication alerts and voice assistance for elderly users.',
    problem: 'Elderly individuals frequently miss medication schedules or confuse complex prescription instructions.',
    solution: 'Built a smart pill dispenser with RTC scheduled alarms, compartmentalized feedback, and one-touch voice instruction playback.',
    tags: ['Arduino Uno', 'RTC Module', 'Healthcare', 'Embedded Systems'],
    impact: 'Awarded Best Hardware Award for low-cost assistive healthcare technology.',
    imageUrl: '/Images/medi_minder.jpg',
    role: 'Inventor',
    year: 'High School Project',
    challenge: 'Elderly patients often forget medication schedules or mix up prescriptions.',
    outcome: 'Won the "Best Hardware Award" at a science exhibition. effectively solved a daily problem for elderly care in a low-cost format.'
  },
  {
    id: 'syauji-gsm',
    title: 'Syauji: Farm Communication',
    category: 'IoT & Agriculture',
    filter: 'IoT',
    description: 'GSM-enabled two-way agricultural communication platform connecting fruit farms with city offices in real-time.',
    problem: 'Rural agricultural producers lack reliable real-time connectivity to report crop readiness and inventory to city distributors.',
    solution: 'Developed a two-way GSM NodeMCU messaging network to send stock updates without internet dependency.',
    tags: ['NodeMCU', 'GSM', 'IoT', 'Embedded C++'],
    impact: 'Streamlined farm-to-city supply chains and reduced perishable crop spoilage.',
    imageUrl: '/Images/syauji.png',
    role: 'System Integrator',
    year: '2018',
    challenge: 'Bridging the communication gap between remote fruit farms and city-based distribution offices without relying on unstable internet connections.',
    outcome: 'Streamlined the supply chain, reducing fruit spoilage and improving logistics planning. Won an "Innovative Idea Award".'
  },

  // --- AI & ROBOTICS ---
  {
    id: 'mars-robot',
    title: 'Mars Exploration Robot',
    category: 'Robotics & AI',
    filter: 'AI',
    description: 'Dual-robot autonomous exploration system capable of obstacle avoidance, navigation, and sample collection using computer vision.',
    problem: 'Autonomous interplanetary rovers require on-device vision processing to navigate terrain and handle sample collection.',
    solution: 'Built a dual-robot platform using OpenCV image processing on Raspberry Pi for line tracking, obstacle avoidance, and object retrieval.',
    tags: ['Python', 'OpenCV', 'Raspberry Pi', 'Robotics'],
    impact: 'Awarded First Runner-Up at National Robotics Competition for edge computer vision performance.',
    imageUrl: '/Images/mars robot.png',
    role: 'Robotics Engineer',
    year: '2018',
    client: 'National Robotics Competition',
    challenge: 'Simulating a complex Mars mission involving a carrier bot and an autonomous rover working in tandem.',
    outcome: 'Secured First Runner-Up position. Demonstrated advanced inter-robot communication and computer vision on edge devices.'
  },
  {
    id: 'cataract-detection',
    title: 'Cataract Detection AI',
    category: 'Machine Learning',
    filter: 'AI',
    description: 'Edge AI diagnostic solution classifying retinal images as Normal or Cataract using CNNs deployed on Raspberry Pi Zero.',
    problem: 'Underserved rural regions lack specialized ophthalmologists for early diagnostic eye screening.',
    solution: 'Trained a Convolutional Neural Network (CNN) and deployed it to Raspberry Pi Zero hardware for offline retinal image classification.',
    tags: ['Python', 'TensorFlow', 'CNN', 'Edge AI', 'Raspberry Pi Zero'],
    impact: 'Delivered a portable offline diagnostic system classifying eye conditions with high accuracy in low-resource environments.',
    imageUrl: '/Images/cataract.jpeg',
    role: 'ML Developer',
    year: '2020',
    challenge: 'Providing accessible eye-care diagnostics in rural areas where ophthalmologists are scarce.',
    outcome: 'Created a functional prototype that allows non-medical personnel to screen for cataracts with high accuracy, potentially preventing blindness in underserved areas.'
  },
  {
    id: 'mustang-bot',
    title: 'Mustang Bot (Robocon)',
    category: 'Robotics',
    filter: 'AI',
    description: 'Autonomous competition robot capable of line tracking, obstacle traversal, and suspension bridge navigation.',
    problem: 'Competitive robotics requires high-stability navigation over unstable suspension bridges and complex pathways.',
    solution: 'Engineered a custom mechanical suspension rover with multi-sensor color path tracking algorithms for Robocon Nepal.',
    tags: ['Arduino', 'Robotics', 'Embedded Systems', 'Sensor Fusion'],
    impact: 'Awarded Best Engineering Award at Robocon Nepal for mechanical design and navigation logic.',
    imageUrl: '/Images/mustang.png',
    role: 'Lead Engineer',
    year: '2017',
    client: 'Robocon Nepal',
    challenge: 'Navigating a robot across a swinging suspension bridge and tracking non-standard colorful lines.',
    outcome: 'Won the "Best Engineering Award" for the robust mechanical design and reliable navigation logic.'
  },
  {
    id: 'sumo-bot',
    title: 'Automatic Sumo Robot',
    category: 'Robotics',
    filter: 'AI',
    description: 'Autonomous sumo robot using infrared and ultrasonic sensors for opponent tracking and boundary detection.',
    problem: 'High-speed autonomous sumo robotics requires real-time opponent tracking and arena boundary detection.',
    solution: 'Built a sensor-driven autonomous robot combining infrared edge detection with ultrasonic opponent tracking algorithms.',
    tags: ['Arduino', 'IR Sensors', 'Robotics', 'Embedded Systems'],
    impact: 'Achieved First Runner-Up at KOLTE National Robotics Competition.',
    imageUrl: '/Images/kolte.jpg',
    role: 'Programmer & Builder',
    year: '2017',
    challenge: 'Building a robot that can autonomously push an opponent out of a ring while staying inside itself.',
    outcome: 'High agility and robust construction allowed the bot to outmaneuver heavier opponents, securing 2nd place nationally.'
  }
];
