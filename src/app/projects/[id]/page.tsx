import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

interface ProjectData {
  id: string;
  title: string;
  category: string;
  image: string;
  background: string;
  description: string;
  features: string[];
  role: string[];
  techStack: string[];
  githubUrl: string;
  teamSize: string;
}

const projectsData: Record<string, ProjectData> = {
  "ex-ledger": {
    id: "ex-ledger",
    title: "Ex-Ledger",
    category: "글로벌 외환 송금 및 정산 통합 플랫폼",
    image: "/ex-ledger-real.png",
    background: "외부 API를 활용한 실시간 다중 통화 환율 정보 제공 및 개인/기업 통합 정산 환경 구축을 위해 시작되었습니다.",
    description: "대용량 외환 트랜잭션의 정확성을 보장하기 위한 정산 엔진을 설계하고, 실시간 환율 연동 및 정산 프로세스를 자동화하여 금융 업무의 효율성을 극대화했습니다.",
    features: [
      "실시간 환율 연동 맞춤형 송금 수수료 자동 계산",
      "통합 정산 대시보드 (자금 흐름 검증 및 통제)",
      "단일 플랫폼 내 개인 지갑 및 비즈니스 계좌 통합 관리"
    ],
    role: [
      "실시간 트랜잭션 라이브 모니터링 시스템 구축",
      "환율 변동성 추천 및 시계열 차트 금융 인사이트 로직 개발",
      "글로벌 실시간 환율 정보 시각화 (Frankfurter/Koreaexim API)",
      "다중 통화 장부(Member-Wallet) 잔액 동기화 및 수수료 산정 로직"
    ],
    techStack: ["Java", "Spring Boot", "Querydsl", "JWT", "Redis", "React", "TypeScript", "MariaDB"],
    githubUrl: "https://github.com/RabbitHaru/Ex-Ledger.git",
    teamSize: "3명"
  },
  "weatherly": {
    id: "weatherly",
    title: "Weatherly",
    category: "사용자 맞춤형 날씨 기반 서비스",
    image: "/weatherly-real.png",
    background: "기상청 데이터를 기반으로 사용자에게 실시간 기상 정보와 더불어 상황에 맞는 스타일 제안을 제공하기 위해 개발되었습니다.",
    description: "사용자의 위치 정보를 기반으로 기온별 의류 데이터를 매칭하고, 기상 통계 대시보드와 커뮤니티 기능을 결합한 종합 날씨 라이프스타일 서비스입니다.",
    features: [
      "실시간 기온, 미세먼지, 습도 정보 제공 (기상청 API)",
      "기온별 세분화된 의류 데이터 자동 매칭 시스템",
      "지역별/온도별 기상 변화 통계 대시보드",
      "사용자 착장 공유 커뮤니티"
    ],
    role: [
      "관리자 대시보드 및 통계 데이터 시각화 페이지 구축",
      "날씨 기반 옷차림 추천/상세보기 핵심 비즈니스 로직 전담",
      "Kakao Map API 기반 지역별 실시간 기상 시각화",
      "기상 정보 분석 및 통계 지표 변환 백엔드 로직 설계"
    ],
    techStack: ["Java", "Spring Boot", "Thymeleaf", "MariaDB", "jQuery", "Kakao Map API"],
    githubUrl: "https://github.com/RabbitHaru/projectWeatherly.git",
    teamSize: "3명"
  },
  "verti": {
    id: "verti",
    title: "Verti",
    category: "커피 원두 판매 및 정보 제공 플랫폼",
    image: "/verti-real.png",
    background: "커피 원두에 대한 상세 정보 제공과 함께 직접 구매할 수 있는 이커머스 기능을 결합한 브랜드 플랫폼입니다.",
    description: "원두의 정의와 특징을 소개하는 브랜딩 페이지를 시작으로, 회원가입과 주문이 가능한 커머스 시스템을 1인 개발로 구축했습니다.",
    features: [
      "커피 원두 상세 정보 제공 및 브랜딩 페이지",
      "회원 인증 및 게시판 소통 기능",
      "검색 및 페이징 처리가 포함된 게시판 설계",
      "유지보수성이 높은 Spring MVC 기반 아키텍처"
    ],
    role: [
      "Spring MVC 아키텍처를 적용한 데이터 처리/화면 분리 설계",
      "회원가입/인증 및 게시판 시스템 전 계층 구현",
      "Coffee 브랜딩 페이지 전체 디자인 및 퍼블리싱 (100%)",
      "JDBC 기반 효율적인 데이터 무결성 보장"
    ],
    techStack: ["Java", "Spring Boot", "Spring JDBC", "MariaDB", "JSP", "Maven", "jQuery"],
    githubUrl: "https://github.com/Genomia14/Verti.git",
    teamSize: "1인 개발"
  }
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projectsData[id];

  if (!project) {
    notFound();
  }

  return (
    <main>
      <Navbar />
      <article style={{ paddingTop: '100px', minHeight: '100vh' }}>
        <div className="container" style={{ paddingBottom: 'var(--space-xl)' }}>
          {/* Back Button */}
          <Link href="/" style={{ color: 'var(--fg-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: 'var(--space-md)' }}>
            ← 메인으로 돌아가기
          </Link>

          {/* Header Section */}
          <div style={{ marginBottom: 'var(--space-lg)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: 'var(--space-sm)' }}>
              <div>
                <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '0.5rem' }}>{project.title}</h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--accent-primary)', fontWeight: 600 }}>{project.category}</p>
              </div>
              <div className="glass" style={{ padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>
                개발 인원: {project.teamSize}
              </div>
            </div>
            
            <div style={{ position: 'relative', width: '100%', height: '500px', borderRadius: '24px', overflow: 'hidden', margin: 'var(--space-md) 0' }} className="glass">
              <Image src={project.image} alt={project.title} fill style={{ objectFit: 'cover' }} priority />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-lg)' }}>
            {/* Left Column: Descriptions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              <section>
                <h2 style={{ fontSize: '1.75rem', marginBottom: 'var(--space-sm)', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>프로젝트 개요</h2>
                <p style={{ marginBottom: 'var(--space-sm)', fontSize: '1.1rem' }}>{project.background}</p>
                <p style={{ fontSize: '1.1rem' }}>{project.description}</p>
              </section>

              <section>
                <h2 style={{ fontSize: '1.75rem', marginBottom: 'var(--space-sm)', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>주요 기능 (Key Features)</h2>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  {project.features.map((feature, i) => (
                    <li key={i} style={{ fontSize: '1.05rem', listStyle: 'none', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--accent-primary)' }}>✔</span> {feature}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Right Column: Roles & Tech */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              <section className="glass" style={{ padding: 'var(--space-md)', borderRadius: '20px' }}>
                <h2 style={{ fontSize: '1.75rem', marginBottom: 'var(--space-sm)', color: 'var(--accent-secondary)' }}>나의 역할 (Role)</h2>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {project.role.map((item, i) => (
                    <li key={i} style={{ fontSize: '1.05rem', lineHeight: '1.5' }}>{item}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-sm)' }}>기술 스택 (Stack)</h3>
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                  {project.techStack.map(tech => (
                    <span key={tech} className="glass" style={{ padding: '0.4rem 0.8rem', borderRadius: '4px', fontSize: '0.85rem' }}>{tech}</span>
                  ))}
                </div>
              </section>

              <div style={{ marginTop: 'var(--space-md)' }}>
                <a href={project.githubUrl} target="_blank" className="btn-primary" style={{ width: '100%', textAlign: 'center', fontSize: '1.1rem' }}>
                  GitHub에서 전체 코드 보기
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
