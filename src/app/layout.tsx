import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@styles/general.scss";
import classes from "./layout.module.scss";
import clsx from "clsx";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ToDoPlan",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/checkmark.svg" sizes="any" />
      </head>
      <body className={clsx(montserrat.className, classes.layout)}>
        {children}
      </body>
    </html>
  );
}
