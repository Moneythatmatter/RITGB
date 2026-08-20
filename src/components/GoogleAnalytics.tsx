"use client";

import Script from "next/script";

const getGAId = () => {
    const hostname = window.location.hostname;

    if (
        hostname === "ritgb.com" ||
        hostname === "www.ritgb.com"
    ) {
        return "G-CMBGJ1V1BS";
    }

    if (
        hostname === "rayimpact.net" ||
        hostname === "www.rayimpact.net"
    ) {
        return "G-4GKMLNVGB0";
    }

    return null;
};

export default function GoogleAnalytics() {
    const GA_ID = getGAId();

    if (!GA_ID) return null;

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                strategy="afterInteractive"
            />

            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;

          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
            </Script>
        </>
    );
}