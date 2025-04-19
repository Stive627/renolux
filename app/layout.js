import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    </html>
  );
}
