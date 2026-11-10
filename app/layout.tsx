import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Eira Collection — The Tables & Rooms Worth the Journey",
  description:
    "A selective guide to Europe and the world's most compelling kitchens, dining rooms, and secluded sanctuaries. Selective by design, and kept deliberately small.",
  openGraph: {
    title: "The Eira Collection — The Tables & Rooms Worth the Journey",
    description:
      "A selective guide to Europe and the world's most compelling kitchens, dining rooms, and secluded sanctuaries.",
    type: "website",
    url: "https://theeiracollection.com",
    siteName: "The Eira Collection",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans min-h-screen flex flex-col bg-white text-eira-black antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
