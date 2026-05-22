import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import ConditionalLayout from "@/components/ConditionalLayout";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Ojas Studio",
  description: "Ojas Studio is a .",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning className={`${inter.className} antialiased`}>
        <body>
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
        </body>
      </html>
    </ViewTransitions>
  );
}


