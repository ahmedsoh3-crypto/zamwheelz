import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zamwheelz.com"),

  title: {
    default: "ZamWheelz Your Wheels! Your Deals!",
    template: "%s | ZamWheelz",
  },

  description:
    "ZamWheelz is the ultimate platform to buy & sell cars. Join the waitlist for exclusive early access and launch perks.",

  icons: {
    icon: "/favicon.png",
  },

  openGraph: {
    title: "ZamWheelz Buy & Sell Cars Smarter",
    description:
      "Join the ZamWheelz waitlist and get early access to the next-generation car marketplace.",
    url: "https://www.zamwheelz.com",
    siteName: "ZamWheelz",
    images: [
      {
        url: "/ZamWheelz.png", // 1200x630
        width: 1200,
        height: 630,
        alt: "ZamWheelz  Car Marketplace",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ZamWheelz Buy & Sell Cars Smarter",
    description:
      "The ultimate platform to buy & sell cars. Join the waitlist for early access.",
    images: ["/ZamWheelz.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Logo Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ZamWheelz",
              url: "https://www.zamwheelz.com",
              logo: "https://www.zamwheelz.com/ZamWheelz.png", 
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}