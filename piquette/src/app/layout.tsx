import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { cn } from "@/lib/utils";
import { constructMetadata } from '@/lib/metadata';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-gradient-to-r from-emerald-500 to-emerald-900")}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
