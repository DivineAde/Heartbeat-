import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "./components/main/StarsBg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Divine Ade codes",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014]`}>
        <StarsCanvas />
        {children}
      </body>
    </html>
  );
}
