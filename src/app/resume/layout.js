export const metadata = {
  title: 'Marco Wang - Resume',
  description:
    'Work experience and education for software engineer Marco Wang, with a downloadable resume.',
  alternates: {
    canonical: '/resume',
  },
  openGraph: {
    title: 'Marco Wang - Resume',
    description:
      'Work experience and education for software engineer Marco Wang, with a downloadable resume.',
    url: 'https://www.marcowang.me/resume',
    images: '/images/og.png',
    type: 'website',
  },
}

export default function ResumeLayout({ children }) {
  return <>{children}</>
}
