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
  title: "백엔드 엔지니어 포트폴리오 | 분산 시스템 전문가",
  description: "고성능 분산 시스템, 데이터베이스 최적화 및 확장 가능한 마이크로서비스 아키텍처를 설계하는 시니어 백엔드 엔지니어입니다.",
  keywords: ["백엔드 개발자", "소프트웨어 엔지니어", "분산 시스템", "Go", "Spring Boot", "시스템 아키텍처", "확장성"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "백엔드 엔지니어 포트폴리오 | 분산 시스템 전문가",
    description: "Go, Spring Boot, Kafka를 활용한 견고한 백엔드 아키텍처 설계.",
    url: "https://your-portfolio-url.vercel.app",
    siteName: "백엔드 엔지니어 포트폴리오",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "백엔드 엔지니어 포트폴리오 | 분산 시스템 전문가",
    description: "Go, Spring Boot, Kafka를 활용한 견고한 백엔드 아키텍처 설계.",
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
