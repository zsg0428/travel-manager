import localFont from "next/font/local";
import "./globals.css";
import Header from "@/app/_components/Header";
import {Footer} from "@/app/_components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Travel Manager For Dempsey and Mavis",
  description: "Mavis and Dempsey Travel Manager",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=' h-[100vh] relative'>
    <Header/>
        {children}
    {/*<Footer/>*/}
      </body>gi
    </html>
  );
}
