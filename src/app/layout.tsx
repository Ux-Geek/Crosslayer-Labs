import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CrossLayer Labs",
  description: "Securing the critical backbone of web infrastructure with elite research from Princeton.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&display=swap"
        />
      </head>
      <body className="antialiased selection:bg-deep-green selection:text-white">
        {children}
      </body>
    </html>
  );
}
