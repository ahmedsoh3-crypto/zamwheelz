import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zamwheelz.com"),

  title: {
    default: "Buy & Sell Cars in Zambia & South Africa | ZamWheelz",
    template: "%s | ZamWheelz",
  },

  description:
    "ZamWheelz is the modern car marketplace for Zambia and South Africa. Buy used cars, sell your car faster, and join the waitlist for early access and launch perks.",

  icons: {
    icon: "/favicon.png",
  },

  openGraph: {
    title: "Buy & Sell Cars in Zambia & South Africa | ZamWheelz",
    description:
      "The smart way to buy and sell cars in Zambia and South Africa. Join the ZamWheelz waitlist for early access.",
    url: "https://www.zamwheelz.com",
    siteName: "ZamWheelz",
    images: [
      {
        url: "/ZamWheelz.png", // ideally 1200x630
        width: 1200,
        height: 630,
        alt: "ZamWheelz Car Marketplace",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Buy & Sell Cars in Zambia & South Africa | ZamWheelz",
    description:
      "A smarter car marketplace built for Zambia and South Africa. Join the ZamWheelz waitlist for early access.",
    images: ["/ZamWheelz.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ZamWheelz",
    url: "https://www.zamwheelz.com",
    logo: "https://www.zamwheelz.com/ZamWheelz.png",
    areaServed: ["ZM", "ZA"],
  };

  return (
    <html lang="en">
      <head>
        {/* Google Search Logo / Brand Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}