import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Floor Plan Creator',
    description: 'Create floor plans with 2D/3D views',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
          <html lang="en">
                <body className={inter.className}>{children}</body>body>
          </html>html>
        );
}</html>
