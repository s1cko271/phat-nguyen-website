import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteMetadata } from "@/content/story";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "vietnamese"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  metadataBase: new URL("https://phatnguyen.com"),
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    locale: siteMetadata.locale,
    type: "website",
    images: [
      {
        url: siteMetadata.ogImage,
        width: 1122,
        height: 1402,
        alt: "PHAT NGUYEN — Hai Thế Giới. Một Con Đường Riêng.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#050811",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning className={`${beVietnamPro.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const origSetAttr = Element.prototype.setAttribute;
                  Element.prototype.setAttribute = function(name, value) {
                    if (name === 'bis_skin_checked' || name === 'bis_register' || (typeof name === 'string' && name.indexOf('bis_') === 0)) {
                      return;
                    }
                    return origSetAttr.apply(this, arguments);
                  };
                  if (typeof MutationObserver !== 'undefined') {
                    new MutationObserver(function(mutations) {
                      for (var i = 0; i < mutations.length; i++) {
                        var m = mutations[i];
                        if (m.type === 'attributes' && m.attributeName && m.attributeName.indexOf('bis_') === 0) {
                          m.target.removeAttribute(m.attributeName);
                        }
                      }
                    }).observe(document.documentElement, { attributes: true, subtree: true });
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning className="bg-blue-void text-blue-glass font-body min-h-screen selection:bg-blue-electric/30 selection:text-fissure-core relative overflow-x-hidden">
        {/* Subtle Cyber Atmospheric Overlays */}
        <div suppressHydrationWarning className="grain-overlay" aria-hidden="true" />
        <div suppressHydrationWarning className="cyber-scanlines" aria-hidden="true" />
        <div suppressHydrationWarning className="cyber-scan-beam" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
