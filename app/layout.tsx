import type { Metadata } from "next";
import { Inter,  } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });
const aeonik = localFont({ src: '../public/fonts/aeonik.otf' })

export const metadata: Metadata = {
  title: "HMS - Home",
  description: "The best Hospital Management Software ever!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={aeonik.className}>
        <div className="flex flex-col h-screen ">
          <div className="h-[75px] w-full">
            <Header/>
          </div>
          <div className="h-[calc(100%-75px)]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
