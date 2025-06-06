import { Geist, Geist_Mono, Arimo } from "next/font/google";
import "./globals.css";
import NavBar from "./Header/page";
import Footer from "./Footer/page";
import AOSWrapper from "./components/animation/AOSWrapper";
const arimoSans = Arimo({
  variable: "--font-arim",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CTS Point, Inc.| Computer Technology Solutions Point",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${arimoSans.variable} antialiased overflow-x-hidden `}>
      <AOSWrapper />
        <NavBar  />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
