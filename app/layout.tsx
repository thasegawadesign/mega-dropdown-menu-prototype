import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "メガドロップダウンメニューのインタラクション検証プロトタイプ",
  description: "メガドロップダウンメニューのインタラクション検証プロトタイプ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
