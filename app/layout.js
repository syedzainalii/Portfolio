import { Outfit as OutfitFont, Ovo as OvoFont } from "next/font/google";
import "./globals.css";



const outfit = OutfitFont({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = OvoFont({
  subsets: ["latin"], weight: ["400"] 
});


export const metadata = {
  title: "Syed Zain Ali | Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${outfit.className} ${ovo.className} 
        antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
