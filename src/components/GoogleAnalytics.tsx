import Script from "next/script";

export default function GoogleAnalytics() {
  return (
    <Script
      id="google-analytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            var hostname = window.location.hostname.toLowerCase();
            var gaId = 'G-CMBGJ1V1BS'; // Default for ritgb.com

            if (hostname.includes('rayimpact.net')) {
              gaId = 'G-4GKMLNVGB0';
            } else if (hostname.includes('ritgb.com')) {
              gaId = 'G-CMBGJ1V1BS';
            }

            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', gaId, {
              page_path: window.location.pathname,
            });

            var script = document.createElement('script');
            script.async = true;
            script.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaId;
            document.head.appendChild(script);
          })();
        `,
      }}
    />
  );
}
