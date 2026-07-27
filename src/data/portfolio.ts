export interface Project {
  id: string;
  title: string;
  category: string;
  problem: string;
  role: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudyAvailable?: boolean;
  image?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  date: string;
  description: string;
  bullets?: string[];
  highlight?: boolean;
}

export interface ContactInfo {
  name: string;
  nickname: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  websiteDisplay: string;
  facebookUrl: string;
  linkedinUrl?: string;
  canonicalUrl: string;
}

export const CONTACT_INFO: ContactInfo = {
  name: "Aung Zaw Moe",
  nickname: "Ko Moe",
  title: "IT Manager & AI Career Instructor",
  email: "komoe@komoe.org",
  phone: "09-454235411",
  location: "Yangon, Myanmar",
  website: "https://ai-mindset.komoe.org/",
  websiteDisplay: "ai-mindset.komoe.org",
  facebookUrl: "https://www.facebook.com/profile.php?id=61570808135698",
  linkedinUrl: "https://www.linkedin.com/in/aung-zaw-moe-ko-moe/",
  canonicalUrl: "https://komoe.org/"
};

export const TRUST_INDICATORS = [
  { metric: "10+ Years", label: "Enterprise IT & Infrastructure Experience" },
  { metric: "ISO Certified", label: "ISO 27001 (ISMS), 9001 (QMS), 14000 (EMS)" },
  { metric: "Weekend Online", label: "AI Career Skills & Workflow Classes" },
  { metric: "300+ Complex", label: "Smart Complex & BMS/ELV Deployment" }
];

export const WHAT_I_DO = [
  {
    id: "enterprise-it",
    title: "Enterprise IT & Systems",
    description: "I plan, maintain, and improve reliable business technology environments, infrastructure, security, and operational systems.",
    skills: [
      "IT Management",
      "Enterprise Infrastructure",
      "Systems Support",
      "ISO-Aligned Security",
      "Cloud Architecture",
      "Technical Operations"
    ]
  },
  {
    id: "ai-education",
    title: "AI Education & Automation",
    description: "I teach practical AI career skills and develop AI-assisted workflows, digital products, and business solutions.",
    skills: [
      "AI Career Education",
      "Prompt Engineering",
      "AI Research",
      "Workflow Automation",
      "AI-Assisted Web Development",
      "Portfolio Mentorship"
    ]
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "ai-mindset-lms",
    title: "AI Mindset Education & LMS Portal",
    category: "EdTech & AI Career Training",
    problem: "Students and professionals in Myanmar need practical, career-focused AI education, prompt engineering frameworks, and project-based workflow automation skills.",
    role: "Founder & AI Career Instructor",
    tags: ["AI Education", "Workflow Automation", "LMS Platform", "Prompt Engineering"],
    liveUrl: "https://ai-mindset.komoe.org/",
    caseStudyAvailable: true
  },
  {
    id: "ybs-intelligent-transport",
    title: "Yangon Bus System (YBS) Intelligent Framework",
    category: "Enterprise Infrastructure & Smart City",
    problem: "Integrating citywide public transit telematics, passenger flow monitoring, and YPS card electronic payment processing across 1,000+ public buses.",
    role: "IT Manager (Asia Starmar Transport Intelligent)",
    tags: ["GPS Telematics", "YPS Payment Systems", "Fleet Operations", "Enterprise Infrastructure"],
    caseStudyAvailable: true
  },
  {
    id: "iso27001-electronics-isms",
    title: "Cross-Border Manufacturing ISMS & MRP Security",
    category: "Cybersecurity & Governance",
    problem: "Securing enterprise MRP and procurement CRM systems under strict ISO 27001:2022 policies for international electronic production integrity.",
    role: "IT Specialist / Dept Head (IIDA Electronic)",
    tags: ["ISO 27001:2022", "MRP Systems", "Procurement CRM", "MS EDR Security"],
    caseStudyAvailable: true
  },
  {
    id: "golden-city-elv-bms",
    title: "Property Complex BMS & ELV Infrastructure",
    category: "Property Tech & Infrastructure",
    problem: "Delivering end-to-end IT service, Building Management Systems (BMS), and Extra Low Voltage (ELV) networks for a 300+ employee real estate complex.",
    role: "Property Management IT Lead (Golden Land Real Estate)",
    tags: ["BMS Systems", "ELV Networks", "Facility Operations", "Infrastructure"],
    caseStudyAvailable: true
  },
  {
    id: "mindset-it-cloud-iaas",
    title: "Hybrid Cloud & Self-Hosted Infrastructure",
    category: "Cloud Architecture & CTO Consulting",
    problem: "Deploying high-availability self-hosted IaaS, Proxmox PVE virtual clusters, Cloudflare security, Docker containers, and local Ollama AI nodes.",
    role: "Strategic CTO & Independent Consultant",
    tags: ["AWS Cloud", "Proxmox PVE", "Docker", "Ollama AI", "Cloudflare"],
    liveUrl: "https://ai-mindset.komoe.org/",
    caseStudyAvailable: true
  }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: "ai-instructor",
    role: "AI Career Instructor (Weekend Online Classes)",
    company: "AI Mindset Education & Mentorship",
    date: "Sat & Sun | 2024 – Present",
    description: "Teaches practical AI skills for research, productivity, career development, website creation, workflow automation, and real-world business solutions.",
    bullets: [
      "Delivers project-based online training during weekend sessions.",
      "Mentors learners to build job-ready portfolios and AI-assisted workflows.",
      "Focuses on practical, accessible, and career-empowering AI education."
    ],
    highlight: true
  },
  {
    id: "iida-electronic",
    role: "IT Specialist (Dept Head)",
    company: "IIDA Electronic (Myanmar) Co.,Ltd",
    date: "2018 – Present",
    description: "Managing enterprise MRP and procurement CRM systems while enforcing strict ISO 27001 policies for cross-border production security.",
    bullets: [
      "Oversees enterprise server infrastructure, system security, and endpoint protection (MS EDR).",
      "Maintains ISO 27001 (ISMS), ISO 9001 (QMS), and ISO 14000 (EMS) compliance standards.",
      "Manages cross-border data synchronization and procurement CRM databases."
    ],
    highlight: true
  },
  {
    id: "asti-ybs",
    role: "IT Manager",
    company: "Asia Starmar Transport Intelligent (ASTI)",
    date: "2017 – 2018",
    description: "Spearheaded the Yangon Bus System (YBS) Intelligent framework integrating GPS, passenger flow, and payment systems (YPS).",
    bullets: [
      "Architected telematics and real-time transit data processing systems.",
      "Coordinated cross-functional teams to deploy YPS electronic payment infrastructure."
    ]
  },
  {
    id: "golden-land",
    role: "Property Management IT Lead",
    company: "Golden Land Real Estate (Golden City)",
    date: "2014 – 2017",
    description: "Led complete IT service delivery for a premium 300+ employee real estate complex, deploying full-scale BMS and ELV systems.",
    bullets: [
      "Managed network operations, access controls, and Extra Low Voltage (ELV) wiring.",
      "Integrated Building Management Systems (BMS) for commercial real estate infrastructure."
    ]
  }
];

export const CERTIFICATIONS = [
  { name: "ISO 27001:2022", fullName: "Information Security Management System (ISMS)" },
  { name: "ISO 9001:2015", fullName: "Quality Management System (QMS)" },
  { name: "ISO 14000", fullName: "Environmental Management System (EMS)" }
];

export const TECH_STACK = [
  "AI Career Education",
  "Workflow Automation",
  "AWS Cloud",
  "Docker",
  "Google Cloud Platform (GCP)",
  "Ollama AI",
  "Cloudflare IaaS",
  "Proxmox PVE",
  "MS EDR",
  "NAS Solution",
  "Nessus",
  "SaaS"
];
