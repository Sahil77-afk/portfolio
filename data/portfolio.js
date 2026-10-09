export const site = {
  url: "https://your-domain.vercel.app", // TODO: set after deploying
  name: "Sahil Patil",
  title: "Sahil Patil | Full-Stack Developer",
  description:
    "Sahil Patil is a full-stack developer (B.E. Information Technology, 2026) building React, Node.js and Python apps, AI integrations, and Ethereum dApps.",
};

export const links = {
  email: "sahill.p171@gmail.com",
  phone: "+91 8104910220",
  github: "https://github.com/Sahil77-afk", // TODO: your GitHub link
  linkedin: "https://www.linkedin.com/in/sahil-patil-dev", // TODO: your LinkedIn link
  resume: "/resume.pdf", // put your PDF at public/resume.pdf
};

export const hero = {
  headline: "I build full-stack products, from the database to the UI.",
  intro:
    "Information Technology graduate (2026) working across React, Node.js, Java and Python. I build REST APIs, integrate third-party services, and ship responsive interfaces.",
};


export const projects = [
  {
    name: "DevFlow",
    tagline: "Project management SaaS with real-time collaboration and AI assistance.",
    problem: "Teams juggle separate tools for tasks, chat, and code review.",
    built:
      "A monorepo (Turborepo/pnpm) with a React + Vite frontend and an Express.js API on MongoDB. Redis pub/sub and Socket.io keep workspaces in sync live.",
    features: [
      "JWT refresh-token auth, GitHub OAuth, role-based access control, workspace invites",
      "OpenAI-powered code review, sprint planning, bug detection and doc generation, with streaming responses",
    ],
    stack: ["TypeScript", "React", "Express.js", "MongoDB", "Redis", "Socket.io", "Docker", "OpenAI"],
    code: null,
    live: null,
  },
  {
    name: "NeoMarket",
    tagline: "Decentralized NFT marketplace on Ethereum with timed auctions.",
    problem: "NFT marketplaces need trustless sales and creator royalties that can't be bypassed.",
    built:
      "Solidity contracts supporting fixed-price listings, English auctions with anti-sniping logic, and on-chain royalties (0-10%), plus a React frontend with a minting wizard and auction countdowns.",
    features: [
      "Pull-payment pattern, ReentrancyGuard and input validation to remove reentrancy vectors",
      "Hardhat test suite for minting, listing, buying and auctions; deploy scripts auto-update frontend config",
      "Metadata and images stored on IPFS via Pinata",
    ],
    stack: ["Solidity 0.8.20", "React", "ethers.js", "Hardhat", "IPFS / Pinata"],
    code: null,
    live: null,
  },
  {
    name: "Spiritual AI",
    tagline: "AI guidance app drawing on the Bhagavad Gita, Bible and Quran.",
    problem: "Finding reflective guidance across several texts means searching each one separately.",
    built:
      "A Flask app backed by Mistral AI with seven features, including an AI-assisted journal, daily horoscope, numerology, meditation timer and Pomodoro focus mode.",
    features: [
      "Deployed on Render with Gunicorn, Docker support and environment-based config",
      "Production-grade error handling",
    ],
    stack: ["Python", "Flask", "Mistral AI", "HTML/CSS/JS", "Docker"],
    code: null,
    live: "https://spiritual-ai-tfqk.onrender.com",
  },
];

export const skills = [
  { group: "Languages", items: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Responsive design"] },
  { group: "Backend", items: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "Authentication", "API integration"] },
  { group: "Data", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
  { group: "Tools", items: ["Git", "Docker", "Linux", "Hardhat", "Testing", "OpenAI API", "Mistral AI"] },
];

