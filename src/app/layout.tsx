import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Toaster } from "sonner";
import Footer from "./_Components/Footer";
import { Navbar } from "./_Components/Navbar";
import "./globals.css";
import MySessionProvider from "./_Providers/MySessionProvider";
import CartContextProvider from "./_context/CartContextProvider";
import WishlistContextProvider from "./_context/wishlistContextProvider";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // optional but recommended
});

export const metadata: Metadata = {
  title: "Cartix — Everything You Need, Delivered",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body>
        <MySessionProvider>
          <CartContextProvider>
            <WishlistContextProvider>
              <Navbar />
              {children}
              <Footer />
              <Toaster />
            </WishlistContextProvider>
          </CartContextProvider>
        </MySessionProvider>
      </body>
    </html>
  );
}
