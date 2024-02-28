import { Inter } from "next/font/google";
import "../assets/styles/globals.css";

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
