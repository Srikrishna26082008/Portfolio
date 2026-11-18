export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Hackathon {
  id: string;
  title: string;
  event: string;
  role: string;
  result: string;
  year: string;
  description: string;
  tags: string[];
  icon: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  badge: string;
  verifyUrl: string;
  tags: string[];
}

export const portfolioData = {
  name: "H S Srikrishna",
  role: "CS Student & Full-Stack Web Developer",
  location: "India",
  oneLineIntro: "CS student who loves building modern web apps & high-performance software.",
  shortBio: [
    "I am a Computer Science student with a strong passion for developing responsive, accessible, and fast web applications.",
    "My focus centers on modern full-stack web engineering, crafting clean UI experiences backed by reliable code and efficient algorithms.",
    "When I'm not writing code, I explore emerging developer tools, practice data structures & algorithms, and work on open-source projects."
  ],
  skillsCategories: [
    {
      category: "Frontend Development",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      category: "Backend & Systems",
      skills: ["Python", "C Programming", "C++", "Java", "Node.js", "REST APIs", "FastAPI"]
    },
    {
      category: "Databases & Tools",
      skills: ["PostgreSQL", "SQL", "Git & GitHub", "Linux", "VS Code", "Vercel"]
    }
  ],
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Python",
    "C",
    "C++",
    "Java",
    "Node.js",
    "Git & GitHub",
    "REST APIs",
    "SQL / Database Management"
  ],
  projects: [
    {
      id: "project-1",
      name: "DevFlow - Developer Hub & Snippet Manager",
      description: "A collaborative code snippet notebook and developer workspace featuring instant search, syntax highlighting, and markdown notes.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React", "PostgreSQL"],
      githubUrl: "https://github.com/Srikrishna26082008/devflow",
      liveUrl: "https://github.com/Srikrishna26082008",
      featured: true
    },
    {
      id: "project-2",
      name: "AI Resume & Job Description Matcher",
      description: "An intelligent career tool that parses technical resumes against job specifications to compute keyword alignment scores and actionable improvements.",
      techStack: ["Python", "FastAPI", "React", "Tailwind CSS"],
      githubUrl: "https://github.com/Srikrishna26082008/resume-matcher",
      featured: true
    },
    {
      id: "project-3",
      name: "PulseChat - Real-time Collaboration Platform",
      description: "A low-latency messaging and collaboration app featuring instant channel messaging, live indicators, and responsive modern UI.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "WebSockets", "Node.js"],
      githubUrl: "https://github.com/Srikrishna26082008/pulsechat",
      featured: false
    }
  ] as Project[],
  // Explicitly updated with Google Summer of Code & NVIDIA Hackathon as requested!
  hackathons: [
    {
      id: "hack-gsoc",
      title: "Google Summer of Code (GSoC) Hackathon",
      event: "Google Open Source Programs",
      role: "Open Source Contributor & Architect",
      result: "Selected Contributor & Finalist 🌟",
      year: "2026",
      icon: "🌐",
      description: "Engineered high-throughput cloud automation scripts and web visualization dashboards for open-source developer toolchains under Google developer mentoring.",
      tags: ["Google Open Source", "Python", "Distributed Systems", "Git & GitHub"]
    },
    {
      id: "hack-nvidia",
      title: "NVIDIA AI & Accelerated Computing Hackathon",
      event: "NVIDIA Developer Network & DLI",
      role: "Lead Systems & Full-Stack Engineer",
      result: "1st Place Winner 🏆",
      year: "2025",
      icon: "⚡",
      description: "Developed GPU-accelerated web APIs and real-time computer vision inferencing pipelines with extreme low-latency response times.",
      tags: ["NVIDIA CUDA", "Python", "FastAPI", "React", "High-Performance Computing"]
    },
    {
      id: "hack-national",
      title: "Smart India National Hackathon",
      event: "Ministry of Education & AICTE",
      role: "Full-Stack Tech Lead",
      result: "Grand Finalist 🥇",
      year: "2025",
      icon: "🚀",
      description: "Built a citizen grievance management portal with real-time analytics, automated routing algorithms, and multi-language support.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"]
    }
  ] as Hackathon[],
  certificates: [
    {
      id: "cert-gsoc",
      title: "Google Summer of Code Open Source Certification",
      issuer: "Google Open Source",
      issueDate: "2026",
      badge: "GSoC Certified Contributor",
      verifyUrl: "https://github.com/Srikrishna26082008",
      tags: ["Open Source", "Software Engineering", "Collaboration", "Git"]
    },
    {
      id: "cert-nvidia",
      title: "NVIDIA Accelerated Computing & Deep Learning Certification",
      issuer: "NVIDIA Deep Learning Institute (DLI)",
      issueDate: "2025",
      badge: "NVIDIA DLI Certified",
      verifyUrl: "https://github.com/Srikrishna26082008",
      tags: ["NVIDIA CUDA", "AI Engineering", "Parallel Computing", "C/C++"]
    },
    {
      id: "cert-meta",
      title: "Meta Certified Full-Stack Software Engineer",
      issuer: "Meta / Coursera Specialization",
      issueDate: "2025",
      badge: "Meta Verified Engineer",
      verifyUrl: "https://github.com/Srikrishna26082008",
      tags: ["React", "JavaScript", "TypeScript", "REST APIs", "Tailwind CSS"]
    }
  ] as Certificate[],
  email: "hammigirojarani22@gmail.com",
  socials: {
    github: "https://github.com/Srikrishna26082008",
    linkedin: "https://github.com/Srikrishna26082008",
    twitter: "https://github.com/Srikrishna26082008"
  }
};
