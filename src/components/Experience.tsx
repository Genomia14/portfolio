import Image from "next/image";

export default function Experience() {
  const introCards = [
    {
      title: "성장과정",
      subtitle: "[하드웨어의 논리 위에 소프트웨어의 창의성을 더하다]",
      content: `초등학교 시절, 파이썬을 독학하며 게임 모딩을 통해 제가 작성한 코드로 세상이 변하는 무한한 가능성에 매료되었습니다. 사람들의 즐거움을 직접 만들어내는 경험은 자연스럽게 컴퓨터 전반에 대한 호기심으로 이어졌습니다. 이를 위해 전자공학을 전공하며 하드웨어와 시스템 구조의 근간을 학습했습니다. 하지만 회로 설계와 임베디드 프로젝트를 거치며, 정적인 하드웨어에 생명력을 불어넣고 유연한 가치를 창출하는 핵심은 결국 소프트웨어의 창의성임을 깨달았습니다.\n\n하드웨어 계층에 대한 깊은 이해는 오히려 소프트웨어 논리가 어떻게 물리적으로 구현되는지 명확히 인식하게 해주었고, 이는 즉각적인 피드백을 주고받는 소프트웨어 개발에 몰입하게 되는 계기가 되었습니다. 시스템의 뿌리부터 이해하고 사용자에게 최상의 가치를 전달하는 개발자가 되겠다는 확신으로, 이제는 소프트웨어 분야에서 저의 모든 역량을 발휘하고자 합니다.`
    },
    {
      title: "기술적 역량",
      subtitle: "[설계 원칙과 시스템 최적화를 아우르는 실전형 역량]",
      content: `Java와 Spring Boot 기반의 백엔드 설계를 중심으로 프론트엔드 구현까지 아우르는 실전 역량을 쌓아왔습니다. 첫 개인 프로젝트인 원두 판매 플랫폼 Verti에서 Spring MVC 패턴과 JDBC를 엄격히 적용하며 시스템 설계의 기초와 데이터베이스 커넥션 관리의 원리를 체득했습니다. 이를 바탕으로 사용자 맞춤형 날씨 서비스인 Weatherly 프로젝트에서는 기상청 및 외부 API를 통합하여 체감 온도 기반의 추천 알고리즘을 설계하고, Kakao Map과 Chart.js를 연동해 복잡한 데이터를 직관적인 대시보드로 시각화하는 능력을 키웠습니다. 더 나아가 글로벌 외환 송금 및 정산 플랫폼인 Ex-Ledger를 통해 Redis 캐싱과 Querydsl로 시스템 부하를 줄이고 조회 성능을 개선하는 최적화 과정을 경험했으며, Spring Security와 JWT를 활용해 금융 서비스의 안정성과 보안성을 강화했습니다. 이러한 경험을 토대로 서비스 도메인의 특성에 맞춰 기술적 문제를 해결하고, 확장 가능한 시스템을 구현하는 개발자로 성장해 왔습니다.`
    },
    {
      title: "성격",
      subtitle: "[유연한 친화력과 명확한 소통의 힘]",
      content: `저의 장점은 처음 만난 사람과도 스스럼없이 어울리는 유연한 친화력입니다. 낯선 환경에서도 먼저 다가가 경직된 분위기를 유연하게 푸는 역할을 합니다. 훈련소 시절, 서로 어색한 동기들에게 먼저 말을 건네며 대화를 주도해 모두가 편안하게 소통할 수 있는 분위기를 만들었습니다. 또한, 학창시절 소외된 친구가 있으면 먼저 다가가 다른 친구들에게 섞일 수 있도록 돕는 가교 역할을 자처했습니다.\n\n이러한 성격은 팀 프로젝트에서 명확한 기술적 소통으로 이어졌습니다. 협업 시 팀원 간 정보 격차가 발생하지 않도록, 변수 명과 기술 용어 통일을 제안하고 구현할 세부 기능을 확실하게 전달했습니다. 또한 팀원들이 만든 기능을 주기적으로 서로 확인하고 피드백하는 상황을 주도했습니다. 이 과정을 통해 개발 방향이 어긋나는 것을 조기에 방지하고 통합 과정에 발생할 수 있는 오류를 최소화하여 완성도를 높였습니다.`
    },
    {
      title: "지원동기 및 포부",
      subtitle: "[정교한 로직 설계로 서비스의 신뢰를 구현하는 개발자]",
      content: `복잡한 비즈니스 로직을 명확한 시스템으로 구축하고, 이를 통해 사용자에게 실질적인 편의를 제공하는 과정에서 개발자로서의 확신을 얻었습니다. 모든 프로젝트를 통해 단순한 기능 구현을 넘어, 안정적이고 확장 가능한 시스템의 중요성을 깨닫는 계기가 되었습니다.\n\n입사 후, 비즈니스 도메인을 기술로 빠르게 치환하는 신입이 되겠습니다. 시스템 전체를 조망하는 논리적 사고를 바탕으로 회사의 개발 문화와 도메인을 누구보다 빠르게 파악하겠습니다. 나아가 백엔드의 견고함과 프론트엔드의 유연함을 겸비한 개발자로 성장하겠습니다. Spring Boot 기반의 백엔드 역량을 고도화하여 복잡한 로직 설계와 데이터 처리 최적화에 기여함과 동시에, React 등 현대적인 UI 도구를 능숙하게 다루어 기획 의도를 완벽히 소프트웨어로 구현해내는 대체 불가능한 인재가 되겠습니다.`
    }
  ];

  return (
    <section id="experience" className="container" style={{ padding: 'var(--space-xl) 0' }}>
      <div style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--space-md)' }}>자기 <span className="gradient-text">소개</span></h2>
        
        {/* Profile Header */}
        <div className="glass" style={{ display: 'inline-flex', padding: 'var(--space-md)', borderRadius: '24px', alignItems: 'center', gap: 'var(--space-md)', textAlign: 'left', maxWidth: '100%' }}>
          <div style={{ position: 'relative', width: '150px', height: '150px', borderRadius: '20px', overflow: 'hidden', flexShrink: 0 }}>
            <Image 
              src="/profile.jpg" 
              alt="김성연 프로필" 
              fill 
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>김성연</h3>
            <p style={{ color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>Backend Engineer</p>
            <p style={{ fontSize: '0.95rem', color: 'var(--fg-muted)', maxWidth: '400px', marginBottom: '1rem' }}>
              "하드웨어의 논리 위에 소프트웨어의 창의성을 더하여 <br/> 안정적이고 가치 있는 서버를 구축합니다."
            </p>
            <a href="https://drive.google.com/drive/folders/1BSzkWOZ1YlhuihcXVitR1Q6L6MLwZCQe?usp=sharing" target="_blank" style={{ color: 'var(--accent-secondary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              📁 포트폴리오 PPT 확인하기 →
            </a>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
        {introCards.map((card, i) => (
          <div key={i} className="glass" style={{ padding: 'var(--space-lg)', borderRadius: '24px' }}>
            <div style={{ marginBottom: 'var(--space-sm)' }}>
              <span style={{ color: 'var(--accent-secondary)', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{card.title}</span>
              <h3 style={{ fontSize: '1.6rem', marginTop: '0.5rem', marginBottom: 'var(--space-sm)' }}>{card.subtitle}</h3>
            </div>
            <div style={{ whiteSpace: 'pre-wrap', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--fg-main)', opacity: 0.9 }}>
              {card.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
