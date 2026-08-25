import { IMPACT_PMS_INFO } from './impactPmsKnowledge';

/**
 * Intelligent deterministic fallback matcher grounded in Impact PMS product knowledge.
 * Ultra-concise, Gen Z energy, witty internet slang, and punchy emojis.
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
    return `I’m **Ritzy**! 💁‍♀️✨ Your official Impact PMS AI specialist and hotel ops bestie.

I'm here to spill the tea ☕ on our 8 core modules, 2-way OTA sync, direct booking engine, and custom pricing—zero boomer jargon, no cap.

👉 What are we solving at your property today? Or **[Book a Free Demo](#request-demo)**! 🚀`;
  }

  // 0.1 Greetings
  if (/^(hi|hello|hey|greetings|good\s*(morning|afternoon|evening)|namaste|yo|sup)\b/i.test(q)) {
    return `I’m **Ritzy**—unfiltered tea time: ☕👀

Most legacy hotel PMS software is literally digital slop. We built Impact PMS so running your property actually slays.

✨ **Quick Menu:**
- 🏨 [Core Modules](#modules)
- 🔄 **2-Way OTA Sync** (Zero overbookings 🚫)
- 🌐 [Impact ABS Direct Engine](/abs) (0% commission 💅)
- 📊 [Analytics & RevPAR](#analytics) 📈
- 🎯 [Book Free Live Demo](#request-demo) 🚀

What part of your hotel operations are we fixing today? 🤝`;
  }

  // 1. Demo / Free Trial / Schedule / Book
  if (
    q.includes('demo') ||
    q.includes('trial') ||
    q.includes('schedule') ||
    q.includes('walkthrough') ||
    q.includes('presentation') ||
    q.includes('test')
  ) {
    return `No 50-slide boomer PowerPoints here. Period. 😭💀

Hop on a live demo and see the real operational glow-up:
✨ **Front Desk Grid:** Real-time drag-and-drop allocations without lag.
🚀 **2-Way OTA Sync:** Instant rate & room distribution.
🍽️ **F&B POS:** 1-tap room folio posting & live KOTs.
🧹 **Housekeeping:** Live room status updates (dirty ➡️ pristine).
🌙 **Night Audit:** Day-close done in clicks, not hours 💅.

👉 **[Book Your Free Live Demo](#request-demo)** or email [${IMPACT_PMS_INFO.contact.email}](mailto:${IMPACT_PMS_INFO.contact.email})! 🫡`;
  }

  // 2. Integrations / Payment Gateways / Tally / Keycards / Hardware
  if (
    q.includes('integration') ||
    q.includes('integrate') ||
    q.includes('payment gateway') ||
    q.includes('gateway') ||
    q.includes('tally') ||
    q.includes('quickbooks') ||
    q.includes('keycard') ||
    q.includes('door lock') ||
    q.includes('lock') ||
    q.includes('hardware') ||
    q.includes('printer')
  ) {
    return `A PMS that doesn't talk to your tech stack is highkey useless. 💀

We connected the whole ecosystem (no tech bloat):
💳 **Gateways:** Razorpay, Stripe, Paytm, UPI & cards.
📊 **Accounting:** Auto-sync with **Tally Prime / Tally.ERP 9** & QuickBooks.
🔑 **Locks & RFID:** Salto, VingCard/ASSA ABLOY, Adel, Orbita.
🖨️ **Hardware:** Thermal kitchen printers, barcode scanners, KDS.
🌐 **OTAs:** Direct 2-way sync with Booking.com, Agoda, MMT, Expedia, Airbnb.

👉 Custom tool? **[Book a Demo](#request-demo)** or email [${IMPACT_PMS_INFO.contact.email}](mailto:${IMPACT_PMS_INFO.contact.email})! ⚡`;
  }

  // 3. Channel Manager / OTA / Sync / Overbooking
  if (
    q.includes('channel manager') ||
    q.includes('channel') ||
    q.includes('ota') ||
    q.includes('booking.com') ||
    q.includes('agoda') ||
    q.includes('makemytrip') ||
    q.includes('expedia') ||
    q.includes('airbnb') ||
    q.includes('sync') ||
    q.includes('overbooking') ||
    q.includes('rate parity')
  ) {
    return `Double-bookings are literally unhinged behavior. 😭💀

Stop juggling 5 different OTA extranets like it's 2004:
🚀 **Instant 2-Way Sync:** Real-time updates across ${IMPACT_PMS_INFO.channelManager.supportedOTAs.join(', ')}.
🚫 **Zero Overbookings:** Booked anywhere = blocked everywhere instantly.
📈 **Dynamic Markup:** Update rates centrally without breaking a sweat.
🛑 **Stop-Sell Rules:** Guard peak weekend rates effortlessly.

Systems save your sanity. Spreadsheets just give you brainrot. 💅

👉 **[See Channel Manager in Action](#request-demo)**.`;
  }

  // 4. Direct Booking Engine / Impact ABS / Website Widget
  if (
    q.includes('booking engine') ||
    q.includes('direct booking') ||
    q.includes('abs') ||
    q.includes('commission') ||
    q.includes('widget') ||
    q.includes('website booking')
  ) {
    return `Giving 20% of every booking to OTAs? Massive side eye. 😒💸

**Impact ABS** turns your website into a direct revenue engine:
💅 **0% Commission:** Keep 100% of your revenue. No cap.
📱 **Mobile-First Flow:** High-converting, frictionless booking journey.
✨ **Instant Upsells:** Packages, airport transfers & meal add-ons.
💳 **Direct Settlements:** Razorpay, Stripe, UPI built right in.

Stop letting OTAs eat your profit margins for breakfast. 🥞

👉 **[Explore Impact ABS](/abs)** | **[Schedule a Demo](#request-demo)**.`;
  }

  // 5. Pricing / Cost / Subscription / Plans
  if (
    q.includes('price') ||
    q.includes('pricing') ||
    q.includes('cost') ||
    q.includes('subscription') ||
    q.includes('quote') ||
    q.includes('plan') ||
    q.includes('charge') ||
    q.includes('fee')
  ) {
    return `Paying for bloated enterprise features you never touch is not the vibe. 🛑💀

Impact PMS pricing is simple and transparent:
1⃣ **Modular:** Pay only for what you use (Front Desk, POS, Channel Sync, etc.).
2⃣ **Flexible:** Cloud SaaS or on-premise installation.
3⃣ **Scale-Based:** Sized to your room count and POS outlets.

No gatekeeping. No scammy contracts. 🤝

👉 **[Get Your Custom Quote](#request-demo)** or email [${IMPACT_PMS_INFO.contact.email}](mailto:${IMPACT_PMS_INFO.contact.email})!`;
  }

  // 6. Food & Beverage / POS / Restaurant / Banquet
  if (
    q.includes('pos') ||
    q.includes('restaurant') ||
    q.includes('f&b') ||
    q.includes('food') ||
    q.includes('beverage') ||
    q.includes('kot') ||
    q.includes('table') ||
    q.includes('bar') ||
    q.includes('banquet') ||
    q.includes('room service')
  ) {
    return `When restaurant orders don't sync to the front desk, the chaos is so real. 🍳💀

Our **F&B POS Module** ate and left zero crumbs:
🔥 **Multi-Outlet Touch POS:** Restaurant, room service, bar, and banquets.
⚡ **Live KOTs & KDS:** Kitchen tickets routed instantly.
💳 **1-Tap Folio Posting:** Charge room service straight to guest bills.
📦 **Auto Inventory:** Automatic recipe costing & stock deductions.

Zero missed meal charges. Pure bliss. ✨

👉 **[Explore Modules](#modules)** | **[Schedule a Demo](#request-demo)**.`;
  }

  // 7. Housekeeping & Maintenance
  if (
    q.includes('housekeeping') ||
    q.includes('cleaning') ||
    q.includes('maintenance') ||
    q.includes('clean') ||
    q.includes('linen') ||
    q.includes('inspection') ||
    q.includes('repair') ||
    q.includes('asset')
  ) {
    return `Guests checking into an uncleaned room is an instant 1-star review panic. 😭🛑

Impact PMS gives housekeeping main character energy:
🧹 **Live Room Status:** Instant dirty ➡️ cleaning ➡️ inspected ➡️ ready sync.
📱 **Mobile Checklists:** Auto-task allocation by floor with supervisor approvals.
🔧 **Preventive Maintenance:** Schedule AC & generator upkeep before peak season.

Maintenance saves your reputation. Visibility saves your staff. 💅

👉 **[Explore Modules](#modules)** | **[Request a Demo](#request-demo)**.`;
  }

  // 8. Front Desk / Reservations / Night Audit / Check-in
  if (
    q.includes('front desk') ||
    q.includes('front office') ||
    q.includes('reservation') ||
    q.includes('check-in') ||
    q.includes('check in') ||
    q.includes('check-out') ||
    q.includes('check out') ||
    q.includes('night audit') ||
    q.includes('folio') ||
    q.includes('tape chart')
  ) {
    return `Front desk software coded in 1995? We need to talk. 💀👀

Impact PMS Front Office is modern and lightning fast:
✨ **Visual Tape Chart:** Slick drag-and-drop room allocations.
⚡ **Express Check-In:** Digital guest registration & fast ID capture.
💳 **Smart Folios:** Multi-currency, company split billing & GST invoices.
🌙 **1-Click Night Audit:** Automated day-close with zero math headaches.

Your receptionists deserve software that actually slays. 🏨

👉 **[Check Out Front Desk Features](#modules)** | **[Book a Demo](#request-demo)**.`;
  }

  // 9. Accounts / Financials / Purchase / Stores / HR
  if (
    q.includes('account') ||
    q.includes('financial') ||
    q.includes('purchase') ||
    q.includes('store') ||
    q.includes('inventory') ||
    q.includes('procurement') ||
    q.includes('hr') ||
    q.includes('payroll') ||
    q.includes('attendance') ||
    q.includes('gst') ||
    q.includes('tax')
  ) {
    return `Hotels don't just run on vibes; they run on clean ledgers. 💼📊

Impact PMS connects your entire back office:
1⃣ **Accounts & Tax:** General Ledger, City Ledger, and GST-ready invoices.
2⃣ **Purchase & Inventory:** PO generation, GRN matching, and stock expiry alerts.
3⃣ **HR & Rosters:** Shift scheduling, attendance logs, and auto-payroll.

No spreadsheets lost in the void. Just crystal-clear numbers. 📈

👉 **[Explore All Modules](#modules)** | **[Schedule a Demo](#request-demo)**.`;
  }

  // 10. Reports & Analytics / RevPAR / ADR / Occupancy
  if (
    q.includes('report') ||
    q.includes('analytics') ||
    q.includes('revpar') ||
    q.includes('adr') ||
    q.includes('occupancy') ||
    q.includes('revenue') ||
    q.includes('dashboard')
  ) {
    return `You can’t fix what you can’t track. Period. 📊🧠

Get pure operational clarity with 100+ standard reports:
📈 **Live KPIs:** Real-time RevPAR, ADR & Occupancy %.
💰 **Department Breakdown:** Revenue across rooms, F&B, banquets & spa.
🔍 **Channel Yield:** Direct website vs OTA commission profit analysis.
⚡ **Manager Flash Snapshot:** Delivered daily post-night audit.

Data without clarity is noise. We give you signal. 📡

👉 **[Explore Analytics](#analytics)** | **[Book a Free Demo](#request-demo)**.`;
  }

  // 11. Property Types / Boutique / Resort / Chains
  if (
    q.includes('boutique') ||
    q.includes('resort') ||
    q.includes('chain') ||
    q.includes('independent') ||
    q.includes('business hotel') ||
    q.includes('luxury') ||
    q.includes('hotel type')
  ) {
    return `Whether it’s a 15-room boutique getaway or a multi-property chain: 🏨✨

Impact PMS fits your setup:
- **Boutique Stays:** High touch, zero friction.
- **Business Hotels:** Fast check-ins & corporate billing.
- **Resorts:** Multi-outlet coordination (dining, spa, activities).
- **Chains & Groups:** Centralized management & standardized SOPs.

Every property has its own vibe. Impact PMS matches yours. 🤝

👉 **[See Impact PMS Configured For Your Hotel](#request-demo)**.`;
  }

  // 12. Support / Onboarding / Training / Contact
  if (
    q.includes('support') ||
    q.includes('contact') ||
    q.includes('phone') ||
    q.includes('email') ||
    q.includes('help') ||
    q.includes('training') ||
    q.includes('migration') ||
    q.includes('onboarding')
  ) {
    return `Switching your PMS shouldn't feel like open-heart surgery: 🧈✨

Our 3-step transition promise:
✅ **Full Data Migration:** Historical guest data & rate plans safely imported.
✅ **Hands-On Training:** Practical role-based staff onboarding.
✅ **24/7 Support:** Real humans who know hotel operations on speed dial.

👉 Questions? Email [${IMPACT_PMS_INFO.contact.email}](mailto:${IMPACT_PMS_INFO.contact.email}) or **[Book a Free Demo](#request-demo)**! 🫡`;
  }

  // 13. Modules General Query
  if (
    q.includes('module') ||
    q.includes('feature') ||
    q.includes('capability') ||
    q.includes('what can you do') ||
    q.includes('all features')
  ) {
    return `8 connected modules. Zero operational silos. 🚀

1⃣ **Front Desk:** Visual tape chart & instant check-in. 🏨
2⃣ **F&B POS:** Touch billing, KOTs & room posting. 🍽️
3⃣ **Housekeeping:** Live room status & checklists. 🧹
4⃣ **Stores & Inventory:** POs, GRN & cost control. 📦
5⃣ **HR & Payroll:** Rosters, attendance & salaries. 👥
6⃣ **Accounts:** City ledger & GST invoices. 💳
7⃣ **Sales & Banquets:** Corporate rates & BEOs. 🤝
8⃣ **Maintenance:** Preventive asset upkeep. 🔧

Plus **2-Way OTA Channel Manager** and **Impact ABS Direct Booking Engine**! 💅

👉 **[Explore Core Modules](#modules)** | **[Book Free Demo](#request-demo)**.`;
  }

  // Default helpful response
  return `Let’s cut through the noise: hotel software shouldn't feel like 2004. 💀☕

Impact PMS connects your front desk, dining, OTA channels, housekeeping, and financials into one clean system that actually slays.

✨ **Where to start:**
- 🏨 [Explore Core Modules](#modules)
- 🔄 **2-Way Real-Time OTA Channel Sync**
- 🌐 [Impact ABS Direct Booking Engine (/abs)](/abs)
- 📊 [Reports & Executive Analytics](#analytics)
- 🎯 [Book a Free Live Demo](#request-demo)

Drop your questions below or hit up our team at [${IMPACT_PMS_INFO.contact.email}](mailto:${IMPACT_PMS_INFO.contact.email})! ✨`;
}


