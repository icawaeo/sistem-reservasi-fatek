import type { Metadata } from "next";
<<<<<<< HEAD
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sistem Reservasi FATEK",
=======
import "./globals.css";

export const metadata: Metadata = {
  title: "Sistem Reservasi Ruangan - Fatek UNSRAT",
>>>>>>> bf1568ec0f95fa095e595f76e094c68995ca7a80
  description: "Sistem reservasi ruangan Fakultas Teknik UNSRAT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
<<<<<<< HEAD
      <body className={`${montserrat.variable} antialiased`}>{children}</body>
=======
      <body className="antialiased">
        {children}
      </body>
>>>>>>> bf1568ec0f95fa095e595f76e094c68995ca7a80
    </html>
  );
}