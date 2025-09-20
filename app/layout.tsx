import type { Metadata, Viewport } from "next";
import "./globals.css";
import NavBar from "@/lib/NavBar";

export const metadata: Metadata = {
  title: "BEST Karlsruhe",
  description: "BEST Karlsruhe",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  viewportFit: "cover"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[linear-gradient(257deg,hsla(18,84%,90%,0.35)_-32.4%,rgba(255,165,129,0.35)_-3.42%,rgba(255,73,0,0.35)_23.87%,rgba(255,140,160,0.35)_50.46%,rgba(255,120,170,0.35)_79.15%,rgba(249,57,166,0.35)_103.64%)]">
        <NavBar />
        {children}
      </body>
    </html >
  );
}
