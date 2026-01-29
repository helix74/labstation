import type { Metadata } from "next";
// import { Space_Grotesk, Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import { Space_Grotesk, Inter } from "next/font/google";

// ...

// const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
//   variable: "--font-arabic",
//   subsets: ["arabic"],
//   weight: ["300", "400", "500", "700"],
//   display: "swap",
// });
import { Header } from "@/components/layout/Header";
import "./globals.css";
import { PageLoader } from "@/components/page-loader";
import { SmoothScroll } from "@/components/smooth-scroll";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

/*
const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});
*/

export const metadata: Metadata = {
  title: "Lab Station | The Lab is Working! 🥼🔥",
  description:
    "Le laboratoire du goût à Ariana ! Burgers signature, tacos maison, viandes fumées 100% fraîches. Lab Station - Benna scientifiquement prouvée.",
  keywords: [
    "Lab Station",
    "burger Ariana",
    "tacos Tunis",
    "fast food Tunisie",
    "Moudi Food",
    "brisket fumé",
    "meilleur burger Tunis",
    "restaurant Ariana",
  ],
  authors: [{ name: "Moudi Food" }],
  openGraph: {
    title: "Lab Station | Burgers & Tacos Signature",
    description: "Le laboratoire du goût à Ariana ! Viandes fumées, sauces maison, benna garantie.",
    url: "https://labstation.tn",
    siteName: "Lab Station",
    locale: "fr_TN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased bg-lab-black text-foreground`}
      >
        <PageLoader />
        <SmoothScroll>
          <Header />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
