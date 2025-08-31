import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Smark Solutions",
    "description": "Digital Marketing & Software Development startup delivering AI-driven tools and custom solutions.",
    "url": "https://smarksolutions.com",
    "email": "contact@smarksolutions.com",
    "telephone": "+1-555-0123",
    "foundingDate": "2024",
    "founder": {
      "@type": "Person",
      "name": "Smark Solutions Team"
    },
    "services": [
      "Digital Marketing",
      "Software Development", 
      "Cold Mailing Automation",
      "UPI Invoice & Expense Tracking"
    ],
    "sameAs": [
      "https://linkedin.com/company/smarksolutions",
      "https://twitter.com/smarksolutions"
    ]
  }

  return (
    <Helmet>
      <title>Smark Solutions | Innovating Ideas, Empowering Growth</title>
      <meta name="description" content="Digital Marketing & Software Development startup delivering AI-driven tools and custom solutions." />
      <meta name="keywords" content="smark solutions, digital marketing, software development, AI tools, invoice tracker, cold mailing automation, UPI invoice" />
      <meta name="author" content="Smark Solutions" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://smarksolutions.com/" />
      <meta property="og:title" content="Smark Solutions | Innovating Ideas, Empowering Growth" />
      <meta property="og:description" content="Digital Marketing & Software Development startup delivering AI-driven tools and custom solutions." />
      <meta property="og:site_name" content="Smark Solutions" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://smarksolutions.com/" />
      <meta property="twitter:title" content="Smark Solutions | Innovating Ideas, Empowering Growth" />
      <meta property="twitter:description" content="Digital Marketing & Software Development startup delivering AI-driven tools and custom solutions." />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  )
}

export default SEO
