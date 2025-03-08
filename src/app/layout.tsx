import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "@/app/globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Webeo",
  description: "gente vende humo",
  themeColor: "#000000",
  openGraph: {
    title: "Webeo",
    description: "gente vende humo",
    url: "https://webeo-1741395907685.vercel.app",
    images: [{ url: "/imagenes/opengraph-image.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${dmSans.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}