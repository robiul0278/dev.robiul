import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Providers from "./provider";


export const metadata: Metadata = {
  title: "dev.robiul",
  description: "A personal portfolio website!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "var(--font-bangla)" }}>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
