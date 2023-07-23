import type {Metadata} from 'next'
import {Nunito_Sans} from 'next/font/google'
import '@/app/globals.css'

const nunito = Nunito_Sans({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Nori Sushi Fátima',
  description:
    'O Melhor sushi 🍣 de Fátima. Funcionamos de terça a domingo a 300 metros do Santuário de Fátima',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-pt">
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
