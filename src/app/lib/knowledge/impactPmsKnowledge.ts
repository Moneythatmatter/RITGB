/**
 * Comprehensive Knowledge Base for IMPACT PMS
 * Grounded in the actual website content, SaaS features, modules, integrations, and demo workflows.
 */

export interface ModuleInfo {
  id: string;
  badge: string;
  name: string;
  headline: string;
  description: string;
  keyCapabilities: string[];
}

export interface BusinessTypeInfo {
  id: string;
  title: string;
  description: string;
}

export interface IntegrationCategory {
  category: string;
  items: string[];
  description: string;
}

export interface BenefitInfo {
  title: string;
  description: string;
}

export const IMPACT_PMS_INFO = {
  name: 'Impact PMS',
  fullName: 'IMPACT Property Management System',
  tagline: 'One Powerful Hotel Management System — Connect Every Department, Simplify Operations, Deliver Exceptional Guest Experiences',
  company: {
    name: 'Trinity Global Business / Ray Impact',
    email: 'info@rayimpact.net',
    websiteUrl: 'https://impactpms.com',
    linkedIn: 'https://www.linkedin.com/company/trinityglobalbusiness/',
    instagram: 'https://www.instagram.com/ritgb.io/',
    facebook: 'https://www.facebook.com/share/1EMh3vxFjp/',
  },
  overview: {
    description:
      'Impact PMS is an all-in-one, intelligent Hotel Property Management System available in both Cloud and On-Premise deployments. It unites front desk operations, reservations, channel management, housekeeping, POS/F&B, inventory, human resources, accounting, maintenance, and revenue analytics into a single connected platform.',
    deployments: ['Cloud-based SaaS', 'Hybrid / On-Premise Deployment'],
    targetAudience: [
      'Independent Hotels',
      'Boutique Hotels',
      'Business & Corporate Hotels',
      'Resorts & Vacation Properties',
      'Luxury Hotels & Heritage Properties',
      'Hotel Groups & Multi-Property Chains',
    ],
  },
  coreModules: [
    {
      id: '01',
      badge: 'FRONT OFFICE & RESERVATIONS',
      name: 'Front Office & Reservations',
      headline: 'Make Every Guest Journey Seamless, From Reservation to Check-Out.',
      description:
        'Manage room availability, reservations, room allocations, guest profiles, check-ins, check-outs, guest folios, split billing, group bookings, and automated night audits from a single intuitive grid interface.',
      keyCapabilities: [
        'Live Room Grid & Interactive Tape Chart',
        'Quick Check-In & Express Check-Out',
        'Guest Profile & History Management',
        'Folio Management & Split Invoicing',
        'Group & Corporate Booking Management',
        'Automated Night Audit & Day-Close',
        'Rate Management & Meal Plan Configuration',
        'Guest ID Scan & Digital Registration Card',
      ],
    },
    {
      id: '02',
      badge: 'FOOD & BEVERAGES / POS',
      name: 'Food & Beverages & Point of Sale (POS)',
      headline: 'Serve Better. Bill Faster. Manage Every Outlet Efficiently.',
      description:
        'Connect restaurants, cafés, bars, room service, banquets, and spa outlets with core hotel operations. Manage orders, Kitchen Order Tickets (KOT), tables, digital menus, and post charges directly to guest room folios with instant settlement.',
      keyCapabilities: [
        'Multi-Outlet POS Operations (Restaurants, Bars, Room Service, Spa)',
        'Table Management & Floor Layout View',
        'Kitchen Order Tickets (KOT) & Kitchen Display System (KDS)',
        'Instant Room Posting & Charge Transfer to Guest Folio',
        'Menu Engineering, Pricing & Recipe Management',
        'Split Bills, Discounts & Multi-Payment Settlements',
        'Real-time Outlet Sales & Shift Reporting',
      ],
    },
    {
      id: '03',
      badge: 'HOUSEKEEPING',
      name: 'Housekeeping & Room Operations',
      headline: 'Clean Rooms Faster. Coordinate Teams Better. Keep Every Room Guest-Ready.',
      description:
        'Provides housekeeping staff and supervisors with real-time room status updates (Dirty, Clean, Inspected, Out of Order), automated task assignments, cleaning checklists, linen tracking, and instant synchronization with Front Desk to eliminate guest check-in waiting times.',
      keyCapabilities: [
        'Real-Time Live Room Status (Dirty / Clean / Inspected / OOO)',
        'Automated Room Cleaning Task Assignment by Floor/Block',
        'Housekeeper Mobile Updates & Supervisor Inspection Checklist',
        'Linen & Room Amenity Consumption Tracking',
        'Lost & Found Management',
        'Instant Notification of Ready Rooms to Front Desk',
        'Maintenance Ticket Creation from Housekeeping',
      ],
    },
    {
      id: '04',
      badge: 'PURCHASE & STORES',
      name: 'Purchase & Stores (Procurement & Inventory)',
      headline: "Know What's in Stock, What's Moving, and What Needs Reordering.",
      description:
        'Complete procurement and stock management across all hotel departments. Track purchase requisitions, purchase orders, vendor rates, goods received notes (GRN), inter-departmental transfers, batch expiry, and live stock consumption to minimize wastage.',
      keyCapabilities: [
        'Purchase Requisition & Multi-Level Approval Workflow',
        'Purchase Order (PO) Generation & Vendor Management',
        'Goods Receipt Note (GRN) & Quality Check Verification',
        'Inter-Departmental Material Transfers (Main Store to Outlets)',
        'Live Stock Valuation & Minimum Reorder Level Alerts',
        'Batch & Expiry Date Tracking for Perishables',
        'Consumption Analysis & Wastage Reduction Reports',
      ],
    },
    {
      id: '05',
      badge: 'HUMAN RESOURCES (HR) & PAYROLL',
      name: 'Human Resources & Workforce Management',
      headline: 'Manage Your People With Greater Clarity and Control.',
      description:
        'Organizes employee records, shifts, biometrics/attendance, leave workflows, department staffing, and payroll calculation within the hotel management ecosystem.',
      keyCapabilities: [
        'Centralized Employee Profiles & Document Management',
        'Biometric / Shift Attendance Integration',
        'Roster Scheduling & Department Shift Allocation',
        'Leave Management & Approval Workflows',
        'Salary Structure, Deductions & Payroll Generation',
        'Staff Performance & HR Analytics',
      ],
    },
    {
      id: '06',
      badge: 'ACCOUNTS & FINANCIALS',
      name: 'Hotel Accounting & Financial Control',
      headline: 'Turn Hotel Transactions Into Clear Financial Visibility.',
      description:
        'Comprehensive financial accounting integrated with front desk and POS revenues. Includes General Ledgers, Accounts Receivable (City Ledger / Corporate Billing), Accounts Payable, multi-tier GST/VAT taxation, bank reconciliation, and complete audit trails.',
      keyCapabilities: [
        'Automated Posting from Front Desk, POS & Stores',
        'Accounts Receivable & Corporate City Ledger Billing',
        'Accounts Payable & Vendor Payment Scheduling',
        'General Ledger, Trial Balance, P&L, Balance Sheet',
        'Compliant GST / VAT / Service Tax Calculations & Invoicing',
        'Cash Register & Bank Account Reconciliation',
        'Comprehensive Audit Trails & User Action Logs',
      ],
    },
    {
      id: '07',
      badge: 'SALES & MARKETING',
      name: 'Sales, Marketing & Corporate CRM',
      headline: 'Turn Relationships Into Revenue Opportunities.',
      description:
        'Manage travel agents, corporate accounts, negotiated contracted rates, banquet/event inquiries, sales pipeline, follow-ups, and customer relationship management to boost direct and contracted hotel bookings.',
      keyCapabilities: [
        'Corporate Company & Travel Agent Contract Management',
        'Negotiated Tariff & Special Corporate Rate Plans',
        'Lead Tracking, Inquiry Pipeline & Follow-up Reminders',
        'Banquet & Event Space Booking Management',
        'Business Source Performance & Commission Tracking',
        'Guest CRM & Personalized Loyalty Preferences',
      ],
    },
    {
      id: '08',
      badge: 'MAINTENANCE & ASSETS',
      name: 'Maintenance & Engineering Asset Management',
      headline: 'Identify Issues. Assign Tasks. Keep Your Property Running Smoothly.',
      description:
        'Log maintenance requests instantly from front desk or housekeeping, assign work orders to engineers, track preventive maintenance schedules for equipment (ACs, generators, elevators), and minimize room downtime.',
      keyCapabilities: [
        'Fast Work Order & Incident Logging',
        'Automated Engineer Task Assignment & Status Tracking',
        'Preventive Maintenance Schedules for Hotel Assets & Machinery',
        'Asset Lifecycle, Warranty & Service History Tracking',
        'Room Out-of-Order (OOO) and Out-of-Service (OOS) Coordination',
        'Maintenance Cost & Vendor Service Reporting',
      ],
    },
  ] as ModuleInfo[],
  channelManager: {
    name: '2-Way Real-Time Channel Manager',
    description:
      'Seamless two-way integration with global and regional Online Travel Agencies (OTAs). Automatically synchronizes room rates, availability, stop-sells, and minimum stay restrictions in real time to eliminate overbookings and rate disparities.',
    supportedOTAs: [
      'Booking.com',
      'Agoda',
      'MakeMyTrip (MMT)',
      'Goibibo',
      'Expedia Group',
      'Airbnb',
      'Trip.com / Ctrip',
      'Hostelworld',
      'Google Hotels Free Links & Hotel Ads',
    ],
    keyFeatures: [
      'Instant 2-way room rate and inventory updates',
      'Centralized rate parity and rule-based markup/markdown',
      'Auto-cancellation and modification handling',
      'Stop-sell and minimum length of stay (MLOS) management',
      'Zero double-booking guarantee',
    ],
  },
  directBookingEngine: {
    name: 'Impact ABS (Advanced Booking Suite) & Direct Booking Engine',
    pageUrl: '/abs',
    description:
      'A high-converting, mobile-first, commission-free direct booking engine widget designed to be embedded on your hotel website. Empowers hotels to drive direct guest bookings, upsell room upgrades and packages, and accept instant global and domestic payments.',
    keyFeatures: [
      '0% Commission on direct website bookings',
      'Mobile-first responsive booking journey with real-time room availability',
      'Multi-currency and multi-language support',
      'Add-on upselling (airport transfers, breakfast, romantic packages, spa)',
      'Instant payment gateway integration with dynamic confirmation vouchers',
      'Promo codes, corporate discount codes & seasonal campaign rates',
      'Direct synchronization into Impact PMS Front Office & Room Tape Chart',
    ],
  },
  reportsAndAnalytics: {
    name: 'Hotel Reports, BI & Executive Analytics',
    description:
      'Gain actionable real-time insights across every property department with 100+ standard and customizable hospitality reports, executive dashboards, and forecasting tools.',
    metrics: [
      'Occupancy Rate (%)',
      'Average Daily Rate (ADR)',
      'Revenue Per Available Room (RevPAR)',
      'Total Revenue Per Available Room (TRevPAR)',
      'Departmental Revenue Split (Rooms, F&B, Banquets, Spa)',
      'Direct vs OTA Booking Channel Share',
      'Cashier & Shift Settlement Reports',
      'Manager Flash Report & Daily Financial Day-Close Summary',
    ],
  },
  integrations: [
    {
      category: 'Online Travel Agencies (OTAs)',
      description: 'Two-way synchronized channel connectivity for automatic inventory & rate distribution.',
      items: ['Booking.com', 'Agoda', 'MakeMyTrip', 'Goibibo', 'Expedia', 'Airbnb', 'Google Hotels', 'Trip.com'],
    },
    {
      category: 'Payment Gateways & POS Hardware',
      description: 'Fast, secure omnichannel payment processing for front desk, web bookings, and restaurant POS.',
      items: ['Razorpay', 'Stripe', 'Paytm', 'PhonePe UPI', 'Major Credit/Debit Cards', 'POS Thermal Printers', 'Barcode Scanners'],
    },
    {
      category: 'Door Locks & Keycards',
      description: 'Automated RFID / Magnetic keycard generation upon guest check-in.',
      items: ['Salto', 'VingCard / ASSA ABLOY', 'Adel', 'Orbita', 'Generic RFID/NFC Encoders'],
    },
    {
      category: 'Accounting & ERP Systems',
      description: 'Direct ledger and journal synchronization for seamless business financial auditing.',
      items: ['Tally Prime / Tally.ERP 9', 'QuickBooks', 'SAP / Custom CSV & API Exports'],
    },
    {
      category: 'Hardware & Peripherals',
      description: 'Compatible with standard hospitality hardware infrastructure.',
      items: ['Thermal Receipt Printers (Epson, TVS)', 'Kitchen Display Systems (KDS)', 'Passport & Aadhar ID Card Scanners', 'Biometric Fingerprint/Face Attendance Machines'],
    },
  ] as IntegrationCategory[],
  businessTypes: [
    {
      id: '01',
      title: 'Independent Hotels',
      description: 'Gain better control over daily operations without unnecessary complexity.',
    },
    {
      id: '02',
      title: 'Boutique Hotels',
      description: 'Deliver personalised guest experiences while keeping your operations efficient.',
    },
    {
      id: '03',
      title: 'Business Hotels',
      description: 'Handle high-volume reservations, corporate guests, billing, and business accounts smoothly.',
    },
    {
      id: '04',
      title: 'Resorts',
      description: 'Connect rooms, restaurants, housekeeping, inventory, maintenance, and other operational areas.',
    },
    {
      id: '05',
      title: 'Luxury Hotels',
      description: 'Support high service standards with better coordination and guest information.',
    },
    {
      id: '06',
      title: 'Hotel Groups & Chains',
      description: 'Create greater operational consistency and centralised visibility across multiple properties.',
    },
  ] as BusinessTypeInfo[],
  benefits: [
    {
      title: 'One Connected Platform',
      description: 'Eliminates data silos by bringing Front Office, F&B, Housekeeping, Accounts, and Stores into a single shared database.',
    },
    {
      title: 'Eliminate Overbookings',
      description: 'Real-time 2-way OTA synchronization and direct booking engine ensure inventory parity across all booking channels.',
    },
    {
      title: 'Faster Guest Check-In & Billing',
      description: 'Streamlined registration card, ID scan, automated folio generation, and quick split-bill settlements reduce lobby queues.',
    },
    {
      title: 'Maximize RevPAR & Direct Bookings',
      description: 'Commission-free booking engine with dynamic pricing rules and upsell packages drives higher profit margins.',
    },
    {
      title: 'Tighter Cost & Inventory Control',
      description: 'Real-time store procurement tracking, recipe costing, and minimum stock alerts prevent inventory shrinkage and food waste.',
    },
    {
      title: 'Data-Driven Executive Decisions',
      description: 'Real-time flash reports, ADR/RevPAR analytics, and automated night audit summaries give managers total operational control.',
    },
  ] as BenefitInfo[],
  onboardingAndSupport: {
    dataMigration: 'Seamless migration of past guest history, room categories, corporate accounts, and inventory records from existing legacy software or spreadsheets.',
    staffTraining: 'Comprehensive role-based live training sessions for front desk, housekeeping, F&B, and management teams.',
    supportAvailability: '24/7 dedicated technical support via live chat, phone, and ticketing system.',
    implementationTime: 'Rapid deployment — go live in as little as 3 to 7 business days depending on property size.',
    sla: '99.9% uptime SLA with enterprise-grade data security and automated cloud backups.',
  },
  demoAndPricing: {
    demoTitle: 'Book a Free Personalized Live Demo',
    demoUrl: '#request-demo',
    demoNote: 'Experience how Impact PMS simplifies hotel operations with a tailored walkthrough of features for your specific property.',
    pricingModel:
      'Transparent, flexible subscription pricing tailored to property room count, outlet requirements, and selected modules. Both modular per-room/per-month SaaS plans and customized enterprise multi-property packages are available.',
    freeTrial: 'Free guided live product demonstration and customized trial consultation are provided upon request.',
  },
  contact: {
    email: 'info@rayimpact.net',
    demoAnchor: '#request-demo',
    modulesAnchor: '#modules',
    benefitsAnchor: '#benefits',
    analyticsAnchor: '#analytics',
    absPage: '/abs',
    socialLinkedIn: 'https://www.linkedin.com/company/trinityglobalbusiness/',
    socialInstagram: 'https://www.instagram.com/ritgb.io/',
    socialFacebook: 'https://www.facebook.com/share/1EMh3vxFjp/',
  },
  negativeConstraints: [
    'Custom Unlisted Integrations: For proprietary or unlisted third-party ERP/hardware not listed in the knowledge base, invite the customer to book a demo or email our technical integration team at info@rayimpact.net.',
    'Exact Custom Pricing Quotes: Pricing varies depending on room count, number of POS outlets, and deployment tier. Always invite the user to request a customized quote via [Book Free Demo](#request-demo) or email info@rayimpact.net.',
    'Live Demo Scheduling: Users can immediately request a live walkthrough using the [Book Free Demo](#request-demo) button or form on the website.',
  ],
};
