import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import './globals.css';
import { ChakraProvider } from '@chakra-ui/react';
// import { DSProvider } from "@nypl/design-system-react-components";

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body id="body">
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </body>
    </html>
  )
}
