import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Rohan.dev | Creative Frontend Developer",
  description: "Welcome to my portfolio. Dig in :)",
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  keywords: ["Frontend Developer", "Portfolio", "Web Design", "UI/UX", "React", "Next.js", "Rohan"],
  authors: [{ name: "Rohan" }],
  openGraph: {
    title: "Rohan.dev | Creative Frontend Developer",
    description: "Welcome to my portfolio. Dig in :)",
    url: "https://rohandev.vercel.app",
    siteName: "Rohan.dev",
    images: [
      {
        url: "https://rohandev.vercel.app/og-image.png",
        width: 800,
        height: 600,
        alt: "Rohan Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohan.dev | Creative Frontend Developer",
    description: "Welcome to my portfolio. Dig in :)",
    images: ["https://rohandev.vercel.app/og-image.png"],
  },
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
