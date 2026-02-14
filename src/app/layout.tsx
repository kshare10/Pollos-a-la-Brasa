import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
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
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
