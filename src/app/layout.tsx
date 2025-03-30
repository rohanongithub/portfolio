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
<title>{String(metadata.title) || "Rohan.dev | Creative Frontend Developer"}</title>
<meta name="description" content={String(metadata.description) || "Welcome to my portfolio. Dig in :)"} />
<meta 
  name="keywords" 
  content={Array.isArray(metadata.keywords) ? metadata.keywords.join(", ") : metadata.keywords || "Frontend Developer, Portfolio, Web Design"} 
/>
<meta 
  name="author" 
  content={Array.isArray(metadata.authors) ? metadata.authors.map(a => a.name).join(", ") : "Rohan"} 
/>



        {/* Open Graph (Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content={metadata.openGraph?.title} />
        <meta property="og:description" content={metadata.openGraph?.description} />
        <meta property="og:image" content={metadata.openGraph?.images?.[0]?.url} />
        <meta property="og:url" content={metadata.openGraph?.url} />
        <meta property="og:type" content={metadata.openGraph?.type} />
        <meta property="og:site_name" content={metadata.openGraph?.siteName} />

        {/* Twitter Card */}
        <meta name="twitter:card" content={metadata.twitter?.card} />
        <meta name="twitter:title" content={metadata.twitter?.title} />
        <meta name="twitter:description" content={metadata.twitter?.description} />
        <meta name="twitter:image" content={metadata.twitter?.images?.[0]} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.png" type="image/png" sizes="50x50" />

        {/* Google Site Verification (If needed) */}
        <meta name="google-site-verification" content="yQr2lvKsrMS9KjyUJkF3_RmEkCGGlKOw-DSfh1FygeI" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
