import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { TabProvider } from "./context/tabContext";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Golden State Warriors",
  description: "Website name"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TabProvider>
          <Header/>

          <HeroSection/>

          <NavBar/>

          {/* Main content area */}

          <main id={'main-content'}>
          {children}
          </main>
          

          <Footer/>
        </TabProvider>
      </body>
    </html>
  );
}
