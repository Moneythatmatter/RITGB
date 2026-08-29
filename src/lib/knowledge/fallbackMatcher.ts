import { RITGB_KNOWLEDGE } from './ritgbKnowledge';

/**
 * Intelligent deterministic fallback matcher grounded in RITGB Agency knowledge.
 * Ultra-concise, Gen Z digital marketing insider energy, witty internet slang, and punchy emojis.
 */
export function getGroundedFallbackResponse(userMessage: string): string {
  const q = userMessage.toLowerCase().trim();

  // 0. Identity & Name & What is RITGB
  if (
    q.includes('your name') ||
    q.includes('who are you') ||
    q.includes('who r u') ||
    q.includes('what is your name') ||
    q.includes('whats your name') ||
    q.includes('what are you') ||
    q.includes('what is ritgb') ||
    q.includes('what does ritgb stand for') ||
    q.includes('full name') ||
    q === 'ritzy' ||
    q.includes('ritzy')
  ) {
    return `I’m **Ritzy**! 💁‍♀️✨ Official AI Growth Specialist and resident hype mascot for **RITGB** (*${RITGB_KNOWLEDGE.fullName}*).

We're Bhubaneswar’s full-service digital growth agency turning brands into main characters:
✨ **Brand & UI/UX:** Visual systems that eat and leave no crumbs 💅
🚀 **Web, Mobile & AI:** Next.js sites, mobile apps & AI automation that load in ms
📈 **Growth Funnels:** High-ROAS Meta/Google Ads & local SEO domination

Ready to enter your brand's growth era? 👉 **[Get a Free Audit](/contact)**! 🤝`;
  }

  // 0.1 Greetings
  if (/^(hi|hello|hey|greetings|good\s*(morning|afternoon|evening)|namaste|yo|sup|hola)\b/i.test(q)) {
    return `I’m **Ritzy**—dropping some unfiltered growth tea: ☕👀

Most agency websites are pure buzzword soup. We make your business impossible to ignore, no cap.

✨ **Quick Menu:**
- 🎨 [Branding & UI/UX Design](/expertise) 💅
- ⚡ [Next.js Web & Mobile Apps](/software) 🚀
- 🤖 [AI Chatbots & Automation](/expertise) 🧠
- 📈 [High-ROAS Paid Ads & SEO](/expertise) 🔥
- 🏆 [Past Client Wins & Work](/work) 👀
- 🎯 [Claim Free Growth Audit](/contact) 🤝

What part of your digital presence are we leveling up today? 🚀`;
  }

  // 1. Pricing / Cost / Quotation / Budget / Retainers
  if (
    q.includes('price') ||
    q.includes('pricing') ||
    q.includes('cost') ||
    q.includes('quote') ||
    q.includes('quotation') ||
    q.includes('budget') ||
    q.includes('rate') ||
    q.includes('retainer') ||
    q.includes('how much')
  ) {
    return `Zero gatekeeping on pricing—we tailor quotes to your exact scope: ☕🤝

Our pricing is transparent and deliverable-backed:
⚡ **Project Sprints:** Fixed scope for branding packages, UI/UX, or Next.js builds
📈 **Growth Retainers:** Dedicated monthly execution for Ads + SEO + Socials
👑 **Enterprise Transformation:** Full-scale web, software & marketing partnership

Every single rupee/dollar goes directly toward measurable ROI. 💅

👉 **[Request a Custom Proposal](/contact)** or email [${RITGB_KNOWLEDGE.contact.email}](mailto:${RITGB_KNOWLEDGE.contact.email})! 🫡`;
  }

  // 2. Free Audit / Consultation / Strategy Call / Demo
  if (
    q.includes('audit') ||
    q.includes('consultation') ||
    q.includes('free') ||
    q.includes('meeting') ||
    q.includes('schedule')
  ) {
    return `No 40-page boring audit PDFs you’ll never read. Real talk only: ☕💀

Claim our **Free Growth Audit** and we’ll review:
✨ **Conversion Leaks:** Where your website or app is losing paying customers
🎯 **Ad Fatigues:** Why your Meta/Google CPAs are creeping up
🔍 **SEO Blindspots:** Why competitors in Bhubaneswar outrank you

Zero gatekeeping. 100% actionable game plan. 💅

👉 **[Claim Your Free Audit Here](/contact)** or ping us at [${RITGB_KNOWLEDGE.contact.email}](mailto:${RITGB_KNOWLEDGE.contact.email})! 🫡`;
  }

  // 3. How to Start a Project / Client Onboarding / Lead Intake
  if (
    q.includes('start a project') ||
    q.includes('how to start') ||
    q.includes('get started') ||
    q.includes('onboarding') ||
    q.includes('submit requirements')
  ) {
    return `Ready to level up? Starting a project with RITGB is super simple: 🚀📝

Just share these quick details with our team:
1. **Your Name & Company Name**
2. **Business Industry** (Hospitality, Healthcare, D2C, Tech, etc.)
3. **Required Service** (Branding, Web, Mobile App, Ads, SEO, AI, etc.)
4. **Current Website / Links** (if any)
5. **Expected Timeline & Budget Range**

Drop these in our form and our team will get back to you within 2 hours! ⏱️

👉 **[Submit Project Details on Contact Page](/contact)** or **[Chat on WhatsApp](https://wa.me/918128551051)**! 🤝`;
  }

  // 4. Careers / Hiring / Jobs / Internships
  if (
    q.includes('career') ||
    q.includes('job') ||
    q.includes('hiring') ||
    q.includes('intern') ||
    q.includes('opening') ||
    q.includes('apply') ||
    q.includes('vacancy')
  ) {
    return `We’re always on the lookout for top-tier creative and technical talent! 💼✨

We hire across:
💻 **Engineering:** Next.js / React Web Dev & Mobile App Developers (iOS/Android)
🎨 **Creative:** UI/UX Designers, Graphic Designers & Video Editors
📈 **Marketing:** Performance Marketers (Meta/Google Ads) & SEO Specialists
🤖 **Tech & Growth:** AI Solution Architects, Business Dev & Content Creators

Ready to join our team? Send your resume & portfolio to **[${RITGB_KNOWLEDGE.contact.email}](mailto:${RITGB_KNOWLEDGE.contact.email})**! 🚀

👉 **[Contact Us Directly](/contact)**! 🤝`;
  }

  // 5. All Services Overview / What services do you offer?
  if (
    q.includes('all service') ||
    q.includes('what services') ||
    q.includes('list services') ||
    q.includes('services do you provide') ||
    q.includes('offerings') ||
    q === 'services'
  ) {
    return `We provide 17 full-suite digital solutions across 4 powerhouse verticals: 🚀✨

🎨 **Design & Brand:** Brand Identity, Logo Design, UI/UX Design & Website Design
⚡ **Tech & Code:** Next.js Web Dev, Mobile Apps (iOS/Android), E-Commerce, CMS & APIs
🤖 **AI & Systems:** Custom AI Chatbots, Business Automation & Software Solutions
📈 **Growth & Marketing:** SEO, Google/Meta Ads, Social Media, Content & Email Marketing

We don't do half-baked MVPs; we build scalable market leaders. 💅

👉 **[Explore Full Services](/expertise)** | **[Claim a Free Audit](/contact)**! 🤝`;
  }

  // 6. Brand Identity & Logo Design
  if (
    q.includes('brand') ||
    q.includes('branding') ||
    q.includes('logo') ||
    q.includes('identity') ||
    q.includes('packaging') ||
    q.includes('visual identity') ||
    q.includes('brand guidelines') ||
    q.includes('typography')
  ) {
    return `Generic Canva templates are giving NPC energy. We build main characters. 💅✨

Our **Branding & Visual Systems** include:
🎨 **Logo Architecture:** Custom typography, scalable vector assets & favicons
📖 **Brand Bible:** Color palettes, typography systems & tone of voice
📦 **Packaging & Collateral:** Digital assets, print materials & brand toolkits
🔥 **Brand Positioning:** Storytelling that lives rent-free in customer minds

Make your brand unforgettable. Period. 🤝

👉 **[Explore Branding Services](/expertise)** or **[Get a Free Audit](/contact)**! 🚀`;
  }

  // 7. UI/UX Design & Product Design
  if (
    q.includes('ui/ux') ||
    q.includes('ui ux') ||
    q.includes('ui design') ||
    q.includes('ux design') ||
    q.includes('prototype') ||
    q.includes('wireframe') ||
    q.includes('dashboard') ||
    q.includes('interface')
  ) {
    return `If users can't navigate your product in 3 seconds, they bounce. 💀📱

Our **UI/UX Design Studio** engineers frictionless experiences:
✨ **User Research & Flows:** Wireframing conversion paths with zero drop-offs
💎 **Interactive Figma Prototypes:** Pixel-perfect motion & micro-interactions
📊 **Dashboards & SaaS Portals:** Clean, modern, high-utility interfaces
📱 **Responsive Systems:** Flawless usability across mobile, tablet & desktop

Great design is good business. We understood the assignment. 💅

👉 **[Explore UI/UX & Web](/software)** | **[Book a Strategy Call](/contact)**! 🚀`;
  }

  // 8. Web Design & Website Development / Next.js / Tech
  if (
    q.includes('website') ||
    q.includes('web design') ||
    q.includes('web dev') ||
    q.includes('next.js') ||
    q.includes('react') ||
    q.includes('web development') ||
    q.includes('landing page') ||
    q.includes('speed')
  ) {
    return `If your website takes 5 seconds to load, your conversion rate is cooked. 💀⚡

We build high-converting web experiences on Next.js & React:
🚀 **Sub-Second Speed:** 95+ Google PageSpeed scores, zero bloat
📱 **Mobile-First UX:** Frictionless flows engineered to convert
💎 **Aesthetic Motion:** Interactive micro-animations that slay
🔒 **Unbreakable Tech:** Clean TypeScript code, modern APIs & rock-solid security

Your website is your best salesperson. Make it count. 💅

👉 **[Check Out Tech & Web](/software)** | **[View Our Work](/work)**! 🤝`;
  }

  // 9. Mobile Application Development (iOS / Android / Flutter / React Native)
  if (
    q.includes('mobile app') ||
    q.includes('app dev') ||
    q.includes('ios') ||
    q.includes('android') ||
    q.includes('flutter') ||
    q.includes('react native') ||
    q.includes('mobile application') ||
    q.includes('app development')
  ) {
    return `Mobile apps that lag get uninstalled in 60 seconds. We build buttery-smooth apps. 📱⚡

Our **Mobile App Engineering** covers:
🍏 **iOS & Android Native:** High-performance Swift/Kotlin applications
🌐 **Cross-Platform:** Scalable Flutter & React Native builds
🛒 **E-Commerce & Service Apps:** Real-time push notifications & payment checkouts
💼 **Internal Enterprise Tools:** Custom workflow apps for your on-ground teams

From wireframing to App Store & Play Store deployment, we handle it all. 💅

👉 **[Discuss Your App Idea](/contact)** | **[Explore Tech Stack](/software)**! 🤝`;
  }

  // 10. E-Commerce Development & CMS
  if (
    q.includes('ecommerce') ||
    q.includes('e-commerce') ||
    q.includes('online store') ||
    q.includes('shop') ||
    q.includes('shopping cart') ||
    q.includes('cms') ||
    q.includes('shopify') ||
    q.includes('woocommerce')
  ) {
    return `High cart abandonment? Your checkout flow needs a serious vibe check. 🛒💀

Our **E-Commerce & CMS Platforms** deliver:
🛍️ **Custom Online Stores:** Sub-second catalogue browsing & smart search
💳 **Frictionless Payments:** Razorpay, Stripe, UPI & 1-click checkouts
📦 **Inventory & Orders:** Real-time order tracking & automated invoicing
📝 **Custom CMS:** Manage products, blogs & banners with zero coding needed

Scale your store from 10 orders to 10,000 orders seamlessly. 🚀

👉 **[Build Your E-Commerce Store](/contact)** | **[Explore Software](/software)**! 💅`;
  }

  // 11. API Development & Custom Software Solutions
  if (
    q.includes('api') ||
    q.includes('software') ||
    q.includes('custom software') ||
    q.includes('backend') ||
    q.includes('erp') ||
    q.includes('crm') ||
    q.includes('system integration')
  ) {
    return `Siloed systems are silently bleeding your team's productivity. ☕⚙️

Our **Software & API Engineering** builds connected platforms:
🔗 **Custom APIs:** Secure REST & GraphQL endpoints connecting your stack
💼 **Business ERP/CRM:** Tailored systems built around your exact workflows
⚡ **Automation Pipelines:** Sync databases, third-party SaaS & cloud services
🛡️ **Enterprise Security:** Scalable cloud architecture & role-based permissions

Eliminate manual bottlenecks and scale your operations effortlessly. 🧠

👉 **[Explore Custom Software](/software)** | **[Talk to Our Engineers](/contact)**! 🤝`;
  }

  // 12. AI Automation Solutions & Chatbots
  if (
    q.includes('ai') ||
    q.includes('artificial intelligence') ||
    q.includes('chatbot') ||
    q.includes('bot') ||
    q.includes('automation') ||
    q.includes('assistant')
  ) {
    return `Automating repetitive tasks is how modern businesses 10x their output. 🤖⚡

Our **AI Automation Solutions** include:
💬 **Custom AI Chatbots:** 24/7 intelligent customer support & lead capture
🎯 **Lead Qualification:** Automated routing of high-intent buyers to sales reps
⚙️ **Workflow Automation:** Connect CRM, invoicing, and email sequences automatically
🧠 **Smart Digital Assistants:** Tailored AI agents trained on your business data

Never lose a customer because of delayed response times again. 💅

👉 **[Deploy AI Automation](/contact)** | **[Explore Solutions](/expertise)**! 🚀`;
  }

  // 13. Search Engine Optimization (SEO) & Local SEO
  if (
    q.includes('seo') ||
    q.includes('rank') ||
    q.includes('ranking') ||
    q.includes('google search') ||
    q.includes('organic') ||
    q.includes('traffic') ||
    q.includes('keyword') ||
    q.includes('local seo')
  ) {
    return `Major side eye to agencies selling spam backlinks and empty promises. 😒📉

We drive high-intent organic traffic that actually buys:
📍 **Local SEO Domination:** Own Google Map Packs in Bhubaneswar & Odisha
⚡ **Technical Audits:** Clean schema markup, fast crawlability & Core Web Vitals
🔍 **Search Intent Strategy:** Target high-converting commercial keywords
📈 **Content Clusters:** Authority-building articles that rank on Page 1

Stop paying for ad clicks when you can own the search results organically. 🧠

👉 **[Rank On Google Today](/contact)** | **[Explore SEO Services](/expertise)**! 🚀`;
  }

  // 14. Paid Advertising (Meta & Google Ads) / ROAS / PPC
  if (
    q.includes('ad') ||
    q.includes('ads') ||
    q.includes('meta') ||
    q.includes('facebook') ||
    q.includes('instagram ad') ||
    q.includes('google ad') ||
    q.includes('roas') ||
    q.includes('paid') ||
    q.includes('ppc') ||
    q.includes('lead gen') ||
    q.includes('campaign')
  ) {
    return `Boosting Instagram posts with no funnel is literally burning cash. 💸💀

Our **Performance Marketing Engine** is built for pure ROAS:
🎯 **Meta Ads (FB/IG):** High-converting UGC video hooks & retargeting funnels
🔍 **Google Search & PMax:** Capture ready-to-buy search intent immediately
📊 **Full-Funnel Tracking:** Meta Conversion API & server-side attribution
🧪 **Relentless A/B Testing:** Iterating creatives until ROAS prints 📈

We scaled D2C brands to 4.8x ROAS. We understood the assignment. 💅

👉 **[Scale Your Paid Ads](/contact)** | **[View Case Studies](/work)**! 🔥`;
  }

  // 15. Social Media Marketing & Content Strategy
  if (
    q.includes('social media') ||
    q.includes('social') ||
    q.includes('reels') ||
    q.includes('instagram') ||
    q.includes('content') ||
    q.includes('viral') ||
    q.includes('video') ||
    q.includes('community')
  ) {
    return `Boring corporate graphics in 2026? Instant swipe-away. 💀📱

We turn passive scrollers into obsessed brand advocates:
🔥 **Viral Short-Form:** High-hook Reels & TikTok-style video production
✨ **Aesthetic Feeds:** Grid curation that commands luxury authority
🗣️ **Community Hype:** Active engagement, DM funnels & trend jacking
📝 **Content Strategy:** High-converting copywriting and content calendars

Enter your viral era without looking cringe. 💅

👉 **[Level Up Your Socials](/expertise)** | **[Get in Touch](/contact)**! 🚀`;
  }

  // 16. Email Marketing & Analytics
  if (
    q.includes('email marketing') ||
    q.includes('newsletter') ||
    q.includes('analytics') ||
    q.includes('reporting') ||
    q.includes('data') ||
    q.includes('tracking')
  ) {
    return `Your email list and marketing data are your most undervalued assets. 📈☕

Our **Email & Analytics Solutions** unlock hidden revenue:
📧 **Automated Drip Sequences:** Welcome, abandoned cart & re-engagement funnels
📬 **High-Open Newsletters:** Compelling copy that doesn't trigger spam filters
📊 **Data-Driven Insights:** Multi-touch attribution & user drop-off heatmaps
🎯 **Growth Forecasting:** Clear KPI reports with zero vanity fluff

Turn raw customer data into predictable, compounding revenue. 🧠

👉 **[Unlock Growth Insights](/contact)** | **[Explore Services](/expertise)**! 🚀`;
  }

  // 17. Industries Served: Hospitality, Healthcare, Education, Tech, E-commerce
  if (
    q.includes('hospitality') ||
    q.includes('hotel') ||
    q.includes('resort') ||
    q.includes('restaurant') ||
    q.includes('healthcare') ||
    q.includes('clinic') ||
    q.includes('hospital') ||
    q.includes('doctor') ||
    q.includes('education') ||
    q.includes('school') ||
    q.includes('college') ||
    q.includes('startup') ||
    q.includes('industry') ||
    q.includes('industries')
  ) {
    return `We build tailor-made growth engines for specialized industries: 🏨🏥🎓

🏨 **Hospitality:** Booking websites, tourist Local SEO & AI reservation bots
🏥 **Healthcare:** Clinic platforms, appointment funnels & local medical search
🎓 **Education:** Admissions lead funnels, institutional portals & student bots
🛍️ **E-Commerce & D2C:** High-speed stores & 4.8x ROAS paid media funnels
🚀 **Startups & Tech:** Brand identity, Next.js web apps & SaaS growth

We know what converts in your specific market. 💅

👉 **[Discuss Your Industry Project](/contact)** | **[View Case Studies](/work)**! 🤝`;
  }

  // 18. Project Process / 5-stage Workflow
  if (
    q.includes('process') ||
    q.includes('workflow') ||
    q.includes('how it works') ||
    q.includes('steps') ||
    q.includes('timeline') ||
    q.includes('lifecycle')
  ) {
    return `Zero guesswork. We follow a structured 5-stage project lifecycle: 📋🚀

1️⃣ **Requirement Discussion ☕:** Deep-dive into your goals, audience & scope
2️⃣ **Strategy & Planning 🧠:** Tech selection, wireframing & ad funnels
3️⃣ **Design & Development 🔥:** High-aesthetic builds, clean code & ad creative
4️⃣ **Testing & Improvement 🧪:** Rigorous QA, speed checks & Core Web Vitals
5️⃣ **Delivery & Support 🚀:** Live launch, ongoing retainers & weekly KPI tracking

Clear milestones, transparent communication, and zero missed deadlines. 💅

👉 **[Kick Off Stage 1](/contact)** | **[Explore Tech Stack](/software)**! 🤝`;
  }

  // 19. Case Studies / Portfolio / Proof / Past Work / Results
  if (
    q.includes('work') ||
    q.includes('portfolio') ||
    q.includes('case stud') ||
    q.includes('clients') ||
    q.includes('results') ||
    q.includes('proof') ||
    q.includes('examples')
  ) {
    return `Numbers speak louder than agency hype. Here’s the real tea: 📊👀

Recent client flexes:
🛍️ **D2C Lifestyle Brand:** Scaled from ₹2.5L to ₹18L/mo at **4.8x ROAS** 🚀
🏥 **Bhubaneswar Healthcare:** **+340% Inbound Leads** via local SEO rankings 📈
⚡ **Fintech SaaS:** Award-worthy Next.js web app with **99/100 speed score** 💅

We don’t just talk about growth; we engineer it. 🤝

👉 **[View Full Portfolio & Work](/work)** | **[Book an Audit](/contact)**! ✨`;
  }

  // 20. Location / Bhubaneswar / Odisha / Address / Office
  if (
    q.includes('location') ||
    q.includes('where are you') ||
    q.includes('office') ||
    q.includes('address') ||
    q.includes('bhubaneswar') ||
    q.includes('odisha') ||
    q.includes('chandrasekharpur')
  ) {
    return `Proudly headquartered in the smart city of **Bhubaneswar, Odisha, India**! 📍✨

🏢 **HQ Address:** ${RITGB_KNOWLEDGE.location.address}
📞 **Phone:** ${RITGB_KNOWLEDGE.contact.phone.join(' | ')}
📧 **Email:** [${RITGB_KNOWLEDGE.contact.email}](mailto:${RITGB_KNOWLEDGE.contact.email})

Drop by our office for chai & strategy, or jump on a quick discovery call! ☕

👉 **[Find Us On Google Maps](${RITGB_KNOWLEDGE.location.mapLink})** | **[Message Us](/contact)**! 🤝`;
  }

  // 21. Human Escalation / Speak to Human / Contact Info
  if (
    q.includes('human') ||
    q.includes('real person') ||
    q.includes('talk to someone') ||
    q.includes('phone') ||
    q.includes('email') ||
    q.includes('whatsapp') ||
    q.includes('contact') ||
    q.includes('hire') ||
    q.includes('talk') ||
    q.includes('reach')
  ) {
    return `Let’s connect you directly with our human strategy and leadership team: 🚀📞

✨ **Fastest channels:**
💬 **WhatsApp:** [Chat on WhatsApp](https://wa.me/918128551051) (+91 918128551051)
📧 **Email:** [${RITGB_KNOWLEDGE.contact.email}](mailto:${RITGB_KNOWLEDGE.contact.email})
📝 **Quick Form:** Fill out our 1-min form on [Contact Page](/contact)

We usually respond in under 2 hours during work hours. No waiting for days! 💅

👉 **[Contact RITGB Team](/contact)**! 🤝`;
  }

  // Default catch-all response
  return `Let's cut through the marketing noise: your brand deserves main character energy. 💅☕

**RITGB** (*${RITGB_KNOWLEDGE.fullName}*) provides full-scale digital growth:
- 🎨 [Branding & UI/UX Design](/expertise)
- ⚡ [Next.js Websites & Mobile Apps](/software)
- 🤖 [AI Automation & Custom Software](/software)
- 📈 [High-ROAS Meta & Google Ads](/expertise)
- 🔍 [Dominant Local & National SEO](/expertise)

What challenge is holding back your growth right now? 

👉 **[Get a Free Growth Audit](/contact)** or email [${RITGB_KNOWLEDGE.contact.email}](mailto:${RITGB_KNOWLEDGE.contact.email})! 🚀`;
}
