import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: "https://true-eqity.vercel.app/",
  title: "True Eqity",
  description: "True Eqity Fund",
  openGraph: {
    title: "True Eqity",
    description: "True Eqity Fund",
    images: ["/meta.webp"],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
