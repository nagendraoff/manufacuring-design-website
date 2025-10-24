import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import AosWrapper from "@/components/AosWrapper";


export const metadata: Metadata = {
 title: "ABC Manufacturing | Precision Design Solutions",
  description: "High-quality manufacturing and industrial design services.",
  keywords: ["Manufacturing", "Industrial Design", "Engineering", "Products"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>ABC Manufacturing | Precision Industrial Solutions</title>
      <meta name="description" content="High-quality manufacturing solutions for industrial clients. Design, production, and support services." />
      <meta name="robots" content="index, follow" />
      <body className="bg-gray-50 text-gray-800">
        <Navbar />
         <AosWrapper />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
