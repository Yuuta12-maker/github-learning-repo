import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  
  return (
    <section id="home">
      <h2>マインドエンジニアリング・コーチングへようこそ</h2>
      <div className="concept-card">
        <h3>内部表現を操作し、認識と行動を変化させる技術</h3>
        <p>マインドエンジニアリング・コーチング（MEC）は、言葉やイメージを用いて、人の内部表現を操作する技術です。内部表現は人が認識する世界そのもので、五感から得られる情報で構成されています。この内部表現を操作することで、人の認識、感情、行動を変化させることを目的とします。</p>
        <p>このサイトでは、MECの基本的な概念からメカニズム、実践例まで詳しく解説しています。メニューから各項目をクリックして詳細をご覧ください。</p>
        <div className="home-buttons">
          <Link href="/overview" className="button">概要を見る</Link>
          <Link href="/case-studies" className="button">実践例を見る</Link>
        </div>
        <div className="visual-aid">
          <div className="icon">
            <svg viewBox="0 0 24 24" width="64" height="64" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a9 9 0 0 1 9 9c0 3.1-1.5 5.5-2.5 7L12 22l-6.5-4C4.5 16.5 3 14.1 3 11a9 9 0 0 1 9-9z"></path>
              <circle cx="12" cy="11" r="4"></circle>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'ホーム'
    }
  };
}