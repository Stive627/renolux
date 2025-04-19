import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Renolux Cameroon",
  description: "The official website of Renolux cameroon",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <title>Renolux</title>
      </head>
      <body style={{fontFamily:'roboto'}}
      >
        {children}
        
      </body>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-N29EGHR344"></Script>
      <Script id="google analytics">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-N29EGHR344');`}
      </Script>
    </html>
  );
}
