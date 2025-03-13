import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Rohan.dev",
  description: "A creative portfolio with animated text effects",
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="50x50" />
        <meta name="google-site-verification" content="yQr2lvKsrMS9KjyUJkF3_RmEkCGGlKOw-DSfh1FygeI" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
