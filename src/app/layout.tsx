import { Layout } from '@/components/Layout'
import { ReactNode } from 'react'

import '../styles/global.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className="" lang="pt-br">
      <title>Luca&#39;s Blog</title>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
