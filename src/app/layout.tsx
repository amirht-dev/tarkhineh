import { estedad } from '@/lib/font';
import '@/styles/globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${estedad.variable}`}>
      <body>{children}</body>
    </html>
  );
}
