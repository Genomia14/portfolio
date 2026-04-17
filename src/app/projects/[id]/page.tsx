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
  background: string[]; // 개발목표
  description: string;
  features: string[]; // 담당페이지
  role: string[]; // 상세 역할
  techStack: string[];
  githubUrl: string;
  teamSize: string;
  diagrams?: { title: string; src: string }[];
}

const projectsData: Record<string, ProjectData> = {
  "ex-ledger": {
    id: "ex-ledger",
    title: "Ex-Ledger",
    category: "글로벌 외환 송금 및 정산 통합 플랫폼",
    image: "/ex-ledger-real.png",
    background: [
      "외부 API를 활용한 실시간 다중 통화 환율 정보 및 금융 인사이트 제공",
      "실시간 환율이 연동된 맞춤형 송금 수수료 및 예상 수령액 자동 계산 기능",
      "개인 및 기업의 자금 흐름을 검증하고 통제할 수 있는 통합 정산 대시보드 제공",
      "단일 플랫폼 내에서 개인 지갑과 비즈니스 전용 계좌를 동시에 관리하는 통합 환경 제공"
    ],
    description: "메인페이지, 개인계좌관리, 기업계좌관리, 개인/기업 송금, 거래 상세 내역 등을 포함한 핵심 금융 도메인을 전담하여 개발했습니다.",
    features: [
      "메인페이지 및 대시보드 시각화",
      "개인/기업 계좌 통합 관리 시스템",
      "실시간 환율 기반 송금 프로세스",
      "정산 및 거래 상세 내역 관리"
    ],
    role: [
      "실시간 트랜잭션 라이브 모니터링 시스템 구축",
      "환율 변동성 추천 및 시계열 차트 금융 인사이트 로직 개발",
      "글로벌 실시간 환율 정보 시각화 (Frankfurter/Koreaexim API)",
      "다중 통화 장부(Member-Wallet) 잔액 동기화 및 수수료 산정 로직"
    ],
    techStack: ["Java", "Spring Boot", "Spring Security", "Querydsl", "Spring Data JPA", "JWT", "Redis", "Sonner", "React", "TypeScript", "Chart.js", "TailwindCSS", "MariaDB", "KoreaExim Api", "PortOne"],
    githubUrl: "https://github.com/RabbitHaru/Ex-Ledger.git",
    teamSize: "3명",
    diagrams: [
      { title: "Use Case Diagram", src: "/ex-ledger-usecase.png" },
      { title: "Entity Relationship Diagram (ERD)", src: "/ex-ledger-erd.png" }
    ]
  },
  "weatherly": {
    id: "weatherly",
    title: "Weatherly",
    category: "사용자 맞춤형 날씨 기반 서비스",
    image: "/weatherly-real.png",
    background: [
      "기상청 API를 활용해 사용자의 위치나 선택 지역의 실시간 기온, 미세먼지 습도, 강수 확률 정보 제공",
      "기온별로 세분화된 의류 데이터를 매칭하여 사용자에게 최적화된 스타일 제안",
      "지역별/온도별 기상 변화 추이를 관리자와 사용자가 확인할 수 있는 대시보드 제공",
      "사용자들이 실제 착장 사진을 공유하고 의견을 나눌 수 있는 소통 공간 제공"
    ],
    description: "실시간 날씨 지도가 포함된 메인페이지와 온도 기반의 옷차림 추천 및 상세 기능을 전담 개발했습니다.",
    features: [
      "메인페이지 (실시간 날씨 지도)",
      "옷차림 페이지",
      "옷차림 상세추천 시스템",
      "기상 통계 관리자/사용자 대시보드"
    ],
    role: [
      "관리자 대시보드 및 통계 데이터 시각화 페이지 구축",
      "날씨 기반 옷차림 추천/상세보기 핵심 비즈니스 로직 전담",
      "Kakao Map API 기반 지역별 실시간 기상 시각화",
      "Kma, Air Korea API 연동 및 데이터 가공 백엔드 로직 설계"
    ],
    techStack: ["Java", "JavaScript", "Thymeleaf", "Spring Boot", "Spring Security", "MariaDB", "jQuery", "Kma API", "Air Korea API", "Kakao API", "ipinfo.io"],
    githubUrl: "https://github.com/RabbitHaru/projectWeatherly.git",
    teamSize: "3명",
    diagrams: [
      { title: "Use Case Diagram", src: "/weatherly-usecase.png" },
      { title: "Entity Relationship Diagram (ERD)", src: "/weatherly-erd.png" }
    ]
  },
  "verti": {
    id: "verti",
    title: "Verti",
    category: "커피 원두 판매 및 정보 제공 플랫폼",
    image: "/verti-real.png",
    background: [
      "커피나무의 씨앗인 원두의 정의와 특징, 종류를 상세히 소개하는 브랜딩 페이지 구축",
      "회원가입과 로그인을 통한 사용자 인증 지원 및 고객 소통을 위한 게시판 기능 구현",
      "검색 및 페이징 처리가 포함된 효율적인 게시판 아키텍처 설계",
      "Spring MVC를 적용하여 데이터 처리와 화면 구성을 체계적으로 분리해 유지 보수성 확보"
    ],
    description: "커피 브랜딩 페이지 전체 디자인 및 퍼블리싱부터 하위 커머스 시스템의 전 계층을 1인 개발로 구축했습니다.",
    features: [
      "커피 브랜딩 페이지",
      "사용자 인증 및 권한 관리",
      "검색/페이징 지원 게시판",
      "원두 판매 및 정보 레이아웃"
    ],
    role: [
      "Spring MVC 아키텍처를 적용한 데이터 처리/화면 분리 설계",
      "Spring JDBC 및 HikariCP를 활용한 효율적인 커넥션 관리",
      "회원가입/인증 및 게시판 시스템 전 계층 구현",
      "Coffee 브랜딩 페이지 전체 디자인 및 JSP 퍼블리싱 (100%)"
    ],
    techStack: ["Java", "Spring Boot", "Spring JDBC", "MariaDB", "HikariCP", "Maven", "JSP", "HTML5", "CSS3", "JavaScript", "jQuery", "MVC"],
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
                <h2 style={{ fontSize: '1.75rem', marginBottom: 'var(--space-sm)', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>개발 목표</h2>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', paddingLeft: '0' }}>
                  {project.background.map((goal, i) => (
                    <li key={i} style={{ fontSize: '1.1rem', listStyle: 'none', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                       <span style={{ color: 'var(--accent-primary)' }}>•</span> {goal}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 style={{ fontSize: '1.75rem', marginBottom: 'var(--space-sm)', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>담당 페이지</h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--fg-main)', marginBottom: 'var(--space-sm)' }}>{project.description}</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {project.features.map((feature, i) => (
                    <span key={i} className="glass" style={{ padding: '0.4rem 0.8rem', borderRadius: '8px', fontSize: '0.9rem' }}>{feature}</span>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column: Roles & Tech */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              <section className="glass" style={{ padding: 'var(--space-md)', borderRadius: '20px' }}>
                <h2 style={{ fontSize: '1.75rem', marginBottom: 'var(--space-sm)', color: 'var(--accent-secondary)' }}>핵심 성과 및 역할</h2>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {project.role.map((item, i) => (
                    <li key={i} style={{ fontSize: '1.05rem', lineHeight: '1.5' }}>{item}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-sm)' }}>사용 기술 (Tech Stack)</h3>
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                  {project.techStack.map(tech => (
                    <span key={tech} className="glass" style={{ padding: '0.4rem 0.8rem', borderRadius: '4px', fontSize: '0.85rem', border: '1px solid var(--accent-primary)' }}>{tech}</span>
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

          {/* Diagram Section */}
          {project.diagrams && (
            <section style={{ marginTop: 'var(--space-xl)' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: 'var(--space-md)', textAlign: 'center' }}><span className="gradient-text">Architecture & Diagrams</span></h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100%, 1fr))', gap: 'var(--space-lg)' }}>
                {project.diagrams.map((diagram, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--fg-muted)' }}>{diagram.title}</h3>
                    <div className="glass" style={{ position: 'relative', width: '100%', padding: 'var(--space-sm)', borderRadius: '16px', overflow: 'hidden' }}>
                      <img src={diagram.src} alt={diagram.title} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
      <Footer />
    </main>
  );
}
