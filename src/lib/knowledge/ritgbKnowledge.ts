export interface AgencyService {
  id: string;
  name: string;
  badge: string;
  headline: string;
  description: string;
  deliverables: string[];
}

export interface IndustrySolution {
  industry: string;
  headline: string;
  description: string;
  solutions: string[];
}

export interface ProjectWorkflowStep {
  step: string;
  title: string;
  description: string;
  tasks: string[];
}

export interface CaseStudyItem {
  client: string;
  category: string;
  metric: string;
  highlight: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category:
    | "General"
    | "Services"
    | "SEO & Ads"
    | "Pricing & Process"
    | "Careers";
}

export interface RitgbKnowledgeBase {
  name: string;
  fullName: string;
  tagline: string;
  bio: string;
  location: {
    city: string;
    state: string;
    country: string;
    address: string;
    mapLink: string;
  };
  contact: {
    email: string;
    supportEmail: string;
    phone: string[];
    whatsapp: string[];
  };
  socials: {
    instagram: string;
    linkedin: string;
    facebook: string;
  };
  coreServices: AgencyService[];
  industriesServed: IndustrySolution[];
  targetAudience: string[];
  caseStudies: CaseStudyItem[];
  pricingModel: {
    overview: string;
    quotationFactors: string[];
    tiers: string[];
  };
  workflow: ProjectWorkflowStep[];
  leadCollectionFields: string[];
  escalationTriggers: string[];
  careers: {
    overview: string;
    domains: string[];
    applicationProcess: string;
  };
  faqs: FaqItem[];
}

export const RITGB_KNOWLEDGE: RitgbKnowledgeBase = {
  name: "RITGB",
  fullName: "RITGB – Ray Impact Trinity Global Business",
  tagline: "We make your business impossible to ignore.",
  bio: "RITGB (Ray Impact Trinity Global Business) is a premier full-service digital growth agency based in Bhubaneswar, Odisha, India. We combine branding, technology, marketing, and business transformation solutions to help businesses create, develop, and scale their digital presence.",
  location: {
    city: "Bhubaneswar",
    state: "Odisha",
    country: "India",
    address:
      "First Floor, Plot No 3637, behind Tanishq Showroom, Chandrasekharpur, Bhubaneswar, Odisha 751016",
    mapLink:
      "https://maps.google.com/?q=260/1821,+Lane+2+Rd,+Mahadev+Nagar,+Jagannath+Nagar,+Jharapada,+Bhubaneswar,+Odisha+751025",
  },
  contact: {
    email: "Info@rayimpact.net",
    supportEmail: "contact@ritgb.com",
    phone: ["+91 918128551051", "+91 9937672721"],
    whatsapp: ["918128551051", "919937672721"],
  },
  socials: {
    instagram: "https://www.instagram.com/ritgb.io/",
    linkedin: "https://www.linkedin.com/company/trinityglobalbusiness/",
    facebook: "https://www.facebook.com/share/1EMh3vxFjp/",
  },
  coreServices: [
    {
      id: "brand-identity",
      name: "Brand Identity",
      badge: "Visual Systems",
      headline:
        "Unforgettable brand identities that command authority and trust.",
      description:
        "We develop comprehensive brand solutions by understanding business goals, target customers, and competitive environments to build lasting customer trust and recognition.",
      deliverables: [
        "Brand strategy development",
        "Brand positioning",
        "Visual identity creation",
        "Creative direction",
        "Brand guidelines & Brand Bible",
        "Colour & typography selection",
        "Marketing design systems",
        "Digital brand assets",
      ],
    },
    {
      id: "logo-design",
      name: "Logo Design",
      badge: "Brand Marks",
      headline:
        "Distinctive, scalable logos engineered for digital and offline platforms.",
      description:
        "Professional logo design reflecting company values and brand message with versatile formats across websites, social media, print, and corporate documents.",
      deliverables: [
        "Custom logo concept creation",
        "Typography-based & icon marks",
        "Scalable vector formats (SVG, AI, PNG, PDF)",
        "Social media profile & favicon assets",
        "Brand mark usage guidelines",
      ],
    },
    {
      id: "ui-ux-design",
      name: "UI/UX Design",
      badge: "Product Design",
      headline:
        "Frictionless, visually stunning digital experiences that convert.",
      description:
        "User-centric UI/UX design for web apps, mobile apps, SaaS dashboards, and digital platforms focusing on customer behavior, usability, and modern aesthetics.",
      deliverables: [
        "User research & wireframing",
        "Interactive Figma prototypes",
        "Design systems & component libraries",
        "Dashboard & portal interfaces",
        "Mobile app & responsive web layouts",
      ],
    },
    {
      id: "website-design",
      name: "Website Design",
      badge: "Creative Web",
      headline:
        "Modern, responsive website layouts tailored to your business identity.",
      description:
        "High-aesthetic website designs created to engage audiences, build credibility, and drive conversions across all device types.",
      deliverables: [
        "Business & corporate website designs",
        "High-converting landing pages",
        "Portfolio & showcase sites",
        "E-commerce layouts",
        "Custom responsive layouts & animations",
      ],
    },
    {
      id: "website-development",
      name: "Website Development",
      badge: "Next.js & Full-Stack",
      headline:
        "Sub-second loading, ultra-scalable web platforms built on modern stacks.",
      description:
        "Custom web development combining cutting-edge frameworks (Next.js, React, Node.js), robust security, database integrations, and high performance.",
      deliverables: [
        "Custom Next.js & React web applications",
        "Corporate & enterprise web portals",
        "Database & third-party API integration",
        "Performance & Core Web Vitals optimization",
        "Ongoing website maintenance & support",
      ],
    },
    {
      id: "mobile-app-development",
      name: "Mobile Application Development",
      badge: "iOS & Android",
      headline:
        "Native & cross-platform mobile apps engineered for seamless UX.",
      description:
        "End-to-end mobile application development for Android and iOS designed for user retention, speed, and real-time business operations.",
      deliverables: [
        "Android & iOS native application development",
        "Cross-platform applications (Flutter / React Native)",
        "Customer & service-based apps",
        "E-commerce & on-demand mobile solutions",
        "App Store & Play Store deployment",
      ],
    },
    {
      id: "ecommerce-development",
      name: "E-commerce Development",
      badge: "Online Stores",
      headline: "High-converting online shopping platforms built for scale.",
      description:
        "Custom e-commerce platforms with smooth shopping carts, robust payment gateway integrations, real-time inventory, and optimized checkout funnels.",
      deliverables: [
        "Custom online store development",
        "Product catalogue & inventory management",
        "Payment gateway integration (Stripe, Razorpay, etc.)",
        "Order management & automated invoicing",
        "E-commerce checkout optimization & CRO",
      ],
    },
    {
      id: "cms-development",
      name: "CMS Development",
      badge: "Content Control",
      headline: "Intuitive Content Management Systems giving you 100% control.",
      description:
        "Flexible CMS platforms enabling your team to publish articles, update services, manage media, and edit site copy with zero technical hurdles.",
      deliverables: [
        "Headless & custom CMS solutions",
        "Corporate content management portals",
        "Blog & publishing engines",
        "Admin dashboards & role-based permissions",
        "SEO-friendly content editing workflows",
      ],
    },
    {
      id: "api-development",
      name: "API Development & Integration",
      badge: "System Connectivity",
      headline:
        "Secure, high-throughput APIs connecting your digital ecosystem.",
      description:
        "Custom RESTful and GraphQL APIs allowing seamless communication between websites, mobile apps, CRM systems, payment providers, and cloud services.",
      deliverables: [
        "Custom REST & GraphQL API development",
        "Third-party software & SaaS integrations",
        "Secure authentication & data exchange",
        "Database synchronization & backend services",
        "API performance optimization & documentation",
      ],
    },
    {
      id: "software-solutions",
      name: "Software Solutions",
      badge: "Custom Enterprise",
      headline:
        "Bespoke software systems to automate workflows and scale operations.",
      description:
        "Tailored business management software, digital platforms, and automation tools designed to eliminate operational bottlenecks and boost productivity.",
      deliverables: [
        "Custom business management systems (ERP/CRM)",
        "Workflow & operations automation",
        "Internal employee & client portals",
        "Cloud infrastructure & database architecture",
        "Technology consulting & architecture planning",
      ],
    },
    {
      id: "social-media-marketing",
      name: "Social Media Marketing",
      badge: "Viral Content",
      headline:
        "Turn casual scrollers into loyal customers and brand advocates.",
      description:
        "Data-backed social media management, aesthetic content creation, short-form video production, and active community growth strategies.",
      deliverables: [
        "Social media strategy & content planning",
        "Viral Reels, Shorts & video production",
        "Creative graphic design & carousel posts",
        "Audience engagement & community management",
        "Social media growth & performance reporting",
      ],
    },
    {
      id: "paid-advertising",
      name: "Paid Advertising",
      badge: "High-ROAS Funnels",
      headline:
        "Laser-targeted Meta & Google ad campaigns engineered for maximum ROI.",
      description:
        "Performance marketing funnels across Google Search, Display, YouTube, and Meta (Facebook & Instagram) focused on verified lead generation and customer acquisition.",
      deliverables: [
        "Meta Ads (Facebook & Instagram funnels)",
        "Google Search, Display & Performance Max ads",
        "High-intent lead generation campaigns",
        "A/B creative testing & copywriting",
        "Conversion API, Pixel setup & tracking",
      ],
    },
    {
      id: "seo",
      name: "Search Engine Optimization (SEO)",
      badge: "Dominating Search",
      headline:
        "Rank #1 on Google and capture sustainable organic search traffic.",
      description:
        "Comprehensive Local SEO in Bhubaneswar and national ranking strategies covering technical optimization, high-intent keyword clusters, and high-authority links.",
      deliverables: [
        "Local SEO & Google Business Profile (GBP) optimization",
        "Technical SEO & Core Web Vitals audits",
        "Keyword research & competitor analysis",
        "On-page content optimization & topic clusters",
        "SEO reporting, rankings tracking & monitoring",
      ],
    },
    {
      id: "content-strategy",
      name: "Content Strategy",
      badge: "Brand Messaging",
      headline:
        "Strategic storytelling that builds authority and drives engagement.",
      description:
        "End-to-end content planning, brand communication guidelines, SEO articles, and conversion copywriting that connect deeply with target buyers.",
      deliverables: [
        "Website conversion copywriting",
        "SEO blog & article strategy",
        "Brand communication frameworks",
        "Marketing collateral & whitepapers",
        "Content calendar & publication workflow",
      ],
    },
    {
      id: "email-marketing",
      name: "Email Marketing",
      badge: "Retention & Nurture",
      headline:
        "Automated email funnels that nurture leads and generate repeat sales.",
      description:
        "Personalized email campaigns, automated drip sequences, newsletters, and promotional broadcasts designed to maximize subscriber lifetime value.",
      deliverables: [
        "Email campaign planning & copywriting",
        "Automated welcome & lead nurturing workflows",
        "Newsletter design & list segmentation",
        "Promotional & product launch broadcasts",
        "Open rate, CTR & conversion analytics",
      ],
    },
    {
      id: "analytics",
      name: "Analytics and Reporting",
      badge: "Data Intelligence",
      headline:
        "Actionable data insights to optimize campaigns and accelerate growth.",
      description:
        "Deep tracking of user journeys, marketing channels, conversion rates, and ROI to deliver clear recommendations for business scaling.",
      deliverables: [
        "Website traffic & user behavior tracking",
        "Multi-channel campaign performance analysis",
        "Conversion funnel tracking & drop-off analysis",
        "Executive performance dashboards & reports",
        "Data-backed growth recommendations",
      ],
    },
    {
      id: "ai-automation",
      name: "AI Automation Solutions",
      badge: "Smart Systems",
      headline:
        "AI chatbots, automated workflows, and intelligent business systems.",
      description:
        "Custom AI solutions including intelligent customer support chatbots, automated lead qualification, CRM integrations, and business process automation.",
      deliverables: [
        "Custom AI chatbot development & deployment",
        "24/7 customer support automation",
        "Automated lead collection & CRM routing",
        "Internal workflow & task automation",
        "Smart digital assistants & AI integrations",
      ],
    },
  ],
  industriesServed: [
    {
      industry: "Hospitality",
      headline: "Hotels, Resorts, Restaurants & Travel Businesses",
      description:
        "We help hospitality brands improve guest bookings, local discovery, and customer engagement through stunning websites, local SEO, paid campaigns, and AI reservation chatbots.",
      solutions: [
        "Hotel & resort website development",
        "Local SEO & Google Maps optimization for tourist searches",
        "Digital marketing & seasonal ad campaigns",
        "Customer enquiry & AI booking assistant systems",
      ],
    },
    {
      industry: "Healthcare",
      headline: "Clinics, Hospitals & Healthcare Providers",
      description:
        "Professional digital platforms and patient enquiry systems that build trust, facilitate appointment bookings, and dominate local medical search rankings.",
      solutions: [
        "Healthcare & clinic website development",
        "Patient enquiry & appointment booking systems",
        "Local SEO for specialized treatments and doctors",
        "Patient education content & reputation management",
      ],
    },
    {
      industry: "Education",
      headline: "Educational Institutions, Training Centers & E-Learning",
      description:
        "Engaging digital platforms and admission lead funnels that connect institutions with prospective students and parents.",
      solutions: [
        "Institutional website & student portal development",
        "Admission lead generation campaigns",
        "Course catalogues & content platforms",
        "Student enquiry handling & chatbot systems",
      ],
    },
    {
      industry: "E-commerce & Retail",
      headline: "D2C Brands, Retailers & Online Sellers",
      description:
        "High-speed shopping platforms, automated inventory systems, and high-ROAS paid media funnels to scale e-commerce revenue.",
      solutions: [
        "Custom e-commerce store development",
        "High-ROAS Meta & Google Shopping ads",
        "Shopping cart & conversion funnel optimization",
        "Customer retention & automated email flows",
      ],
    },
    {
      industry: "Technology & Startups",
      headline: "SaaS, Tech Companies & Fast-Growing Startups",
      description:
        "Brand identity systems, web applications, custom software solutions, and growth marketing to accelerate early-stage traction.",
      solutions: [
        "Interactive web applications & SaaS UI/UX",
        "Product branding & investor-ready pitch materials",
        "Custom software & API development",
        "AI automation & scalable growth marketing",
      ],
    },
  ],
  targetAudience: [
    "Startups & fast-growing D2C brands",
    "Local businesses & service providers in Bhubaneswar & Odisha",
    "Hospitality, hotel, restaurant & travel enterprises",
    "Healthcare clinics, hospitals & diagnostic centers",
    "Educational institutions & training platforms",
    "Enterprises requiring full digital transformation & technology solutions",
  ],
  caseStudies: [
    {
      client: "D2C Lifestyle Brand",
      category: "Performance Marketing",
      metric: "4.8x ROAS",
      highlight:
        "Scaled monthly revenue from ₹2.5L to ₹18L+ using high-converting Meta funnels & creative video hooks.",
    },
    {
      client: "Bhubaneswar Healthcare & Clinic Group",
      category: "Local SEO & Branding",
      metric: "+340% Inbound Leads",
      highlight:
        "Captured top 3 Google map pack rankings across 25+ high-intent local medical search queries.",
    },
    {
      client: "Fintech / SaaS Startup",
      category: "Web Design & Next.js Dev",
      metric: "99/100 Speed Score",
      highlight:
        "Delivered an award-worthy interactive web app with 62% lift in demo signups.",
    },
  ],
  pricingModel: {
    overview:
      "Customized & performance-driven. Every project quotation is tailored to your business requirements, technical complexity, feature scope, and growth goals with transparent deliverables and zero hidden fees.",
    quotationFactors: [
      "Service category and combination of solutions",
      "Project complexity, scale, and technical scope",
      "Number of custom features, integrations, and pages",
      "Design fidelity, interactive prototypes, and revision requirements",
      "Marketing campaign budget, channels, and targeted goals",
    ],
    tiers: [
      "⚡ **Project Sprints:** Fixed-scope delivery for branding systems, logo suites, or web builds.",
      "🚀 **Growth Retainers:** Dedicated monthly execution for SEO, Meta/Google Ads, Social Media, and Content.",
      "👑 **Full Transformation:** End-to-end agency partnership spanning custom software, AI automation, and omnichannel growth.",
    ],
  },
  workflow: [
    {
      step: "01",
      title: "Requirement Discussion ☕",
      description:
        "We understand your business objectives, target customers, current digital presence, technical requirements, and growth targets.",
      tasks: [
        "Business goals & market audit",
        "Target audience & competitor analysis",
        "Technical & feature scope definition",
        "Recommended solution roadmap",
      ],
    },
    {
      step: "02",
      title: "Strategy & Planning 🧠",
      description:
        "We formulate a tailored project strategy, technology architecture, design direction, and marketing funnels.",
      tasks: [
        "Solution architecture & tech stack selection",
        "Creative direction & design wireframes",
        "Timeline, milestones & resource allocation",
        "Campaign funnel & KPI roadmap",
      ],
    },
    {
      step: "03",
      title: "Design & Development 🔥",
      description:
        "Our creative and engineering teams craft visual assets, build clean code, integrate APIs, and implement features.",
      tasks: [
        "Visual identity & UI/UX prototyping",
        "Full-stack development & database setup",
        "Content integration & ad creative production",
        "Client review checkpoints & iterative refinement",
      ],
    },
    {
      step: "04",
      title: "Testing & Improvement 🧪",
      description:
        "Rigorous functionality, performance, cross-device, security, and user experience testing before deployment.",
      tasks: [
        "Cross-browser & mobile responsiveness verification",
        "Page speed & Core Web Vitals optimization",
        "API & payment gateway testing",
        "Conversion tracking & tracking pixel audit",
      ],
    },
    {
      step: "05",
      title: "Delivery & Support 🚀",
      description:
        "Seamless launch, training, campaign rollout, and ongoing maintenance support based on service agreements.",
      tasks: [
        "Live deployment & domain setup",
        "Marketing campaign launch & ad spend optimization",
        "Ongoing technical maintenance & security updates",
        "Weekly/monthly performance reports & scaling insights",
      ],
    },
  ],
  leadCollectionFields: [
    "Customer Name",
    "Company / Business Name",
    "Business Category / Industry",
    "Required Service (Branding, Web, Mobile App, Ads, SEO, AI, etc.)",
    "Current Website or Social Media Links",
    "Project Requirements & Expected Deliverables",
    "Expected Timeline & Launch Date",
    "Estimated Budget Range",
    "Phone Number / WhatsApp",
    "Email Address",
    "Preferred Communication Method",
  ],
  escalationTriggers: [
    "Formal quotation or cost proposal requests",
    "Detailed technical architecture or bespoke software discussions",
    "Custom contractual terms or NDA requirements",
    "Payment schedules, invoicing, or commercial negotiations",
    "Final project sign-off or kickoff scheduling",
  ],
  careers: {
    overview:
      "RITGB welcomes talented, creative, and motivated professionals looking to build a career in technology, marketing, and design.",
    domains: [
      "Digital Marketing & Performance Ads",
      "Web Development (React, Next.js, Node.js)",
      "Mobile Application Development (iOS / Android)",
      "UI/UX Design & Graphic Design",
      "AI & Automation Solutions",
      "Business Development & Client Support",
      "Content Creation & Copywriting",
    ],
    applicationProcess:
      "Interested candidates can submit their resume and portfolio through official RITGB communication channels or email Info@rayimpact.net.",
  },
  faqs: [
    {
      question: "What is RITGB?",
      answer:
        "RITGB is a full-service digital growth agency providing branding, technology, marketing, and business transformation solutions.",
      category: "General",
    },
    {
      question: "What services does RITGB provide?",
      answer:
        "RITGB provides complete digital growth solutions including branding, website development, mobile applications, e-commerce solutions, software development, digital marketing, SEO, AI automation, and technology solutions.",
      category: "Services",
    },
    {
      question: "Who can use RITGB services?",
      answer:
        "RITGB services are suitable for startups, businesses, organizations, brands, hospitality companies, healthcare providers, educational institutions, e-commerce businesses, and technology companies.",
      category: "General",
    },
    {
      question: "Does RITGB work with startups?",
      answer:
        "Yes. RITGB provides digital solutions for startups including branding, websites, software solutions, marketing, and technology services.",
      category: "General",
    },
    {
      question: "Does RITGB provide custom solutions?",
      answer:
        "Yes. RITGB creates customized digital solutions based on business requirements, project objectives, and technical needs.",
      category: "Services",
    },
    {
      question: "Can RITGB create a website for my business?",
      answer:
        "Yes. RITGB provides website design and development solutions for businesses, startups, organizations, and brands. The website solution can be customized according to your business requirements, features, and goals.",
      category: "Services",
    },
    {
      question: "Does RITGB provide website maintenance?",
      answer:
        "Website maintenance availability depends on the selected service agreement and project requirements.",
      category: "Services",
    },
    {
      question: "Does RITGB provide AI chatbot development?",
      answer:
        "Yes. RITGB provides AI automation and chatbot solutions that can help businesses manage customer enquiries, automate communication, and improve customer support.",
      category: "Services",
    },
    {
      question: "Can RITGB help my hotel or restaurant?",
      answer:
        "Yes. RITGB provides digital solutions for hospitality businesses including hotel websites, online visibility improvement, digital marketing, customer enquiry systems, and AI chatbot solutions.",
      category: "Services",
    },
    {
      question: "I need digital marketing services. Can RITGB help?",
      answer:
        "Yes. RITGB provides digital marketing solutions including SEO, social media marketing, paid advertising, content strategy, analytics, and online growth solutions.",
      category: "SEO & Ads",
    },
    {
      question: "Can RITGB help improve online visibility?",
      answer:
        "Yes. RITGB provides solutions including SEO, digital marketing, content strategy, social media marketing, and online growth solutions.",
      category: "SEO & Ads",
    },
    {
      question: "How much does a project cost?",
      answer:
        "Project pricing depends on the selected service, project requirements, complexity, features, and customization needs. Please share your business details and requirements to receive a suitable proposal.",
      category: "Pricing & Process",
    },
    {
      question: "How can I start a project with RITGB?",
      answer:
        "To start a project, customers can share their business name, required service, project details, current website or digital presence, and contact information. The RITGB team will review the requirement and provide further assistance.",
      category: "Pricing & Process",
    },
    {
      question: "Does RITGB have career openings and how can I apply?",
      answer:
        "RITGB provides career opportunities across digital marketing, web development, mobile application development, UI/UX design, graphic design, AI solutions, business development, content creation, and client support. Candidates may submit their profile through official RITGB communication channels or email Info@rayimpact.net.",
      category: "Careers",
    },
  ],
};
