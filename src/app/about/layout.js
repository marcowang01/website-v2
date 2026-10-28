const profile = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': 'https://www.marcowang.me/about#profile',
  url: 'https://www.marcowang.me/about',
  mainEntity: {
    '@type': 'Person',
    '@id': 'https://www.marcowang.me/#person',
    name: 'Marco Wang',
    url: 'https://www.marcowang.me/about',
    jobTitle: 'Software Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Sierra',
      url: 'https://www.sierra.ai/',
    },
    sameAs: [
      'https://github.com/marcowang01',
      'https://www.linkedin.com/in/marco-01/',
    ],
  },
}

export const metadata = {
  title: 'About Marco Wang',
  description:
    'Marco Wang is a software engineer based in San Francisco, building conversational AI agents at Sierra. Previously at rabbit, Exa, The Boring Company, Workiva, and NU Tiilt Lab.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Marco Wang',
    description:
      'Marco Wang is a software engineer based in San Francisco, building conversational AI agents at Sierra. Previously at rabbit, Exa, The Boring Company, Workiva, and NU Tiilt Lab.',
    url: 'https://www.marcowang.me/about',
    images: '/images/og.png',
    type: 'website',
  },
}

export default function AboutLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profile).replace(/</g, '\\u003c'),
        }}
      />
      {children}
    </>
  )
}
