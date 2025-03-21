import Link from 'next/link';

export default function AlteredState() {
  return (
    <section id="altered-state">
      <h2>変性意識の利用</h2>
      <div className="concept-card">
        <h3>変性意識状態とは</h3>
        <p>変性意識状態とは、通常の覚醒状態とは異なる意識状態のことを指します。日常的な意識から離れ、より内側に意識が向かっている状態です。この状態では、暗示やイメージが内部表現に浸透しやすくなります。</p>
        
        <h3>変性意識状態の特徴</h3>
        <ul>
          <li><strong>現実感覚の変化</strong>：現実世界と内的体験の境界があいまいになります</li>
          <li><strong>時間感覚の変化</strong>：時間の流れが伸縮したように感じられます</li>
          <li><strong>感覚の鋭敏化または鈍化</strong>：特定の感覚が鋭くなる一方で、他の感覚は鈍くなることがあります</li>
          <li><strong>批判的思考の低下</strong>：論理的・分析的な思考よりも、直感的・イメージ的な思考が優位になります</li>
          <li><strong>暗示への受容性の増加</strong>：通常より暗示を受け入れやすくなります</li>
        </ul>

        <h3>変性意識状態の生成方法</h3>
        <p>変性意識状態は様々な方法で生成することが可能です：</p>
        <ul>
          <li><strong>呼吸法</strong>：特定のリズムでの呼吸により、意識状態を変化させることができます</li>
          <li><strong>誘導的イメージ</strong>：イメージを用いた誘導により、意識を内側へと導きます</li>
          <li><strong>言語パターン</strong>：特定の言語パターンや声のトーンにより、変性意識を促進します</li>
          <li><strong>リズム</strong>：一定のリズムの音や動きにより、意識状態を変化させます</li>
          <li><strong>フォーカス</strong>：特定の対象への持続的な注意の集中により、変性意識を生成します</li>
        </ul>

        <h3>マインドエンジニアリングでの活用</h3>
        <p>変性意識状態は以下のような場面で特に効果を発揮します：</p>
        <ul>
          <li><strong>内部表現の変化の加速</strong>：変性意識下では内部表現の変化がスムーズに起こります</li>
          <li><strong>リソース状態へのアクセス</strong>：過去の成功体験や内的リソースに容易にアクセスできます</li>
          <li><strong>制限的信念の発見と再構築</strong>：普段は気づきにくい制限的信念が表面化し、変更しやすくなります</li>
          <li><strong>体感の変化の促進</strong>：身体感覚の変化がより鮮明に体験され、ホメオスタシスを活性化します</li>
        </ul>
        
        <div className="visual-aid">
          <div className="icon">
            <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2"></path>
              <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8"></path>
              <path d="M6 12h.01"></path>
              <path d="M18 12h.01"></path>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="nav-buttons">
        <Link href="/homeostasis" className="button">ホメオスタシスに戻る</Link>
        <Link href="/anchor" className="button next">アンカーとトリガーについて</Link>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: '変性意識'
    }
  };
}