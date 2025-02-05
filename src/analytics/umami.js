import Script from 'next/script'

const UmamiAnalytics = () => {
  return (
    <Script
      defer
      src="https://cloud.umami.is/script.js"
      data-website-id="e02b9b76-a8f5-47b6-9457-86c60aa94c86"
      strategy="afterInteractive"
    />
  )
}

export default UmamiAnalytics
