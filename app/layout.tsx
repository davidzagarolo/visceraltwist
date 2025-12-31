import { Urbanist, Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer"

const urbanist = Urbanist({
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} min-h-screen flex flex-col`}>
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
