import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "JustBeStill",
  description:
    "A creative fashion design group dedicated to inspiring the next generation of designers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="snap-y snap-mandatory">
      <body className={poppins.className}>
        <Navigation transparent />
        {children}
        <Footer />
      </body>
    </html>
  );
}
