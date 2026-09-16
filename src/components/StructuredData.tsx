import React from "react";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.ritgb.com/#organization",
        name: "RITGB",
        alternateName: [
          "Ray Impact Trinity Global Business",
          "RITGB Digital",
          "RITGB Bhubaneswar",
        ],
        url: "https://www.ritgb.com",
        logo: {
          "@type": "ImageObject",
          "@id": "https://www.ritgb.com/#logo",
          url: "https://www.ritgb.com/images/logo/ritgb-logo-transparent.webp",
          caption: "RITGB Logo",
        },
        image: "https://www.ritgb.com/images/logo/ritgb-logo-transparent.webp",
        email: "Info@rayimpact.net",
        telephone: "+919937672721",
        sameAs: [
          "https://www.instagram.com/ritgb.io/",
          "https://www.linkedin.com/company/trinityglobalbusiness/",
          "https://www.facebook.com/share/1EMh3vxFjp/",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+919937672721",
            contactType: "sales",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi", "Odia"],
          },
          {
            "@type": "ContactPoint",
            telephone: "+918128551051",
            contactType: "customer support",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi", "Odia"],
          },
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.ritgb.com/#localbusiness",
        name: "RITGB – Digital Marketing & Branding Agency in Bhubaneswar",
        url: "https://www.ritgb.com",
        logo: "https://www.ritgb.com/images/logo/ritgb-logo-transparent.webp",
        image: "https://www.ritgb.com/images/logo/ritgb-logo-transparent.webp",
        description:
          "Full-service digital growth agency in Bhubaneswar offering branding, web design, development, SEO, and performance marketing.",
        telephone: "+919937672721",
        email: "Info@rayimpact.net",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "First Floor, Plot No 3637, behind Tanishq Showroom, Chandrasekharpur",
          addressLocality: "Bhubaneswar",
          addressRegion: "Odisha",
          postalCode: "751016",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "20.3245",
          longitude: "85.8166",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "09:30",
            closes: "19:00",
          },
        ],
        areaServed: [
          { "@type": "City", name: "Bhubaneswar" },
          { "@type": "State", name: "Odisha" },
          { "@type": "Country", name: "India" },
          { "@type": "Place", name: "Worldwide" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Digital Growth & Agency Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Branding & Brand Identity Design",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Website Design & Web Development",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Search Engine Optimization (SEO)",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI Automation & Custom Software",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Social Media & Performance Marketing",
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
