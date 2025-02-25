import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import {ClerkProvider} from '@clerk/nextjs'


// This is the way to import the font
const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Welth",
  description: "One Stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <ClerkProvider>
        {/* Header */}
        <Header/>

        <main className="min-h-screen">
          {children}    {/* For dynamic content */}
        </main>

        {/*Footer  */}
        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center">
            <p>Made with Love by Vinayak Kumar</p>
          </div>
        </footer>
        </ClerkProvider>
      </body>
    </html>
    
  );
}
