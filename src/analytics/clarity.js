import Script from 'next/script';

// Script for Microsoft Clarity Analytics
const ClarityAnalytics = () => {
  return (
    <Script 
      id="msft-analytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function (c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "jq03ms730y");
        `,
      }}
    />
  );
};

export default ClarityAnalytics;
