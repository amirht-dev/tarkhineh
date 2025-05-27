import Header from "@/components/organisms/Header";
import { estedad } from "@/lib/font";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${estedad.variable}`} dir="rtl">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
