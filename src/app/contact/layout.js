export const metadata = {
  title: 'Marco Wang - Contact',
  description:
    'Find Marco Wang on GitHub and LinkedIn, or get in touch using his public contact information.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Marco Wang - Contact',
    description:
      'Find Marco Wang on GitHub and LinkedIn, or get in touch using his public contact information.',
    url: 'https://www.marcowang.me/contact',
    images: '/images/og.png',
    type: 'website',
  },
}

export default function ContactLayout({ children }) {
  return <>{children}</>
}
