export interface PolicySubsection {
  number?: string;
  title: string;
  intro?: string;
  paragraphs?: string[];
  items?: string[];
  outro?: string;
}

export interface PolicySection {
  number: string;
  title: string;
  intro?: string | string[];
  paragraphs?: string[];
  items?: string[];
  subsections?: PolicySubsection[];
  followUp?: string[];
}

export interface ContactInfo {
  company: string;
  location: string;
  supportPhone: string;
  salesPhone: string;
  website: string;
}

export interface PrivacyPolicyData {
  title: string;
  lastUpdated: string;
  introParagraphs: string[];
  sections: PolicySection[];
  contactInfo: ContactInfo;
  footerNote: {
    agency: string;
    statement: string;
  };
}

export const privacyPolicyData: PrivacyPolicyData = {
  title: "PRIVACY POLICY",
  lastUpdated: "November 2026",
  introParagraphs: [
    "Welcome to RITGB (Ray Impact-Trinity Global Business), a full-service Digital Marketing, Branding and Software Agency based in Bhubaneswar, Odisha, India.",
    "At RITGB, we value your privacy and are committed to handling your personal information responsibly. We recognise the importance of protecting the information entrusted to us by our website visitors, prospective clients, existing clients, business partners and other individuals who interact with our organisation.",
    "This Privacy Policy explains how we collect, use, store, process, disclose and protect personal information when you visit our website (www.ritgb.com), engage with our services or communicate with us through our business channels.",
    "Our privacy practices are guided by applicable data protection and privacy laws, including the Digital Personal Data Protection Act, 2023 (DPDP Act), and other relevant Indian and international legal requirements, as applicable.",
  ],
  sections: [
    {
      number: "1",
      title: "Information We Collect",
      intro:
        "We may collect different categories of personal and business-related information depending on how you interact with RITGB.",
      subsections: [
        {
          number: "1.1",
          title: "Personal and Contact Information",
          intro: "This may include:",
          items: [
            "Full name.",
            "Email address.",
            "Phone number.",
            "Company or organisation name.",
            "Professional designation or job title.",
            "Other contact details voluntarily provided by you.",
          ],
        },
        {
          number: "1.2",
          title: "Business and Service-Related Information",
          intro: "When you enquire about or engage our services, we may collect:",
          items: [
            "Business requirements and project objectives.",
            "Industry and business information.",
            "Marketing goals and target audience details.",
            "Project budgets and preferred currency.",
            "Branding materials, website content and other digital assets.",
            "Information shared during consultations and project discussions.",
          ],
        },
        {
          number: "1.3",
          title: "Technical and Website Usage Information",
          intro:
            "When you visit our website, certain information may be collected automatically, including:",
          items: [
            "IP address.",
            "Browser type and version.",
            "Device and operating system information.",
            "Pages visited and browsing activity.",
            "Referring website or traffic source.",
            "Date, time and duration of website visits.",
            "Website interaction and performance data.",
          ],
          outro:
            "This information may be collected through server logs, cookies, analytics tools and similar technologies.",
        },
        {
          number: "1.4",
          title: "Communication and Recruitment Information",
          paragraphs: [
            "We may collect information shared through emails, telephone calls, WhatsApp, social media messages, business meetings and other communication channels.",
            "If you apply for a position with RITGB, we may also collect your resume, educational qualifications, employment history, professional experience, portfolio and other information relevant to the recruitment process.",
          ],
        },
      ],
    },
    {
      number: "2",
      title: "How We Use Your Information",
      intro: "RITGB may use collected information for the following purposes:",
      subsections: [
        {
          number: "2.1",
          title: "Service Delivery",
          paragraphs: [
            "To understand business requirements and provide services relating to digital marketing, branding, graphic design, website and application development, software solutions, content marketing, SEO, advertising and other associated services.",
          ],
        },
        {
          number: "2.2",
          title: "Communication and Client Management",
          paragraphs: [
            "To respond to enquiries, prepare proposals and quotations, schedule consultations, share project updates, provide administrative support and maintain business relationships.",
          ],
        },
        {
          number: "2.3",
          title: "Lead Generation and Campaign Management",
          paragraphs: [
            "To plan, execute and manage digital marketing and lead generation campaigns. Where RITGB processes information on behalf of a client, such information may be handled according to the agreed project scope and the client's instructions.",
          ],
        },
        {
          number: "2.4",
          title: "Website Analytics and Improvement",
          paragraphs: [
            "To understand website traffic, monitor performance, identify technical issues and improve our website's functionality, content and user experience.",
          ],
        },
        {
          number: "2.5",
          title: "Marketing and Business Development",
          paragraphs: [
            "To communicate information about our services, business updates, promotional activities and relevant offerings. You may opt out of promotional communications at any time.",
          ],
        },
        {
          number: "2.6",
          title: "Business Administration and Legal Compliance",
          paragraphs: [
            "To maintain business records, manage contractual obligations, prevent misuse of our services, address disputes and comply with applicable legal and regulatory requirements.",
          ],
        },
      ],
    },
    {
      number: "3",
      title: "Information Sharing and Disclosure",
      intro: [
        "RITGB does not sell or rent personal information to third parties as a business practice.",
        "However, we may share information in the following circumstances:",
      ],
      subsections: [
        {
          number: "3.1",
          title: "Third-Party Service Providers",
          intro:
            "We may engage external service providers to support our business operations and service delivery. These may include:",
          items: [
            "Website hosting and cloud infrastructure providers.",
            "Email and business communication platforms.",
            "Customer relationship management (CRM) systems.",
            "Analytics and website performance tools.",
            "Advertising and marketing platforms.",
            "Payment processing services, where applicable.",
            "Appointment scheduling and other business management tools.",
          ],
          outro:
            "Such providers may process relevant information on our behalf, subject to applicable contractual arrangements and legal requirements.",
        },
        {
          number: "3.2",
          title: "Client Campaigns",
          paragraphs: [
            "When conducting lead generation or digital marketing campaigns for clients, RITGB may collect or process information submitted by individuals through campaign forms, landing pages or other digital channels.",
            "Depending on the agreed campaign arrangement, such information may be shared with or made accessible to the relevant client through designated communication channels, CRM systems or other authorised platforms.",
            "The client is responsible for determining the purposes for which the information is collected and subsequently used, where the client acts as the Data Fiduciary.",
          ],
        },
        {
          number: "3.3",
          title: "Legal and Regulatory Requirements",
          paragraphs: [
            "We may disclose information when required by applicable laws, regulations, court orders or lawful requests from competent authorities, or where necessary to protect our legal rights and interests.",
          ],
        },
        {
          number: "3.4",
          title: "Business Transactions",
          paragraphs: [
            "Information may be transferred or disclosed in connection with a merger, acquisition, restructuring or sale of business assets, subject to applicable legal requirements.",
          ],
        },
      ],
    },
    {
      number: "4",
      title: "Cookies and Tracking Technologies",
      paragraphs: [
        "Our website may use cookies, pixels, analytics tools and similar tracking technologies to improve website functionality, understand visitor behaviour, analyse traffic and measure marketing performance.",
        "These technologies may collect information relating to your browsing preferences, device, website interactions and session activity.",
        "Depending on their purpose, cookies may include:",
      ],
      items: [
        "Essential Cookies: Support basic website functionality, navigation and security.",
        "Analytics Cookies: Help us understand website traffic and visitor interactions.",
        "Functional Cookies: Remember certain preferences to improve your browsing experience.",
        "Advertising Cookies: Where implemented, help measure advertising performance and campaign effectiveness.",
      ],
      followUp: [
        "You can manage or disable cookies through your browser settings. Where required by applicable law, we will seek appropriate consent before using non-essential cookies or similar tracking technologies.",
        "Disabling certain cookies may affect some website features or functionality.",
      ],
    },
    {
      number: "5",
      title: "Data Security and Retention",
      subsections: [
        {
          number: "5.1",
          title: "Data Security",
          paragraphs: [
            "RITGB takes reasonable technical and organisational measures to protect personal information against unauthorised access, disclosure, alteration, misuse or destruction.",
            "Depending on the nature of the information and the systems involved, these measures may include access restrictions, authentication controls, secure storage practices and confidentiality arrangements.",
            "However, no electronic transmission or storage method can be guaranteed to be completely secure.",
          ],
        },
        {
          number: "5.2",
          title: "Data Retention",
          paragraphs: [
            "We retain personal information only for as long as reasonably necessary to fulfil the purposes for which it was collected, provide services, maintain business records and meet applicable legal or contractual obligations.",
            "Retention periods may vary depending on the nature of the information, the business relationship, project requirements and applicable legal obligations.",
            "When information is no longer required, we will take appropriate steps to delete, anonymise or securely dispose of it, subject to applicable retention requirements.",
          ],
        },
      ],
    },
    {
      number: "6",
      title: "Data Processing on Behalf of Clients",
      paragraphs: [
        "As part of our digital marketing, branding and software services, RITGB may access, receive or process personal information belonging to our clients or their customers.",
        "Depending on the nature of the engagement, RITGB may act as a Data Processor or service provider processing information on behalf of a client.",
        "In such circumstances:",
      ],
      items: [
        "We process information according to the applicable client agreement and authorised instructions.",
        "We use such information only to the extent necessary to perform the agreed services.",
        "We maintain appropriate confidentiality and security arrangements.",
        "We may engage authorised third-party service providers where permitted under the relevant agreement.",
        "We handle information in accordance with applicable legal and contractual requirements.",
      ],
      followUp: [
        "Clients are responsible for ensuring that they have the necessary rights, permissions and lawful grounds to provide personal information to RITGB for processing.",
        "Where appropriate, separate data processing agreements may govern these arrangements.",
      ],
    },
    {
      number: "7",
      title: "International Data Transfers",
      paragraphs: [
        "RITGB works with and provides services to businesses and individuals located in India and other countries.",
        "As part of our business operations, personal information may be accessed, processed or transferred across geographical boundaries where necessary for service delivery, business communication or engagement with third-party service providers.",
        "Such transfers will be undertaken subject to applicable data protection laws, contractual safeguards and any restrictions imposed by relevant authorities.",
        "Individuals interacting with RITGB from outside India may also be subject to privacy rights and protections available under the laws applicable to their location.",
      ],
    },
    {
      number: "8",
      title: "Third-Party Websites and Services",
      paragraphs: [
        "Our website, communications and digital campaigns may contain links to third-party websites, applications, social media platforms or external services.",
        "These third-party platforms operate independently and may follow their own privacy policies, terms of service and data collection practices.",
        "RITGB does not control the privacy practices of independent third-party websites or services. We encourage users to review their respective privacy policies before sharing personal information.",
      ],
    },
    {
      number: "9",
      title: "Your Privacy Rights",
      paragraphs: [
        "Subject to applicable laws and their commencement, individuals may have certain rights concerning their personal information, including:",
      ],
      items: [
        "Access: Request information about the personal data being processed.",
        "Correction: Request correction of inaccurate or incomplete personal information.",
        "Erasure: Request deletion of personal information where legally permissible.",
        "Withdrawal of Consent: Withdraw consent where processing is based on consent.",
        "Grievance Redressal: Raise concerns or complaints regarding the handling of personal information.",
      ],
      followUp: [
        "Requests will be reviewed and addressed in accordance with applicable legal requirements.",
        "Certain information may need to be retained to fulfil legal obligations, contractual requirements or other legally permitted purposes.",
      ],
    },
    {
      number: "10",
      title: "Withdrawal of Consent and Marketing Preferences",
      paragraphs: [
        "Where we process personal information based on your consent, you may withdraw that consent by contacting us through the communication details provided in this Privacy Policy.",
        "You may also opt out of receiving promotional emails or marketing communications from RITGB.",
        "Please note that withdrawing consent does not affect the lawfulness of processing carried out before the withdrawal. It may also affect our ability to provide certain services where the relevant information is necessary for those services.",
      ],
    },
    {
      number: "11",
      title: "Children's Privacy",
      paragraphs: [
        "RITGB's corporate website and business services are primarily intended for businesses, professionals and individuals engaging in legitimate business interactions.",
        "We do not knowingly seek to collect personal information directly from children through our corporate website or marketing activities.",
        "Where applicable laws require parental or guardian consent for the processing of a child's personal information, we will follow the relevant legal requirements.",
      ],
    },
    {
      number: "12",
      title: "Applicable Data Protection Laws",
      paragraphs: [
        "RITGB seeks to handle personal information in accordance with applicable privacy and data protection requirements.",
        "These may include:",
      ],
      items: [
        "The Digital Personal Data Protection Act, 2023.",
        "The Digital Personal Data Protection Rules, 2025, as applicable.",
        "The Information Technology Act, 2000.",
        "Applicable rules and regulations concerning personal information and information security.",
        "Other relevant privacy and data protection laws applicable to our business activities and international engagements.",
      ],
      followUp: [
        "Where our activities involve individuals or organisations located outside India, additional legal requirements may apply depending on the nature of the processing and the relevant jurisdiction.",
        "Nothing in this Privacy Policy is intended to limit any rights or obligations that cannot lawfully be restricted.",
      ],
    },
    {
      number: "13",
      title: "Updates to This Privacy Policy",
      paragraphs: [
        "RITGB may revise or update this Privacy Policy from time to time to reflect changes in our business operations, services, technology, data handling practices or applicable legal requirements.",
        "Any revised version will be published on our website along with an updated \"Last Updated\" date.",
        "We encourage visitors and clients to review this page periodically to remain informed about our privacy practices.",
      ],
    },
    {
      number: "14",
      title: "Contact Us",
      intro:
        "If you have questions, concerns, complaints or requests relating to this Privacy Policy or the handling of your personal information, you may contact us through the following channels:",
    },
  ],
  contactInfo: {
    company: "RITGB (Ray Impact-Trinity Global Business)",
    location: "Bhubaneswar, Odisha, India",
    supportPhone: "+91 81285 51051",
    salesPhone: "+91 99376 72721",
    website: "https://www.ritgb.com",
  },
  footerNote: {
    agency: "Ray Impact Trinity Global Business – Digital Marketing & Branding Agency",
    statement:
      "We are committed to respecting your privacy and handling your personal information responsibly.",
  },
};
