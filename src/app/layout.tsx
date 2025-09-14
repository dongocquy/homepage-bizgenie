import type { Metadata } from "next";
import "./globals.css";
import "../styles/optimizations.css";
import Navigation from "@/components/layout/Navigation";
import ToastContainer from "@/components/ui/ToastContainer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import ErrorBoundary from "@/components/ui/ErrorBoundary";

export const metadata: Metadata = {
  title: {
    default: "BizHKD - AI Ghi Sổ Kế Toán Thông Minh",
    template: "%s | BizHKD"
  },
  description: "BizHKD giúp Hộ kinh doanh tiết kiệm 80% thời gian xử lý chứng từ và ghi sổ kế toán, đảm bảo 100% tuân thủ quy định thuế Việt Nam. Giải pháp AI tự động hóa hoàn toàn quy trình kế toán.",
  keywords: [
    "AI kế toán",
    "ghi sổ tự động", 
    "hộ kinh doanh",
    "kế toán thuế",
    "tự động hóa kế toán",
    "phần mềm kế toán",
    "báo cáo thuế tự động",
    "nhận diện chứng từ",
    "BizHKD",
    "kế toán thông minh"
  ],
  authors: [{ name: "BIZGENIE TECH & SOLUTION COMPANY LIMITED" }],
  creator: "BIZGENIE TECH & SOLUTION COMPANY LIMITED",
  publisher: "BIZGENIE TECH & SOLUTION COMPANY LIMITED",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "BizHKD - AI Ghi Sổ Kế Toán Thông Minh",
    description: "Giải pháp AI ghi sổ kế toán thông minh cho Hộ kinh doanh. Tiết kiệm 80% thời gian, đảm bảo 100% tuân thủ thuế Việt Nam.",
    type: "website",
    locale: "vi_VN",
    siteName: "BizHKD",
    url: "https://homepage.bizgenie.vn",
    images: [
      {
        url: "https://static.agentcloud.vn/bizgenie.vn/images/test_642f0b38b1_20250813.png",
        width: 1200,
        height: 630,
        alt: "BizHKD - AI Ghi Sổ Kế Toán Thông Minh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BizHKD - AI Ghi Sổ Kế Toán Thông Minh",
    description: "Giải pháp AI ghi sổ kế toán thông minh cho Hộ kinh doanh. Tiết kiệm 80% thời gian, đảm bảo 100% tuân thủ thuế Việt Nam.",
    images: ["https://static.agentcloud.vn/bizgenie.vn/images/test_642f0b38b1_20250813.png"],
  },
  alternates: {
    canonical: "https://homepage.bizgenie.vn",
  },
  category: "technology",
  classification: "Business Software",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        {/* Bootstrap CSS */}
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" 
          rel="stylesheet" 
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
        
        {/* Font Awesome */}
        <link 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
          rel="stylesheet" 
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        
        {/* PWA Meta tags */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="BizHKD" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* PWA Theme */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/icon-192x192.svg" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icon-192x192.svg" />
        <link rel="apple-touch-icon" sizes="512x512" href="/icon-512x512.svg" />
      </head>
      <body>
        <ErrorBoundary>
          <Navigation />
          {children}
          
          {/* Toast Container */}
          <ToastContainer />
          
          {/* Scroll to Top Button */}
          <ScrollToTop />
        </ErrorBoundary>
        
        {/* Bootstrap JS */}
        <script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossOrigin="anonymous"
          async
        />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "BizHKD",
              "description": "Giải pháp AI ghi sổ kế toán thông minh cho Hộ kinh doanh",
              "url": "https://homepage.bizgenie.vn",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "299000",
                "priceCurrency": "VND",
                "priceValidUntil": "2025-12-31"
              },
              "publisher": {
                "@type": "Organization",
                "name": "BIZGENIE TECH & SOLUTION COMPANY LIMITED",
                "url": "https://bizgenie.vn"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "10000"
              }
            })
          }}
        />

        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
