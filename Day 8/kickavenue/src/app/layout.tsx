/** @format */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import ProductProvider from "@/providers/product.provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kickavenue by Jordan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProductProvider>
          <Navbar />
          {children}
        </ProductProvider>
      </body>
    </html>
  );
}
