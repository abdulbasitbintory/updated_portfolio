// @/constants/index.ts

// Skill data with detailed metadata
export const Skill_data = [
  {
    skill_name: "Html 5",
    Image: "/html.svg",
    width: 80,
    height: 80,
    proficiency: 95,
    category: "Frontend",
    description: "Semantic HTML markup for accessible web applications",
  },
  {
    skill_name: "CSS 3",
    Image: "/css.svg",
    width: 80,
    height: 80,
    proficiency: 90,
    category: "Frontend",
    description: "Modern styling with Flexbox, Grid, and animations",
  },
  {
    skill_name: "JavaScript",
    Image: "/js.svg",
    width: 80,
    height:80,
    proficiency: 92,
    category: "Frontend",
    description: "ES6+ features and functional programming patterns",
  },
  {
    skill_name: "Node.js",
    Image: "/nodejs.svg",
    width: 80,
    height: 80,
    proficiency: 87,
    category: "Backend",
    description: "Server-side JavaScript runtime",
  },
];

export const Frontend_skill = [
  {
    skill_name: "React",
    Image: "/react.svg",
    width: 80,
    height: 80,
    proficiency: 92,
    category: "Frontend",
    description: "Component-based architecture with hooks",
  },
  {
    skill_name: "Next.js 14",
    Image: "/next.svg",
    width: 100,
    height: 100,
    proficiency: 90,
    category: "Frontend",
    description: "SSR, SSG, and API routes implementation",
  },
  {
    skill_name: "TypeScript",
    Image: "/typescript.svg",
    width: 80,
    height: 80,
    proficiency: 88,
    category: "Frontend",
    description: "Static typing for scalable applications",
  },
  {
    skill_name: "Tailwind CSS",
    Image: "/tailwind.svg",
    width: 80,
    height: 80,
    proficiency: 93,
    category: "Frontend",
    description: "Utility-first CSS framework",
  },  
];

export const Backend_skill = [
  {
    skill_name: "Flutter",
    Image: "/flutter.svg",
    width: 80,
    height: 80,
    proficiency: 85,
    category: "Mobile",
    description: "Cross-platform mobile development",
  },
  {
    skill_name: "Dart",
    Image: "/dart.svg",
    width: 80,
    height: 80,
    proficiency: 82,
    category: "Mobile",
    description: "Client-optimized language for apps",
  },
    {
    skill_name: "Figma",
    Image: "/figma.png",
    width: 80,
    height: 80,
    proficiency: 85,
    category: "Design",
    description: "UI/UX design and prototyping",
  },
];

export const Full_stack = [
  
  {
    skill_name: "Java",
    Image: "/java.svg",
    width: 80,
    height: 80,
    proficiency: 80,
    category: "Backend",
    description: "Enterprise application development",
  },
  
];

export const Other_skill = [
  {
    skill_name: "C",
    Image: "/c.svg",
    width: 80,
    height: 80,
    proficiency: 75,
    category: "Language",
    description: "System programming and embedded systems",
  },
  {
    skill_name: "MySQL",
    Image: "/mysql.png",
    width: 80,
    height: 80,
    proficiency: 83,
    category: "Database",
    description: "Relational database management",
  },
  {
    skill_name: "Python",
    Image: "/python.svg",
    width: 80,
    height: 80,
    proficiency: 85,
    category: "Backend",
    description: "Scripting and data processing",
  },  
];

// Combined skills for easy access
export const All_Skills = [
  ...Skill_data,
  ...Frontend_skill,
  ...Backend_skill,
  ...Full_stack,
  ...Other_skill
];

// Social media links with additional metadata
export const Socials = [
  {
    name: "GitHub",
    src: "/github.svg",
    url: "https://github.com/abdulbasitbintory",
    color: "#181717",
    description: "Explore my code repositories"
  },
  {
    name: "LinkedIn",
    src: "/linkedin.svg",
    url: "https://www.linkedin.com/in/abdul-basit-13a7b9224/",
    color: "#0A66C2",
    description: "Connect professionally"
  },
  {
    name: "Gmail",
    src: "/gmail.svg",
    url: "mailto:abdulsmainacc@gmail.com",
    color: "#EA4335",
    description: "Send me an email"
  },
  {
    name: "LeetCode",
    src: "/leetcode.svg",
    url: "https://leetcode.com/u/EPHb47tcGh/",
    color: "#FFA116",
    description: "Solve coding challenges"
  },
];

// Project data with detailed information
export const projects = [
  {
    id: 1,
    title: "QR Code Generator App",
    des: "Interactive 3D simulation of our solar system using Three.js with realistic planetary motion and detailed information about each celestial body.",
    img: "/qr.png",
    iconLists: [
      "/html.svg", 
      "/css.svg", 
      "/js.svg"      
    ],
    link: "https://abdulbasitbintory.github.io/QR_Code_Generator_app/",
    github: "https://github.com/abdulbasitbintory/QR_Code_Generator_app",
    categories: ["Web", "3D", "Frontend"],
    technologies: ["React", "Three.js", "TypeScript"],
    features: [
      "Real-time planetary motion",
      "Detailed celestial information",
      "Interactive camera controls"
    ],
    accomplishments: [
      "Reduced load time by 40% with optimized 3D models",
      "Achieved 95+ Lighthouse performance score"
    ]
  },
  {
    id: 2,
    title: "Password Generator App",
    des: "Feature-rich video conferencing platform with real-time screen sharing, chat, and recording capabilities using WebRTC and Node.js.",
    img: "/ps.png",
    iconLists: [
      "/html.svg", 
      "/css.svg", 
      "/js.svg" 
    ],
    link: "https://abdulbasitbintory.github.io/Weather_app/",
    github: "https://github.com/abdulbasitbintory/Weather_app",
    categories: ["Full Stack", "WebRTC", "Real-time"],
    technologies: ["Next.js", "Node.js", "WebRTC"],
    features: [
      "HD video conferencing",
      "Screen sharing",
      "Chat functionality",
      "Meeting recording"
    ],
    accomplishments: [
      "Handled 100+ concurrent users with optimized streaming",
      "Reduced latency by 35% with custom WebRTC implementation"
    ]
  },
  {
    id: 3,
    title: "Weather App(with API Integration)",
    des: "Cloud-based image generation platform using Stable Diffusion API with credit-based system, user management, and real-time processing.",
    img: "/wth.png",
    iconLists: [
      "/html.svg", 
      "/css.svg", 
      "/js.svg" 
    ],
    link: "https://abdulbasitbintory.github.io/Random_Password_Generator_app/",
    github: "https://github.com/abdulbasitbintory/Random_Password_Generator_app",
    categories: ["AI", "SaaS", "Full Stack"],
    technologies: ["Next.js", "Python", "Stripe"],
    features: [
      "AI image generation",
      "Credit-based payment system",
      "User gallery",
      "API access"
    ],
    accomplishments: [
      "Processed 10,000+ images in first month",
      "Achieved 99.9% uptime with Kubernetes deployment"
    ]
  },
  {
    id: 4,
    title: "Restaurant Management System",
    des: "Comprehensive platform for managing restaurant operations, including table reservations, order management, and customer feedback.",
    img: "/rms.png",
    iconLists: [
      "/java.svg", 
      "/spring.svg", 
      "/mysql.svg" 
    ],
    link: "https://github.com/abdulbasitbintory/Restaurant_Management-System-Master",
    github: "https://github.com/yourusername/iphone-3d",
    categories: ["E-commerce", "3D", "Animation"],
    technologies: ["Next.js", "Three.js", "GSAP"],
    features: [
      "3D product visualization",
      "Color and model customization",
      "Seamless checkout flow"
    ],
    accomplishments: [
      "Increased conversion rate by 27% with 3D visualization",
      "Reduced bounce rate by 35% with engaging animations"
    ]
  },
];

// Navigation links
export const NavLinks = [
  {
    name: "About",
    href: "#about-me",
    icon: "👤"
  },
  {
    name: "Skills",
    href: "#skills",
    icon: "💻"
  },
  {
    name: "Projects",
    href: "#projects",
    icon: "🚀"
  },
  {
    name: "Contact",
    href: "#contact",
    icon: "📬"
  }
];

// Contact information
export const ContactInfo = [
  {
    type: "Email",
    value: "abdulsmainacc@gmail.com",
    icon: "✉️",
    link: "mailto:abdulsmainacc@gmail.com"
  },
  {
    type: "Phone",
    value: "+92 (330) 709-0669",
    icon: "📱",
    link: "tel:+923307090669"
  },
  {
    type: "Location",
    value: "Karachi, Pakistan",
    icon: "📍",
    link: "https://maps.google.com/?q=Karachi"
  }
];

// Education
export const Education = [
  {
    institution: "University of Tech",
    degree: "B.S. Computer Science",
    period: "2014 - 2018",
    description: "Specialized in web technologies and software engineering. Graduated with honors.",
    courses: ["Advanced Algorithms", "Web Development", "Database Systems"]
  },
  {
    institution: "Coding Academy",
    degree: "Full Stack Development Certification",
    period: "2018",
    description: "Intensive 6-month program focused on modern web technologies.",
    courses: ["React", "Node.js", "Database Design"]
  }
];

// Certifications
export const Certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2022",
    credential: "Credential ID: AWS-12345",
    link: "#"
  },
  {
    title: "Google Professional Cloud Developer",
    issuer: "Google Cloud",
    date: "2021",
    credential: "Credential ID: GCP-67890",
    link: "#"
  },
  {
    title: "React Advanced Concepts",
    issuer: "Frontend Masters",
    date: "2020",
    credential: "Credential ID: FM-54321",
    link: "#"
  }
];

// Testimonials
export const Testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager, TechCorp",
    content: "Abdul delivered exceptional work on our e-commerce platform. His attention to detail and problem-solving skills are remarkable.",
    avatar: "/avatar1.jpg"
  },
  {
    name: "Michael Chen",
    role: "CTO, StartupX",
    content: "The AI application Abdul developed exceeded our expectations. He's a talented developer who understands both tech and business needs.",
    avatar: "/avatar2.jpg"
  },
  {
    name: "Emma Rodriguez",
    role: "Design Lead, CreativeStudio",
    content: "Working with Abdul was a pleasure. He transformed our designs into a pixel-perfect, high-performance web application.",
    avatar: "/avatar3.jpg"
  }
];

// Experience timeline
export const Experience = [
  {
    company: "Tech Innovations Inc.",
    position: "Senior Frontend Developer",
    period: "2021 - Present",
    description: "Led development of responsive web applications using React and Next.js. Implemented design systems and optimized performance.",
    achievements: [
      "Reduced load times by 40% through code optimization",
      "Mentored 5 junior developers"
    ]
  },
  {
    company: "Digital Solutions LLC",
    position: "Full Stack Developer",
    period: "2019 - 2021",
    description: "Developed and maintained full-stack applications using Node.js, React, and MongoDB.",
    achievements: [
      "Built a SaaS platform serving 10k+ users",
      "Implemented CI/CD pipeline reducing deployment time by 70%"
    ]
  },
  {
    company: "Web Craft Studio",
    position: "Web Developer",
    period: "2017 - 2019",
    description: "Created responsive websites and web applications for diverse clients.",
    achievements: [
      "Delivered 30+ client projects with 98% satisfaction",
      "Implemented SEO strategies increasing traffic by 150%"
    ]
  }
];