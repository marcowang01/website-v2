export const metadata = {
  title: 'Marco Wang - Random',
  description:
    'Interests, recent favorites, and things Marco Wang is learning.',
  alternates: {
    canonical: '/random',
  },
  openGraph: {
    title: 'Marco Wang - Random',
    description:
      'Interests, recent favorites, and things Marco Wang is learning.',
    url: 'https://www.marcowang.me/random',
    images: '/images/og.png',
    type: 'website',
  },
}

export default function RandomLayout({ children }) {
  return <>{children}</>
}
