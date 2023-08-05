import "./globals.css";
import * as React from "react";
import Providers from "@/components/Providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="pt-8">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
