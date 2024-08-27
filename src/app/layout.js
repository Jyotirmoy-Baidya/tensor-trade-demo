'use client'
import { ChakraProvider } from '@chakra-ui/react';
import './globals.css'
import { cpmono } from 'next/font/google';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=CPMono:wght@400;700&display=swap"
        />
        <link rel='stylesheet' href='./globals.css' />
      </head>
      <body style={{ maxHeight: '100vh' }}>
        <ChakraProvider >
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
