import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header/index.jsx";
import Footer from "../../components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MTinfosys",
  description: "Get Solid Solution",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={`py-6 sm:py-8 lg:py-10 px-4 md:px-6 ${inter.className}`}>
        <Header optionalLink={'Contact Me'} id={'header'} />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
