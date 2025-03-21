import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  
  // スクロールアニメーション用の効果
  useEffect(() => {
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('.scroll-reveal');
      
      const elementInView = (el, scrollOffset = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return elementTop <= window.innerHeight - scrollOffset;
      };
      
      scrollElements.forEach((el) => {
        if (elementInView(el)) {
          el.classList.add('revealed');
        }
      });

      // ナビゲーションのスクロール効果
      const nav = document.querySelector('nav');
      if (window.scrollY > 10) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }

      // トップに戻るボタン
      const backToTop = document.querySelector('.back-to-top');
      if (backToTop) {
        if (window.scrollY > 500) {
          backToTop.classList.add('visible');
        } else {
          backToTop.classList.remove('visible');
        }
      }
    };

    // ページ読み込み時にローディングを非表示
    const loading = document.querySelector('.loading');
    if (loading) {
      setTimeout(() => {
        loading.classList.add('hidden');
      }, 500);
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初期チェック
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // トップに戻る関数
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <>
      {/* ローディングインジケーター */}
      <div className="loading">
        <div className="loader"></div>
      </div>
      
      {/* ヒーローセクション */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title animate fadeIn">
              <span>マインド</span>エンジニアリング<br/>コーチングで<span>変化</span>を創る
            </h1>
            <p className="hero-description animate fadeIn delay-200">
              内部表現を操作し、認識と行動を変化させる革新的なコーチング手法で、あなたの無限の可能性を引き出します
            </p>
            <div className="hero-buttons animate fadeIn delay-300">
              <Link href="/overview" className="button">
                詳しく知る
              </Link>
              <Link href="/case-studies" className="button next">
                成功事例を見る
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* コンセプトセクション */}
      <section id="concept" className="scroll-reveal">
        <div className="container">
          <h2>マインドエンジニアリング・コーチングとは</h2>
          <div className="concept-card">
            <h3>内部表現を操作し、認識と行動を変化させる技術</h3>
            <p>マインドエンジニアリング・コーチング（MEC）は、言葉やイメージを用いて、人の内部表現を操作する技術です。内部表現は人が認識する世界そのもので、五感から得られる情報で構成されています。この内部表現を操作することで、人の認識、感情、行動を変化させることを目的とします。</p>
            <p>従来のコーチングとは異なり、MECは脳科学と認知心理学の最新の知見に基づいた体系的アプローチを採用しています。潜在意識にアクセスし、深層からの変化を促進します。</p>
            <div className="visual-aid">
              <div className="icon animate pulse">
                <svg viewBox="0 0 24 24" width="64" height="64" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a9 9 0 0 1 9 9c0 3.1-1.5 5.5-2.5 7L12 22l-6.5-4C4.5 16.5 3 14.1 3 11a9 9 0 0 1 9-9z"></path>
                  <circle cx="12" cy="11" r="4"></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 特徴セクション */}
      <section id="features" className="features-section scroll-reveal">
        <div className="container">
          <h2>MECの特徴</h2>
          <div className="features-grid">
            <div className="feature-card scroll-reveal">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="feature-title">効率的な変化</h3>
              <p className="feature-description">内部表現に直接働きかけることで、通常のコーチングよりも短期間で大きな変化を実現します。</p>
            </div>
            
            <div className="feature-card scroll-reveal">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                  <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                  <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3 className="feature-title">カスタマイズ可能</h3>
              <p className="feature-description">一人ひとりの思考パターンや価値観に合わせたアプローチで、より深い変化を促します。</p>
            </div>
            
            <div className="feature-card scroll-reveal">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                  <line x1="6" y1="1" x2="6" y2="4"></line>
                  <line x1="10" y1="1" x2="10" y2="4"></line>
                  <line x1="14" y1="1" x2="14" y2="4"></line>
                </svg>
              </div>
              <h3 className="feature-title">持続的な効果</h3>
              <p className="feature-description">単なる行動変容ではなく、内部の認知構造自体を変えるため、長期的で持続的な効果を発揮します。</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 事例紹介セクション */}
      <section id="showcase" className="scroll-reveal">
        <div className="container">
          <h2>変化の実例</h2>
          <div className="case-studies-grid">
            <div className="case-study-card scroll-reveal">
              <h3>ビジネスリーダーのマインドセット変革</h3>
              <div className="case-content">
                <div className="case-problem">
                  <h4>課題</h4>
                  <p>大手企業の役員が意思決定の遅さと自信の欠如に悩んでいました。</p>
                </div>
                <div className="case-approach">
                  <h4>アプローチ</h4>
                  <p>内部表現の操作とアンカリング技術を用いて、成功体験を現在の状況に結びつけました。</p>
                </div>
                <div className="case-result">
                  <h4>結果</h4>
                  <p>意思決定のスピードが40%向上し、チーム全体の生産性が高まりました。</p>
                </div>
              </div>
            </div>
            
            <div className="case-study-card scroll-reveal">
              <h3>スポーツ選手のパフォーマンス向上</h3>
              <div className="case-content">
                <div className="case-problem">
                  <h4>課題</h4>
                  <p>プロアスリートが大事な試合での緊張とプレッシャーを克服できずにいました。</p>
                </div>
                <div className="case-approach">
                  <h4>アプローチ</h4>
                  <p>変性意識状態とビジュアライゼーション技術を組み合わせて、心理的なブロックを解除しました。</p>
                </div>
                <div className="case-result">
                  <h4>結果</h4>
                  <p>試合中の集中力が劇的に向上し、シーズン最高のパフォーマンスを達成しました。</p>
                </div>
              </div>
            </div>
          </div>
          <div className="home-buttons">
            <Link href="/case-studies" className="button">
              すべての事例を見る
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA セクション */}
      <section id="cta" className="cta-section scroll-reveal">
        <div className="container">
          <h2 className="cta-title">あなたの可能性を解き放つ</h2>
          <p className="cta-text">
            マインドエンジニアリング・コーチングであなたの人生とビジネスに革命を起こしませんか？
            一人ひとりに合わせたカスタマイズされたアプローチで、内部から変化をもたらします。
          </p>
          <Link href="/overview" className="cta-button">
            詳しく知る
          </Link>
        </div>
      </section>
      
      {/* トップに戻るボタン */}
      <div className="back-to-top" onClick={scrollToTop}>
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'ホーム'
    }
  };
}