import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Estudio SAO — Especialistas en seguros y accidentes",
  description:
    "Estudio integral especialistas en seguros y accidentes. 50 años de trayectoria en todo el país. Accidentes de tránsito, accidentes de trabajo (ART) y contratos de seguros.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${newsreader.variable} ${jakarta.variable}`}>
      <body>
        <div style={{ width: "100%", overflowX: "hidden" }}>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
