import { Montserrat } from "next/font/google";
import "../styles/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
