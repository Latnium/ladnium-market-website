import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: 'Ladnium - The Liquidity Protocol & Stablecoins',
  description: 'Ladnium is an instant liquidity provider for Partner Stablecoins and Flatcoins. Offering secure, fully collateralized digital currency backed by diversified assets.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable} style={{ colorScheme: 'light' }}>
      <body className={`${montserrat.className} bg-white`}>{children}</body>
    </html>
  );
}
