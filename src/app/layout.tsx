import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import BreakpointProvider from "@/contexts/breakpoint";
import { estedad } from "@/lib/font";
import { GlobalStoreProvider } from "@/Providers/global-store";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import dynamic from "next/dynamic";

const BranchModal = dynamic(() => import("@/components/molecules/BranchModal"));

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${estedad.variable}`} dir="rtl">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <GlobalStoreProvider>
          <SessionProvider>
            <BreakpointProvider>
              <BranchModal />
              <Header />
              <main className="relative flex-1">{children}</main>
              <Footer />
            </BreakpointProvider>
          </SessionProvider>
        </GlobalStoreProvider>
      </body>
    </html>
  );
}
