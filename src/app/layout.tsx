import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Çerkezköy Isı Teknik - Kombi Servisi & Kazan Temizliği",
    template: "%s | Çerkezköy Isı Teknik"
  },
  description: "Çerkezköy'de profesyonel kombi temizliği, petek temizliği ve petek kombi onarım hizmetleri. 7/24 acil servis. Uygun fiyat, kaliteli hizmet.",
  keywords: [
    "çerkezköy kombi temizliği",
    "petek temizliği",
    "petek kombi onarım",
    "kombi tamiri",
    "ısıtma sistemleri",
    "acil kombi servisi",
    "çerkezköy ısı teknik",
    "kombi bakımı",
    "petek bakımı"
  ],
  authors: [{ name: "Çerkezköy Isı Teknik" }],
  creator: "Çerkezköy Isı Teknik",
  publisher: "Çerkezköy Isı Teknik",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://cerkezisiteknik.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Çerkezköy Isı Teknik - Kombi & Petek Temizliği",
    description: "Çerkezköy'de profesyonel kombi temizliği, petek temizliği ve petek kombi onarım hizmetleri. 7/24 acil servis.",
    url: "https://cerkezisiteknik.com",
    siteName: "Çerkezköy Isı Teknik",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Çerkezköy Isı Teknik - Kombi & Petek Temizliği",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Çerkezköy Isı Teknik - Kombi & Petek Temizliği",
    description: "Çerkezköy'de profesyonel kombi temizliği, petek temizliği ve petek kombi onarım hizmetleri. 7/24 acil servis.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Çerkezköy Isı Teknik",
              "description": "Profesyonel kombi temizliği, petek temizliği ve petek kombi onarım hizmetleri",
              "url": "https://cerkezisiteknik.com",
              "telephone": "+90 530 048 20 77",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Çerkezköy",
                "addressLocality": "Çerkezköy",
                "addressRegion": "Tekirdağ",
                "addressCountry": "TR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "41.2747",
                "longitude": "27.9773"
              },
              "openingHours": "Mo-Su 00:00-23:59",
              "serviceArea": {
                "@type": "City",
                "name": "Çerkezköy"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Isıtma Hizmetleri",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Kombi Temizliği"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Petek Temizliği"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Petek Değişimi ve Kombi Değişimi"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
