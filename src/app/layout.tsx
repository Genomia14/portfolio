import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "김성연 | 데이터와 시스템의 가치를 설계하는 백엔드 엔지니어",
  description: "하드웨어의 논리 위에 소프트웨어의 창의성을 더하여 안정적이고 가치 있는 서버를 구축하는 백엔드 엔지니어 김성연입니다.",
  keywords: ["김성연", "백엔드 개발자", "소프트웨어 엔지니어", "Spring Boot", "시스템 아키텍처", "Java", "데이터 최적화"],
  authors: [{ name: "김성연" }],
  openGraph: {
    title: "김성연 | 백엔드 엔지니어 포트폴리오",
    description: "하드웨어의 논리 위에 소프트웨어의 창의성을 더하여 안정적이고 가치 있는 서버를 구축합니다.",
    url: "https://your-portfolio-url.vercel.app",
    siteName: "김성연 포트폴리오",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "김성연 | 백엔드 엔지니어 포트폴리오",
    description: "하드웨어의 논리 위에 소프트웨어의 창의성을 더하여 안정적이고 가치 있는 서버를 구축합니다.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
