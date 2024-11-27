import { Helmet } from 'react-helmet';

const Schema = () => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Rideroz",
        "url": "https://rideroz.com",
        "telephone": "+91-7505847229",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mumbai",
          "addressRegion": "MH",
          "addressCountry": "India"
        }
      })}
    </script>
  </Helmet>
);

export default Schema