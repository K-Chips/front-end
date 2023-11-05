import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chips',
  description:
    'Hey there! Welcome to the Korean hub in the heart of London! Dive into the world of K-pop, K-beauty, tasty Korean food, and even the quirks of the Korean language. Join us in the ultimate journey through Korean culture, right here in the buzzing streets of London!',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
