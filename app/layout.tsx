import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/lib/NavBar";

export const metadata: Metadata = {
  title: "BEST Karlsruhe",
  description: "BEST Karlsruhe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="viewport-fit=cover" />
      </head>
      <body>
        <NavBar />
        {children}
      </body>
    </html >
  );
}
