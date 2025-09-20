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
      <body>
        <NavBar />
        {children}
      </body>
    </html >
  );
}
