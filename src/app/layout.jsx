import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReportContext from "@/context/ReportContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RackUp",
  description: "Warehouse Management Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Noto+Sans+Mono:wght@100..900&family=Onest:wght@100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Space+Grotesk:wght@300..700&display=swap');
          </style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-Onest antialiased`}
      >
        

        <ReportContext>
          {children}
        </ReportContext>
        <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
