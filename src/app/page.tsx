import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      
      <section id="projects" className="container" style={{ padding: 'var(--space-xl) 0' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--space-md)' }}>주요 <span className="gradient-text">프로젝트</span></h2>
        <div className="grid-responsive">
          {/* Project 1: Ex-Ledger */}
          <div className="glass card-hover" style={{ borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', height: '200px', width: '100%' }}>
              <Image src="/ex-ledger.png" alt="Ex-Ledger" fill style={{ objectFit: 'cover', opacity: 0.8 }} />
              <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(0,0,0,0.6)', padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600 }}>Team: 3명</div>
            </div>
            <div style={{ padding: 'var(--space-md)', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '4px' }}>Ex-Ledger</h3>
              <p style={{ color: 'var(--accent-primary)', fontSize: '0.85rem', marginBottom: 'var(--space-xs)', fontWeight: 600 }}>글로벌 외환 송금 및 정산 통합 플랫폼</p>
              
              <div style={{ marginBottom: 'var(--space-sm)' }}>
                <p style={{ fontSize: '0.85rem', color: 'var(--fg-muted)', fontWeight: 600, marginBottom: '4px' }}>[담당 역할]</p>
                <ul style={{ fontSize: '0.9rem', paddingLeft: '1.2rem', marginBottom: 'var(--space-xs)' }}>
                  <li>실시간 트랜잭션 라이브 모니터링 시스템 구축</li>
                  <li>금융 인사이트 핵심 로직 및 시계열 차트 구현</li>
                  <li>다중 통화 장부 잔액 동기화 백엔드 로직 전담</li>
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: 'var(--space-md)' }}>
                {["Java", "Spring Boot", "Querydsl", "JWT", "Redis", "React"].map(tech => (
                  <span key={tech} style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', border: '1px solid var(--glass-border)' }}>{tech}</span>
                ))}
              </div>

              <div style={{ marginTop: 'auto' }}>
                <a href="https://github.com/RabbitHaru/Ex-Ledger.git" target="_blank" className="btn-primary" style={{ width: '100%', textAlign: 'center', fontSize: '0.9rem', display: 'block', padding: '0.6rem' }}>
                  GitHub 보기
                </a>
              </div>
            </div>
          </div>
          
          {/* Project 2: Weatherly */}
          <div className="glass card-hover" style={{ borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', height: '200px', width: '100%' }}>
              <Image src="/weatherly.png" alt="Weatherly" fill style={{ objectFit: 'cover', opacity: 0.8 }} />
              <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(0,0,0,0.6)', padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600 }}>Team: 3명</div>
            </div>
            <div style={{ padding: 'var(--space-md)', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '4px' }}>Weatherly</h3>
              <p style={{ color: 'var(--accent-primary)', fontSize: '0.85rem', marginBottom: 'var(--space-xs)', fontWeight: 600 }}>사용자 맞춤형 날씨 기반 서비스</p>
              
              <div style={{ marginBottom: 'var(--space-sm)' }}>
                <p style={{ fontSize: '0.85rem', color: 'var(--fg-muted)', fontWeight: 600, marginBottom: '4px' }}>[담당 역할]</p>
                <ul style={{ fontSize: '0.9rem', paddingLeft: '1.2rem', marginBottom: 'var(--space-xs)' }}>
                  <li>관리자 대시보드 및 통계 시각화 페이지 구축</li>
                  <li>날씨 기반 옷차림 추천 핵심 로직 전담 개발</li>
                  <li>기상 정보 분석 및 통계 지표 변환 백엔드 로직</li>
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: 'var(--space-md)' }}>
                {["Java", "Spring Boot", "Thymeleaf", "MariaDB", "Kakao API"].map(tech => (
                  <span key={tech} style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', border: '1px solid var(--glass-border)' }}>{tech}</span>
                ))}
              </div>

              <div style={{ marginTop: 'auto' }}>
                <a href="https://github.com/RabbitHaru/projectWeatherly.git" target="_blank" className="btn-primary" style={{ width: '100%', textAlign: 'center', fontSize: '0.9rem', display: 'block', padding: '0.6rem' }}>
                  GitHub 보기
                </a>
              </div>
            </div>
          </div>

          {/* Project 3: Verti */}
          <div className="glass card-hover" style={{ borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', height: '200px', width: '100%' }}>
              <Image src="/verti.png" alt="Verti" fill style={{ objectFit: 'cover', opacity: 0.8 }} />
              <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(0,0,0,0.6)', padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600 }}>1인 개발</div>
            </div>
            <div style={{ padding: 'var(--space-md)', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '4px' }}>Verti</h3>
              <p style={{ color: 'var(--accent-primary)', fontSize: '0.85rem', marginBottom: 'var(--space-xs)', fontWeight: 600 }}>커피 원두 브랜드 플랫폼</p>
              
              <div style={{ marginBottom: 'var(--space-sm)' }}>
                <p style={{ fontSize: '0.85rem', color: 'var(--fg-muted)', fontWeight: 600, marginBottom: '4px' }}>[담당 역할]</p>
                <ul style={{ fontSize: '0.9rem', paddingLeft: '1.2rem', marginBottom: 'var(--space-xs)' }}>
                  <li>Spring MVC 적용 체계적인 아키텍처 설계</li>
                  <li>회원 및 주문 게시판 시스템 전 계층 구현</li>
                  <li>Coffee 브랜딩 페이지 전체 디자인 및 퍼블리싱</li>
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: 'var(--space-md)' }}>
                {["Java", "Spring Boot", "Spring JDBC", "MariaDB", "JSP"].map(tech => (
                  <span key={tech} style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', border: '1px solid var(--glass-border)' }}>{tech}</span>
                ))}
              </div>

              <div style={{ marginTop: 'auto' }}>
                <a href="https://github.com/Genomia14/Verti.git" target="_blank" className="btn-primary" style={{ width: '100%', textAlign: 'center', fontSize: '0.9rem', display: 'block', padding: '0.6rem' }}>
                  GitHub 보기
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
