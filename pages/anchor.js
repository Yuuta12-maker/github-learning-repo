import Link from 'next/link';

export default function Anchor() {
  return (
    <section id="anchor">
      <h2>アンカーとトリガーの利用</h2>
      <div className="concept-card">
        <h3>アンカーとトリガーの基本概念</h3>
        <p>アンカーとは、特定の心理状態や体感状態を特定の刺激と結びつけることで、後にその刺激（トリガー）によって同じ状態を再現できるようにする技術です。パブロフの犬の実験と同様の原理に基づいていますが、より複雑な心理状態にも適用されます。</p>
        
        <h3>アンカーとトリガーのメカニズム</h3>
        <ul>
          <li><strong>神経学的連合</strong>：特定の体験と特定の刺激が同時に起こると、脳内で両者が連合します</li>
          <li><strong>条件付け</strong>：繰り返しによって、その連合が強化されます</li>
          <li><strong>再現性</strong>：十分に強化されたアンカーは、トリガーの提示だけで元の状態を再現できます</li>
          <li><strong>多感覚アンカー</strong>：視覚、聴覚、触覚など、複数の感覚を組み合わせることで、より強力なアンカーが形成されます</li>
        </ul>

        <h3>アンカリングの手順</h3>
        <ol>
          <li><strong>リソース状態の生成</strong>：アンカーしたい心理状態や体感状態（自信、リラックス、集中力など）を生成します</li>
          <li><strong>状態のピークでのアンカリング</strong>：その状態が最も強い瞬間に、独特なトリガー（特定の身体接触、ジェスチャー、言葉など）を提示します</li>
          <li><strong>解放</strong>：状態が弱まる前にトリガーを解放します</li>
          <li><strong>ニュートラル状態への回帰</strong>：一旦、中立的な状態に戻ります</li>
          <li><strong>テスト</strong>：トリガーを再度提示して、目的の状態が再現されるかをテストします</li>
          <li><strong>強化</strong>：必要に応じて繰り返し、アンカーを強化します</li>
        </ol>

        <h3>マインドエンジニアリングでの活用例</h3>
        <ul>
          <li><strong>リソース状態の即時アクセス</strong>：ストレス状況下で、自信や冷静さなどのリソース状態に即座にアクセスできるようにします</li>
          <li><strong>状態変化のトリガー</strong>：自動的に状態を変化させるトリガーを設定することで、望ましい行動パターンを促進します</li>
          <li><strong>恐怖の中和</strong>：恐怖や不安と結びついた刺激に、新たに肯定的な状態をアンカーすることで、恐怖反応を中和します</li>
          <li><strong>学習の強化</strong>：好奇心や興奮などの学習に適した状態をアンカーすることで、学習効率を高めます</li>
        </ul>

        <h3>倫理的配慮</h3>
        <p>アンカーとトリガーの技術は強力なため、以下の倫理的配慮が必要です：</p>
        <ul>
          <li>クライアントの許可を得た上で実施する</li>
          <li>操作性や依存性を避けるために、クライアント自身が活用できる技術として伝える</li>
          <li>ネガティブな状態をアンカーしない</li>
          <li>クライアントの自律性を尊重する</li>
        </ul>
        
        <div className="visual-aid">
          <div className="icon">
            <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 8v4l2 2"></path>
              <path d="M17.5 17.5 16 16"></path>
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="nav-buttons">
        <Link href="/altered-state" className="button">変性意識に戻る</Link>
        <Link href="/case-studies" className="button next">実践例・ケーススタディへ</Link>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'アンカーとトリガー'
    }
  };
}