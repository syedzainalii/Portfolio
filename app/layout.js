import { Outfit as OutfitFont, Ovo as OvoFont } from "next/font/google";
import "./globals.css";

const outfit = OutfitFont({
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: '--font-outfit',
});

const ovo = OvoFont({
  subsets: ["latin"], 
  weight: ["400"],
  variable: '--font-ovo',
});

export const metadata = {
  title: "Syed Zain Ali | Portfolio",
  description: "Web Developer Portfolio",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${ovo.variable} font-outfit antialiased 
        leading-8 overflow-x-hidden bg-white text-black dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}