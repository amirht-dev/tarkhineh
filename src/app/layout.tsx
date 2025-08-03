import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import { estedad } from "@/lib/font";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${estedad.variable}`} dir="rtl">
      <body className="flex min-h-screen flex-col">
        <SessionProvider>
          <Header />
          <main className="relative flex-1">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
