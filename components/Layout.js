import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Layout({ children, title }) {
  const router = useRouter();
  const pageTitle = title ? `${title} | マインドエンジニアリング・コーチング` : 'マインドエンジニアリング・コーチング';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="マインドエンジニアリング・コーチング（MEC）は、内部表現を操作し、認識と行動を変化させる技術です。" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </Head>

      <header>
        <div className="container">
          <h1>マインドエンジニアリング・コーチング</h1>
          <p className="subtitle">MEC - 内部表現を操作し、認識と行動を変化させる技術</p>
        </div>
      </header>

      <nav>
        <div className="container">
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

      <main className="container">
        <article>
          {children}
        </article>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2025 マインドエンジニアリング・コーチング - 森山雄太</p>
          <p>あなたの内部表現を変化させ、より良い人生を創造するために</p>
        </div>
      </footer>
    </>
  );
}