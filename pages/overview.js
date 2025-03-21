import Link from 'next/link';

export default function Overview() {
  return (
    <section id="overview">
      <h2>マインドエンジニアリングの基本概念</h2>
      <div className="concept-card">
        <h3>概要</h3>
        <p>マインドエンジニアリングとは、<strong>言葉やイメージを用いて、人の内部表現を操作する技術</strong>です。内部表現は人が認識する世界そのもので、五感から得られる情報で構成されています。この内部表現を操作することで、人の認識、感情、行動を変化させることを目的とします。</p>
        <p>マインドエンジニアリングの基本となるのは、人間の認知プロセスと感情反応の深い理解です。私たちの認識は客観的な現実を映し出したものではなく、脳内で作り出された「内部表現」なのです。</p>
        <p>内部表現は、意識的・無意識的に形成され、過去の経験、信念、感情状態、生理的状態など、様々な要因の影響を受けています。マインドエンジニアリング・コーチングでは、この内部表現を意図的に操作することで、クライアントの持つ制限的な信念や感情パターンを変化させ、より効果的な行動や状態を引き出すことを目指します。</p>
        <div className="visual-aid">
          <div className="icon">
            <svg viewBox="0 0 24 24" width="64" height="64" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a9 9 0 0 1 9 9c0 3.1-1.5 5.5-2.5 7L12 22l-6.5-4C4.5 16.5 3 14.1 3 11a9 9 0 0 1 9-9z"></path>
              <circle cx="12" cy="11" r="4"></circle>
            </svg>
          </div>
          <p>内部表現の操作による認識・感情・行動の変化</p>
        </div>
      </div>
      <div className="nav-buttons">
        <Link href="/" className="button">ホームに戻る</Link>
        <Link href="/mechanism" className="button next">メカニズムについて</Link>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: '概要'
    }
  };
}