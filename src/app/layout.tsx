import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import "./globals.css";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import AnalyticsProvider from "@/components/AnalyticsProvider";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pollosalabrasaca.com"),
  title: "Pollos a la Brasa | Authentic Peruvian Rotisserie Chicken | Eagle Rock, LA",
  description:
    "Pollos a la Brasa serves authentic Peruvian-style rotisserie chicken and traditional dishes in Eagle Rock, Los Angeles. Order online or visit us at 2161 Colorado Blvd.",
  keywords: [
    "Pollos a la Brasa",
    "Peruvian food",
    "rotisserie chicken",
    "Eagle Rock",
    "Los Angeles",
    "Peruvian restaurant",
    "pollo a la brasa",
    "ceviche",
    "lomo saltado",
  ],
  openGraph: {
    title: "Pollos a la Brasa | Eagle Rock, Los Angeles",
    description: "Authentic Peruvian rotisserie chicken and traditional dishes in Eagle Rock.",
    url: "https://www.pollosalabrasaca.com",
    siteName: "Pollos a la Brasa",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pollos a la Brasa | Authentic Peruvian Rotisserie Chicken | Eagle Rock, LA",
    description: "Authentic Peruvian rotisserie chicken and traditional dishes in Eagle Rock, Los Angeles.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased min-h-screen flex flex-col relative text-slate-100 selection:bg-amber-500/30 selection:text-amber-200">
        {/* Global Fixed Machu Picchu Atmospheric Backdrop */}
        <div className="machu-bg-fixed" aria-hidden="true">
          <Image
            src="/images/machu-picchu.jpg"
            alt="Machu Picchu Peruvian Andes Background"
            fill
            priority
            className="object-cover object-top sm:object-center opacity-85"
            sizes="100vw"
            quality={92}
          />
          <div className="machu-bg-overlay" />
        </div>

        {/* Google Analytics GA4 Scripts */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
                send_page_view: true
              });
            `,
          }}
        />

        {/* Client-Side Route, Scroll, Engagement & Click Tracker */}
        <Suspense fallback={null}>
          <AnalyticsProvider />
        </Suspense>

        <Header />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Pollos a la Brasa",
              image: "https://www.pollosalabrasaca.com/images/updated_logo.png",
              "@id": "https://www.pollosalabrasaca.com",
              url: "https://www.pollosalabrasaca.com",
              telephone: "+13232556322",
              menu: "https://www.pollosalabrasaca.com/menu",
              servesCuisine: "Peruvian",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "2161 Colorado Blvd",
                addressLocality: "Los Angeles",
                addressRegion: "CA",
                postalCode: "90041",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 34.1396,
                longitude: -118.2136,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Sunday", "Monday", "Tuesday"],
                  opens: "11:00",
                  closes: "20:30",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Thursday", "Friday", "Saturday"],
                  opens: "11:00",
                  closes: "21:00",
                },
              ],
              sameAs: [
                "https://www.facebook.com/pollosalabrasaca",
                "https://www.instagram.com/pollosalabrasaca",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
