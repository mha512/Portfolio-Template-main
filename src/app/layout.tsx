import "./globals.css";

import { Navbar } from "@/components/navbar";

export const metadata = {
  title: "Hashaam Ahmad Portfolio",
  description: "Hashaam Ahmad. Android App Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="jpg" href="logo.png" />
      </head>
      <body className="dark:bg-black">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
