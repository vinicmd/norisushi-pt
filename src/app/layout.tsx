import type {Metadata} from 'next'
import {Nunito_Sans} from 'next/font/google'

const nunito = Nunito_Sans({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Nori Sushi Fátima',
  description:
    'Um empresário brasileiro chegando em Portugal, para mudar o conceito do sushi, com muita novidades',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-pt">
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
