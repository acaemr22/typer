import "./globals.css";
import Providers from "@/components/Providers";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="pt-8">
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
