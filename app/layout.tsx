import "@/styles/globals.css";
import type { Metadata } from "next";

import { Geist, Geist_Mono, Poppins, Karla, Quicksand } from "next/font/google";

import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tanausú | Portfolio",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${karla.variable} ${quicksand.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
