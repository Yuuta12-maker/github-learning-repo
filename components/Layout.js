import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Layout({ children, title }) {
  const router = useRouter();
  const pageTitle = title ? `${title} | マインドエンジニアリング・コーチング` : 'マインドエンジニアリング・コーチング';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // モバイルメニューを閉じる
    const handleRouteChange = () => {
      setMobileMenuOpen(false);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="マインドエンジニアリング・コーチング（MEC）は、内部表現を操作し、認識と行動を変化させる技術です。" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Noto+Sans+JP:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet" />
        <meta name="theme-color" content="#c50502" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div className="container">
          <div className="logo">
            <Link href="/">
              <img src="/logo.svg" alt="マインドエンジニアリング・コーチング" width="200" height="50" />
            </Link>
          </div>
          <div className="header-content">
            <h1>マインドエンジニアリング・コーチング</h1>
            <p className="subtitle">MEC - 内部表現を操作し、認識と行動を変化させる技術</p>
          </div>
        </div>
      </header>

      <nav className={mobileMenuOpen ? "mobile-open" : ""}>
        <div className="container">
          <div className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul>
            <li>
              <Link href="/" className={router.pathname === '/' ? 'active' : ''}>
                ホーム
              </Link>
            </li>
            <li>
              <Link href="/overview" className={router.pathname === '/overview' ? 'active' : ''}>
                概要
              </Link>
            </li>
            <li>
              <Link href="/mechanism" className={router.pathname === '/mechanism' ? 'active' : ''}>
                メカニズム
              </Link>
            </li>
            <li>
              <Link href="/representation" className={router.pathname === '/representation' ? 'active' : ''}>
                内部表現の操作
              </Link>
            </li>
            <li>
              <Link href="/homeostasis" className={router.pathname === '/homeostasis' ? 'active' : ''}>
                ホメオスタシス
              </Link>
            </li>
            <li>
              <Link href="/altered-state" className={router.pathname === '/altered-state' ? 'active' : ''}>
                変性意識
              </Link>
            </li>
            <li>
              <Link href="/anchor" className={router.pathname === '/anchor' ? 'active' : ''}>
                アンカーとトリガー
              </Link>
            </li>
            <li>
              <Link href="/case-studies" className={router.pathname === '/case-studies' ? 'active' : ''}>
                実践例・ケーススタディ
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <main className="container page-transition">
        <article>
          {children}
        </article>
      </main>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h3>MEC</h3>
              <p>マインドエンジニアリング・コーチング</p>
            </div>
            <div className="footer-links">
              <div className="footer-nav">
                <h4>サイトマップ</h4>
                <ul>
                  <li><Link href="/">ホーム</Link></li>
                  <li><Link href="/overview">概要</Link></li>
                  <li><Link href="/mechanism">メカニズム</Link></li>
                  <li><Link href="/case-studies">実践例</Link></li>
                </ul>
              </div>
              <div className="footer-contact">
                <h4>お問い合わせ</h4>
                <p>メールアドレス: info@mec-coaching.jp</p>
                <p>電話番号: 03-XXXX-XXXX</p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} マインドエンジニアリング・コーチング - 森山雄太</p>
            <p>あなたの内部表現を変化させ、より良い人生を創造するために</p>
          </div>
        </div>
      </footer>
    </>
  );
}