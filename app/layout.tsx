import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
import {
  ClerkProvider} from '@clerk/nextjs'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wayferen - Travel App",
  description: "Travel App is a travel app that helps users plan and book their trips. It provides a user-friendly interface for booking flights, hotels, and other travel services. The app also offers a range of features such as travel recommendations, travel guides, and travel forums. Wayferen is a great choice for anyone looking to plan and book their next trip. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <NextTopLoader
							color="#d3803c"
							height={2}
							crawlSpeed={50}
							speed={1000}
							showSpinner={false}
						/>
        {children}
      </body>
    </html>
        </ClerkProvider>

  );
}
