import { RITGB_KNOWLEDGE } from './ritgbKnowledge';

/**
 * Intelligent deterministic fallback matcher grounded in RITGB Agency knowledge.
 * Ultra-concise, Gen Z digital marketing insider energy, witty internet slang, and punchy emojis.
 */
export function getGroundedFallbackResponse(userMessage: string): string {
  const q = userMessage.toLowerCase().trim();

  // 0. Identity & Name
  if (
    q.includes('your name') ||
    q.includes('who are you') ||
    q.includes('who r u') ||
    q.includes('what is your name') ||
    q.includes('whats your name') ||
    q.includes('what are you') ||
    q === 'ritzy' ||
    q.includes('ritzy')
  ) {
    return `I’m **Ritzy**! 💁‍♀️✨ Official AI Growth Specialist and resident hype mascot for **RITGB**.

I’m here to spill the marketing tea ☕ and help you scale with zero corporate fluff:
✨ **Branding:** Visual identities that eat and leave no crumbs 💅
🚀 **Web Tech:** Next.js sites that load in milliseconds
📈 **Growth:** High-ROAS Meta/Google Ads & local SEO domination

Ready to enter your brand's growth era? 👉 **[Get a Free Audit](/contact)**! 🤝`;
  }

  // 0.1 Greetings
  if (/^(hi|hello|hey|greetings|good\s*(morning|afternoon|evening)|namaste|yo|sup)\b/i.test(q)) {
    return `I’m **Ritzy**—dropping some unfiltered growth tea: ☕👀

Most agency websites are pure marketing buzzwords. We make your business impossible to ignore, no cap.

✨ **Quick Menu:**
- 🎨 [Branding & Identity](/expertise) 💅
- ⚡ [High-Speed Next.js Web Dev](/software) 🚀
- 📈 [Performance Ads & SEO](/expertise) 🔥
- 🏆 [Past Client Wins & Work](/work) 👀
- 🎯 [Claim Free Growth Audit](/contact) 🤝

What part of your digital presence are we leveling up today? 🚀`;
  }

  // 1. Free Audit / Consultation / Strategy Call / Demo / Contact Form
  if (
    q.includes('audit') ||
    q.includes('consultation') ||
    q.includes('free') ||
    q.includes('call') ||
    q.includes('meeting') ||
    q.includes('book') ||
    q.includes('schedule')
  ) {
    return `No 40-page boring audit PDFs you’ll never read. Real talk only: ☕💀

Claim our **Free Growth Audit** and we’ll review:
✨ **Conversion Leaks:** Where your website is losing paying customers
🎯 **Ad Fatigues:** Why your Meta/Google CPAs are creeping up
🔍 **SEO Blindspots:** Why competitors in Bhubaneswar outrank you

Zero gatekeeping. 100% actionable game plan. 💅

👉 **[Claim Your Free Audit Here](/contact)** or ping us at [${RITGB_KNOWLEDGE.contact.email}](mailto:${RITGB_KNOWLEDGE.contact.email})! 🫡`;
  }

  // 2. Branding & Identity / Logo / Design / Packaging
  if (
    q.includes('branding') ||
    q.includes('brand') ||
    q.includes('logo') ||
    q.includes('identity') ||
    q.includes('design') ||
    q.includes('packaging') ||
    q.includes('visual')
  ) {
    return `Generic Canva templates are giving NPC energy. We build main characters. 💅✨

Our **Branding & Visual Systems** package includes:
🎨 **Logo Architecture:** Distinctive typography & symbol systems
📖 **Brand Bible:** Tone of voice, colors & styling rules
📦 **Packaging & Collateral:** Premium print & digital assets
🔥 **Storytelling:** Messaging that lives rent-free in customer minds

Make your brand unforgettable. Period. 🤝

👉 **[Explore Branding Services](/expertise)** or **[Get a Free Audit](/contact)**! 🚀`;
  }

  // 3. Web Design & Development / Next.js / Tech / UI UX / Speed
  if (
    q.includes('web') ||
    q.includes('website') ||
    q.includes('dev') ||
    q.includes('development') ||
    q.includes('tech') ||
    q.includes('next.js') ||
    q.includes('react') ||
    q.includes('ui/ux') ||
    q.includes('ux') ||
    q.includes('app') ||
    q.includes('wordpress') ||
    q.includes('speed')
  ) {
    return `If your website takes 5 seconds to load, your conversion rate is cooked. 💀⚡

We build high-converting web experiences on Next.js & React:
🚀 **Sub-Second Speed:** 95+ Google PageSpeed scores, zero bloat
📱 **Mobile-First UX:** Frictionless flows engineered to convert
💎 **Aesthetic Motion:** Interactive micro-animations that slay
🔒 **Unbreakable Tech:** Clean TypeScript code & modern architecture

Your website is your best salesperson. Make it count. 💅

👉 **[Check Out Tech & Web](/software)** | **[View Our Work](/work)**! 🤝`;
  }

  // 4. SEO / Google Ranking / Local SEO / Bhubaneswar
  if (
    q.includes('seo') ||
    q.includes('rank') ||
    q.includes('ranking') ||
    q.includes('google search') ||
    q.includes('organic') ||
    q.includes('traffic') ||
    q.includes('keyword') ||
    q.includes('bhubaneswar') ||
    q.includes('local seo')
  ) {
    return `Major side eye to agencies selling low-intent spam backlinks. 😒📉

We drive high-intent organic traffic that actually buys:
📍 **Local SEO Domination:** Own Google Map Packs in Bhubaneswar & Odisha
⚡ **Technical Audits:** Clean schema markup, fast crawlability & Core Web Vitals
🔍 **Search Intent Strategy:** Target high-converting commercial keywords
📈 **Content Clusters:** Authority-building articles that rank on page 1

Stop paying for ad clicks when you can own the search results organically. 🧠

👉 **[Rank On Google Today](/contact)** | **[Explore SEO Services](/expertise)**! 🚀`;
  }

  // 5. Performance Marketing / Meta Ads / Google Ads / ROAS / Paid Media
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
🎯 **Meta Ads (FB/IG):** High-converting UGC video hooks & retargeting
🔍 **Google Search & PMax:** Capture ready-to-buy search intent immediately
📊 **Full-Funnel Tracking:** Meta Conversion API & server-side attribution
🧪 **Relentless A/B Testing:** Iterating creatives until ROAS prints 📈

We scaled D2C brands to 4.8x ROAS. We understood the assignment. 💅

👉 **[Scale Your Paid Ads](/contact)** | **[View Case Studies](/work)**! 🔥`;
  }

  // 6. Social Media / Viral Content / Reels / Influencer
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
✨ **Aesthetic Feeds:** Grid curation that gives luxury authority
🗣️ **Community Hype:** DM automation, active engagement & trend jacking
🤝 **Influencer Collabs:** Strategic partnerships that drive direct sales

Enter your viral era without looking cringe. 💅

👉 **[Level Up Your Socials](/expertise)** | **[Get in Touch](/contact)**! 🚀`;
  }

  // 7. Pricing / Cost / Retainer / Budget / Rates
  if (
    q.includes('price') ||
    q.includes('pricing') ||
    q.includes('cost') ||
    q.includes('budget') ||
    q.includes('rate') ||
    q.includes('package') ||
    q.includes('retainer') ||
    q.includes('fee') ||
    q.includes('quote')
  ) {
    return `Zero gatekeeping on pricing—we match your stage of growth: ☕🤝

We structure transparent, deliverable-backed pricing:
⚡ **Project Sprints:** Fixed scope for bespoke branding or Next.js web builds
📈 **Growth Retainers:** Monthly dedicated team for Ads + SEO + Socials
👑 **Enterprise Suite:** End-to-end full agency takeover for rapid scale

Every penny goes straight toward measurable ROI, no fluff. 💅

👉 **[Get a Custom Quote](/contact)** or email [${RITGB_KNOWLEDGE.contact.email}](mailto:${RITGB_KNOWLEDGE.contact.email})! 🫡`;
  }

  // 8. Case Studies / Portfolio / Proof / Past Work / Results
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

  // 9. Location / Bhubaneswar / Odisha / Address / Office
  if (
    q.includes('location') ||
    q.includes('where are you') ||
    q.includes('office') ||
    q.includes('address') ||
    q.includes('bhubaneswar') ||
    q.includes('odisha') ||
    q.includes('chandrasekharpur')
  ) {
    return `Proudly headquartered in the smart city of **Bhubaneswar, Odisha**! 📍✨

🏢 **HQ:** ${RITGB_KNOWLEDGE.location.address}
📞 **Phone:** ${RITGB_KNOWLEDGE.contact.phone.join(' | ')}
📧 **Email:** [${RITGB_KNOWLEDGE.contact.email}](mailto:${RITGB_KNOWLEDGE.contact.email})

Drop by our office for chai & strategy, or jump on a quick discovery call! ☕

👉 **[Find Us On Google Maps](${RITGB_KNOWLEDGE.location.mapLink})** | **[Message Us](/contact)**! 🤝`;
  }

  // 10. Contact / Phone / Email / WhatsApp / Hire Us
  if (
    q.includes('contact') ||
    q.includes('phone') ||
    q.includes('email') ||
    q.includes('whatsapp') ||
    q.includes('hire') ||
    q.includes('talk') ||
    q.includes('reach')
  ) {
    return `Let’s connect and make your brand impossible to ignore: 🚀📞

✨ **Fastest channels:**
💬 **WhatsApp:** [Chat on WhatsApp](https://wa.me/918128551051) (+91 918128551051)
📧 **Email:** [${RITGB_KNOWLEDGE.contact.email}](mailto:${RITGB_KNOWLEDGE.contact.email})
📝 **Quick Form:** Fill out our 1-min form on [Contact Page](/contact)

We usually respond in under 2 hours during work hours. No waiting for weeks! 💅

👉 **[Contact RITGB Team](/contact)**! 🤝`;
  }

  // Default catch-all response
  return `Let's cut through the marketing noise: your brand deserves main character energy. 💅☕

**RITGB** is Bhubaneswar’s premier agency for making businesses impossible to ignore:
- 🎨 [Branding & Visual Identity](/expertise)
- ⚡ [Next.js Websites & Apps](/software)
- 📈 [High-ROAS Meta & Google Ads](/expertise)
- 🔍 [Dominant Local & National SEO](/expertise)

What challenge is holding back your growth right now? 

👉 **[Get a Free Growth Audit](/contact)** or ping us at [${RITGB_KNOWLEDGE.contact.email}](mailto:${RITGB_KNOWLEDGE.contact.email})! 🚀`;
}
