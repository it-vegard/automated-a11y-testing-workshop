import "./global.css";
import "@navikt/ds-css";
import styles from "./layout.module.css";
import { Inter } from 'next/font/google'
import MainHeader from "./MainHeader";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Workshop i automatisert uu-testing',
  description: 'En opplæring i linting, enhetstesting og ende-til-ende testing for å finne uu-feil',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="https://cdn.nav.no/aksel/fonts/SourceSans3-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <MainHeader />
        <main className={styles.mainCol}>
          {children}
        </main>
      </body>
    </html>
  )
}
