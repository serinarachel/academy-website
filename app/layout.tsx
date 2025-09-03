// @ts-nocheck
import "./globals.css";
import type { Metadata } from "next";
import type React from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import StickyCTA from "@/components/layout/sticky-cta";
import Script from "next/script";
import PageTracking from "@/components/tracking/page-tracking";
import ClickTracking from "@/components/tracking/click-tracking";

export const metadata: Metadata = {
  title: {
    default: "AI Digital Marketing Courses in Mumbai | Adsmagnify Academy",
    template: "%s | Adsmagnify Academy",
  },
  description:
    "Learn AI-powered digital marketing with live projects and shadow internships in South Bombay. Performance Marketing & SEO courses with only 4 students per batch.",
  keywords:
    "digital marketing courses Mumbai, AI marketing training, performance marketing course, SEO training Mumbai, Google Ads course, Meta Ads training, Churchgate digital marketing",
  authors: [{ name: "Adsmagnify Academy" }],
  creator: "Adsmagnify Academy",
  publisher: "Adsmagnify Academy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://adsmagnify.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://adsmagnify.vercel.app",
    siteName: "Adsmagnify Academy",
    title: "AI Digital Marketing Courses in Mumbai | Adsmagnify Academy",
    description:
      "Learn AI-powered digital marketing with live projects and shadow internships in South Bombay. Performance Marketing & SEO courses with only 4 students per batch.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Adsmagnify Academy - AI Digital Marketing Courses Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: "your-google-verification-code",
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
        {/* Meta Pixel Code */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '977860237796583');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=977860237796583&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Google Analytics Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DRM8XJXYMZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DRM8XJXYMZ');
          `}
        </Script>

        {/* Google Tag Manager (Head) */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P6XXV5G9');
          `}
        </Script>
      </head>
      <body className="font-satoshi">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P6XXV5G9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
        <PageTracking />
        <ClickTracking />
      </body>
    </html>
  );
}
