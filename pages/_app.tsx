import type { AppProps } from "next/app";
import localFont from "next/font/local";
import "@/app/globals.css";
import Providers from "./providers";
import { RouterProgress } from "@/shared/ui";
import Header from "@/widgets/Header/Header";
import Footer from "@/widgets/Footer/Footer";

const geistSans = localFont({
  src: "../app/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../app/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Header />
      <RouterProgress color="#3DD3CA" />
      <Providers>
        <div className="bg-white rounded-b-3xl pb-10">
          <div className="container mx-auto min-h-[calc(100vh-101px)]">
            <Component {...pageProps} />
          </div>
        </div>
      </Providers>
      <Footer />
    </div>
  );
}

export default MyApp;
