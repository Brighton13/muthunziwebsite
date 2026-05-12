import { Fraunces, Space_Grotesk } from 'next/font/google';
import './globals.css';

const headingFont = Fraunces({
  subsets: ['latin'],
  variable: '--font-heading'
});

const bodyFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-body'
});

export const metadata = {
  title: 'Muthunzi General Dealers',
  description:
    'Advertising website for Muthunzi General Dealers in Chipata, Eastern Province, showcasing finance services, devices, fashion, and grain trading.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>{children}</body>
    </html>
  );
}