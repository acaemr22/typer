import "./globals.css";
import * as React from "react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="pt-8">{children}</body>
    </html>
  );
}
