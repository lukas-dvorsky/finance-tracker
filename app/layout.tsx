import type { Metadata } from "next";
import { Geist, Instrument_Sans, Lora, Inter, Geist_Mono, Figtree, EB_Garamond, Source_Sans_3 } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import { cn } from "@/lib/utils";

const ebGaramond = EB_Garamond({subsets:['latin'],variable:'--font-serif'});

const instrumentSansHeading = Instrument_Sans({subsets:['latin'],variable:'--font-heading'});

const sourceSans3 = Source_Sans_3({subsets:['latin'],variable:'--font-sans'});

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn( ebGaramond.variable, "font-sans", sourceSans3.variable, instrumentSansHeading.variable)}>
      <body className={`${geistSans.className} antialiased`}>
        <Navbar />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
