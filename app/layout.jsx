import { Inter } from "next/font/google";
import "../assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PropertyFinder | Find The Perfect Rental",
  description: "Find your dream rental property",
  keywords:
    "property, rental, find rentals, find properties, rent a house property",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
