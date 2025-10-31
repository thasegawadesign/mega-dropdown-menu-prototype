import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "メガドロップダウンメニューのインタラクション検証プロトタイプ",
  description: "メガドロップダウンメニューのインタラクション検証プロトタイプ",
};

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJp.className}>{children}</body>
    </html>
  );
}
