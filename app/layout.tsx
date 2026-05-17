import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "nhnurshed — Photography",
  description: "Documentary & Street Photographer based in Dhaka, Bangladesh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: spaceGrotesk.style.fontFamily }} className="antialiased">
        {children}
      </body>
    </html>
  );
}