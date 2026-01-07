import type { Metadata } from "next";
import { Jost } from "next/font/google";
import Script from "next/script";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["400", "500", "600", "700"],
});

import "@/assets/css/line-awesome.min.css";
import "@/assets/css/fontAwesomePro.css";
import "@/assets/css/animate.css";
import "@/assets/css/flaticon.css";
import "@/assets/css/owl.carousel.css";
import "@/assets/css/backToTop.css";
import "@/assets/scss/style.scss";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import BackToTop from "@/components/BackToTop";
import WowProvider from "@/provider/WowProvider";
import BootstrapClient from "@/provider/BootstrapClient";
import PreLoader from "@/components/PreLoader";

export const metadata: Metadata = {
  title: "Triple E Windows",
  description: "Triple E Windows",
  robots: {
    index: false,
    follow: false,
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
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KZBBV39M');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${jost.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KZBBV39M"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/*-- Pre-Loader --*/}
        <PreLoader />

        {/* Initializes WOW.js globally */}
        <WowProvider />

        <Header />
        {children}
        <Footer />

        {/*-- back to top start --*/}
        <BackToTop />

        <BootstrapClient />
      </body>
    </html>
  );
}
