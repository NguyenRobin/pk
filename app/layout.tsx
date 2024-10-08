import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PKs herrfrisering",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={` ${poppins.className} min-h-screen w-screen antialiased`}
      >
        {/* <div className="w-full overflow-x-hidden">
          <Navbar />
          <div className="ml-auto mr-auto w-full max-w-screen-2xl">
            <main className="w-full">{children}</main>
          </div>
        </div> */}

        <div className="w-full overflow-x-hidden">
          <Navbar />
          <div>
            <main className="w-full">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
