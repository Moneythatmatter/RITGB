export interface AgencyService {
  id: string;
  name: string;
  badge: string;
  headline: string;
  description: string;
  deliverables: string[];
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
  category: 'Services' | 'SEO & Ads' | 'Pricing & Process' | 'General';
}

export interface RitgbKnowledgeBase {
  name: string;
  fullName: string;
  tagline: string;
  bio: string;
  location: {
    city: string;
    state: string;
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
  targetAudience: string[];
  caseStudies: CaseStudyItem[];
  pricingModel: {
    overview: string;
    tiers: string[];
  };
  workflow: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: FaqItem[];
}

export const RITGB_KNOWLEDGE: RitgbKnowledgeBase = {
  name: 'RITGB',
  fullName: 'RITGB – Digital Marketing & Branding Agency',
  tagline: 'We make your business impossible to ignore.',
  bio: 'Bhubaneswar’s premier digital growth and creative agency. We engineer unforgettable brand identities, high-converting Next.js web experiences, and aggressive performance marketing funnels that turn clicks into revenue.',
  location: {
    city: 'Bhubaneswar',
    state: 'Odisha',
    address: 'First Floor, Plot No 3637, behind Tanishq Showroom, Chandrasekharpur, Bhubaneswar, Odisha 751016',
    mapLink: 'https://maps.google.com/?q=260/1821,+Lane+2+Rd,+Mahadev+Nagar,+Jagannath+Nagar,+Jharapada,+Bhubaneswar,+Odisha+751025',
  },
  contact: {
    email: 'Info@rayimpact.net',
    supportEmail: 'contact@ritgb.com',
    phone: ['+91 918128551051', '+91 9937672721'],
    whatsapp: ['918128551051', '919937672721'],
  },
  socials: {
    instagram: 'https://www.instagram.com/ritgb.io/',
    linkedin: 'https://www.linkedin.com/company/trinityglobalbusiness/',
    facebook: 'https://www.facebook.com/share/1EMh3vxFjp/',
  },
  coreServices: [
    {
      id: 'branding',
      name: 'Branding & Identity',
      badge: 'Visual Systems',
      headline: 'Brands that people remember, stalk, and obsess over.',
      description: 'We don’t do generic Canva logos. We craft full-scale brand systems, typography, color architecture, and brand storytelling that command authority.',
      deliverables: [
        'Visual Identity & Logo Systems',
        'Brand Guidelines & Tone of Voice Book',
        'Packaging & Print Collateral',
        'Social Media Brand Toolkits',
        'Creative Direction & Storytelling',
      ],
    },
    {
      id: 'web-dev',
      name: 'Web Design & Tech',
      badge: 'Next.js & Full-Stack',
      headline: 'Lightning-fast digital experiences that convert at scale.',
      description: 'Websites that don’t embarrass your brand. Built on modern Next.js/React stacks with responsive UI/UX, seamless animations, and sub-second load times.',
      deliverables: [
        'Custom Next.js & React Web Applications',
        'High-Converting Landing Pages',
        'Interactive UI/UX & Motion Design',
        'E-Commerce & Headless CMS Integration',
        'Core Web Vitals & Speed Optimization',
      ],
    },
    {
      id: 'seo',
      name: 'SEO & Organic Growth',
      badge: 'Dominating Search',
      headline: 'Rank #1 on Google without burning money on low-intent traffic.',
      description: 'Comprehensive Local SEO in Bhubaneswar and national ranking strategies. Technical audits, semantic keyword clusters, and high-authority link acquisition.',
      deliverables: [
        'Local SEO & Google Business Profile (GBP) Domination',
        'Technical SEO & Core Web Vitals Audits',
        'High-Intent Keyword & Competitor Analysis',
        'Content Strategy & Topic Clusters',
        'Organic Conversion Rate Optimization (CRO)',
      ],
    },
    {
      id: 'performance-marketing',
      name: 'Performance Marketing',
      badge: 'Meta & Google Ads',
      headline: 'Aggressive ad campaigns engineered for maximum ROAS.',
      description: 'No vanity impressions. We run precision-targeted Meta Ads (Instagram/Facebook) and Google Ads that capture high-intent leads and generate measurable revenue.',
      deliverables: [
        'Meta Ads (Facebook & Instagram Funnels)',
        'Google Search, Display & Performance Max Ads',
        'High-ROAS E-commerce & Lead Gen Funnels',
        'A/B Creative & Copy Testing',
        'Conversion API & Pixel Tracking Setup',
      ],
    },
    {
      id: 'social-media',
      name: 'Social Media Management',
      badge: 'Viral Content Strategy',
      headline: 'Turning casual scrollers into loyal brand disciples.',
      description: 'Organic short-form video strategies, viral trend jacking, and aesthetic community building designed to dominate feeds.',
      deliverables: [
        'Viral Reels & Short-Form Video Production',
        'Content Calendar & High-Aesthetic Feed Design',
        'Community Engagement & DM Funnels',
        'Influencer Collaborations & Campaigns',
        'Trend-Jacking & Cultural Relevance Strategies',
      ],
    },
  ],
  targetAudience: [
    'Fast-growing Startups & D2C Brands',
    'Local Businesses & Service Providers in Bhubaneswar & Odisha',
    'Hospitality, Real Estate & Healthcare Brands',
    'Enterprises seeking complete digital transformation and high ROAS',
  ],
  caseStudies: [
    {
      client: 'D2C Lifestyle Brand',
      category: 'Performance Marketing',
      metric: '4.8x ROAS',
      highlight: 'Scaled monthly revenue from ₹2.5L to ₹18L+ using high-converting Meta funnels & creative video hooks.',
    },
    {
      client: 'Bhubaneswar Healthcare & Clinic Group',
      category: 'Local SEO & Branding',
      metric: '+340% Inbound Leads',
      highlight: 'Captured top 3 Google map pack rankings across 25+ high-intent local medical search queries.',
    },
    {
      client: 'Fintech / SaaS Startup',
      category: 'Web Design & Next.js Dev',
      metric: '99/100 Speed Score',
      highlight: 'Delivered an award-worthy interactive Next.js web app with 62% lift in demo signups.',
    },
  ],
  pricingModel: {
    overview: 'Customized & performance-focused. We don’t gatekeep pricing: we structure transparent monthly retainers and project sprints based on your specific growth goals.',
    tiers: [
      '⚡ **Starter Sprint:** Fast-turnaround branding or single landing page setup.',
      '🚀 **Growth Retainer:** Full-service SEO + Meta/Google Ads + Social Media execution.',
      '👑 **Enterprise Domination:** Bespoke Next.js web development, full brand overhaul, and dedicated performance team.',
    ],
  },
  workflow: [
    {
      step: '01',
      title: 'Discovery & Vibe Check ☕',
      description: 'We audit your current tech, brand presence, competitors, and ad performance to find low-hanging revenue leaks.',
    },
    {
      step: '02',
      title: 'Strategy & Game Plan 🧠',
      description: 'We map out a custom growth roadmap: messaging hooks, target keyword clusters, and ad funnels.',
    },
    {
      step: '03',
      title: 'Execution & Firepower 🔥',
      description: 'Our design, dev, and media teams build the assets, launch the campaigns, and push the live code.',
    },
    {
      step: '04',
      title: 'Scale & Dominate 📈',
      description: 'Continuous A/B testing, ROAS scaling, weekly KPI reporting, and zero vanity fluff.',
    },
  ],
  faqs: [
    {
      question: 'What does RITGB do and where are you located?',
      answer: 'RITGB is a full-service digital marketing and branding agency based in Bhubaneswar, Odisha (Chandrasekharpur). We specialize in Brand Identity, Custom Next.js Web Development, Local SEO, High-ROAS Performance Ads, and Viral Social Media.',
      category: 'General',
    },
    {
      question: 'How do your Meta and Google Ads deliver high ROAS?',
      answer: 'We don’t just boost posts and pray. We build full multi-stage funnels (Top of Funnel awareness, Middle of Funnel consideration, and Bottom of Funnel retargeting) paired with high-converting creative copy, dynamic video hooks, and strict Conversion API tracking.',
      category: 'SEO & Ads',
    },
    {
      question: 'Can you help my local business in Bhubaneswar rank #1 on Google?',
      answer: 'Absolutely! Our Local SEO sprint optimizes your Google Business Profile (GBP), geo-tagged citations, local backlinks, schema markup, and on-page localized content so customers nearby find you first.',
      category: 'SEO & Ads',
    },
    {
      question: 'Why do you build websites with Next.js & React instead of WordPress?',
      answer: 'Next.js delivers sub-second load times, unbreakable security, top-tier SEO rankings, and complete design freedom without plugin bloat or maintenance headaches.',
      category: 'Services',
    },
    {
      question: 'How does your pricing and retainer model work?',
      answer: 'We offer modular project-based pricing (for branding/web dev) and monthly growth retainers (for Ads, SEO, and Social Media). We provide clear deliverables and zero hidden fees.',
      category: 'Pricing & Process',
    },
    {
      question: 'How do I claim a Free Growth Audit for my brand?',
      answer: 'Hit our [Contact Form](/contact) or message us directly on WhatsApp (+91 918128551051). We’ll review your website, SEO, and current ads and send you a custom audit with actionable insights.',
      category: 'Pricing & Process',
    },
  ],
};
