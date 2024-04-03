import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "./components/shared/Nav/Nav";
import Footer from "./components/shared/Footer/Footer";
import Image from "../../public/images/logo.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Foresight Consult",
  description: "A consulting firm",
  icons: {
    icon: "../../public/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="icon" href="../../public/images/logo.png" sizes="any" />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
