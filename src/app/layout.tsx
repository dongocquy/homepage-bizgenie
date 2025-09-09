import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import ToastContainer from "@/components/ui/ToastContainer";
import ScrollToTop from "@/components/ui/ScrollToTop";

export const metadata: Metadata = {
  title: "BizHKD - AI Ghi Sổ Kế Toán Thông Minh",
  description: "BizHKD giúp Hộ kinh doanh tiết kiệm 80% thời gian xử lý chứng từ và ghi sổ kế toán, đảm bảo 100% tuân thủ quy định thuế Việt Nam.",
  keywords: "AI, kế toán, ghi sổ, hộ kinh doanh, thuế, tự động hóa",
  authors: [{ name: "BizHKD Team" }],
  creator: "BizHKD",
  publisher: "BizHKD",
  robots: "index, follow",
  openGraph: {
    title: "BizHKD - AI Ghi Sổ Kế Toán Thông Minh",
    description: "Giải pháp AI ghi sổ kế toán thông minh cho Hộ kinh doanh",
    type: "website",
    locale: "vi_VN",
    siteName: "BizHKD",
  },
  twitter: {
    card: "summary_large_image",
    title: "BizHKD - AI Ghi Sổ Kế Toán Thông Minh",
    description: "Giải pháp AI ghi sổ kế toán thông minh cho Hộ kinh doanh",
  },

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
        <meta name="msapplication-TileColor" content="#8b5cf6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* PWA Theme */}
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/icon-192x192.svg" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icon-192x192.svg" />
        <link rel="apple-touch-icon" sizes="512x512" href="/icon-512x512.svg" />
      </head>
      <body>
        <Navigation />
        {children}
        
        {/* Toast Container */}
        <ToastContainer />
        
        {/* Scroll to Top Button */}
        <ScrollToTop />
        
        {/* Bootstrap JS */}
        <script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossOrigin="anonymous"
          async
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
