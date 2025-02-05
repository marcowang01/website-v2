import Script from "next/script";

const GoogleAnalytics = ({ ga_id }) => (
  <>
    <Script
      id="goog-analytics"
      async
      src={`https://www.googletagmanager.com/gtag/js? 
      id=${ga_id}`}
      strategy="afterInteractive"
    ></Script>
    <Script
      id="google-analytics"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${ga_id}');
        `,
      }}
      strategy="afterInteractive"
    ></Script>
  </>
);
export default GoogleAnalytics;