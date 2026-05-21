import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prehab Fizioterapija Zadar | Biograd",
  description:
    "Prehab je specijalizirana klinika za fizioterapiju i rehabilitaciju u Zadru i Biogradu koju vodi Nikola Lukić, diplomirani fizioterapeut. Nudimo dijagnostiku problema, korekciju posture, terapiju skolioze, masažu, elektro stimulaciju, ultrazvučnu terapiju, terapijske vježbe u vodi te individualne programe rehabilitacije.",
  openGraph: {
    title: "Prehab Fizioterapija | Zadar i Biograd",
    description:
      "Specijalizirani centar za fizioterapiju, rehabilitaciju i terapijske programe u Zadru i Biogradu.",
    url: "https://prehabilitationtherapycenter.hr/",
    siteName: "Prehab Zadar",
    images: [
      {
        url: "https://prehabilitationtherapycenter.hr/images/Nikola/prehab.jpg",
        width: 1920,
        height: 1080,
        alt: "Prehab fizioterapija Zadar i Biograd",
      },
    ],
    type: "website",
    locale: "hr_HR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
