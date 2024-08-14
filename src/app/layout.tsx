import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Multilingua Conference Osnabrück 2024",
  description: "Experience &quot;Multi Lingua&quot; at a unique venue! Our event takes place in a beautifully preserved, historic train station that boasts a rich history and charming surroundings."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-white antialiased">
      <body className={font.className}>{children}</body>
    </html>
  );
}
