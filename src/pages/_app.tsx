import "@/styles/tailwind.css";
import type { AppProps } from "next/app";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

import { Layout } from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={spaceMono.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
