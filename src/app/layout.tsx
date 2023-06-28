import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "../lib/utils";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(inter.className)}>
      <body
        className={cn(
          "min-h-screen bg-slate-50 antialiased mx-auto bg-background"
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
