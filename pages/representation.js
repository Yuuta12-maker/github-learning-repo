import Link from 'next/link';

export default function Representation() {
  return (
    <section id="representation">
      <h2>内部表現の操作</h2>
      <div className="concept-card">
        <h3>内部表現とは何か</h3>
        <p>内部表現とは、私たちが外界から受け取った感覚情報を脳内で処理し、構築する主観的な現実のことです。同じ現実でも、人によって内部表現は大きく異なります。</p>
        
        <h3>内部表現の操作方法</h3>
        <ul>
          <li><strong>言葉による操作</strong>：特定の言葉や表現を使うことで、相手の心理状態や内部表現に影響を与えることができます。例えば、「重い」という言葉を使うと、実際に身体が重く感じられることがあります。</li>
          <li><strong>イメージによる操作</strong>：具体的なイメージを想起させることで、その場にないものでも内部表現として体験させることができます。演劇や小説が人の感情を動かすのはこの原理によるものです。</li>
          <li><strong>五感への働きかけ</strong>：視覚、聴覚、触覚、嗅覚、味覚など、五感に対する刺激を用いて内部表現を形成することができます。例えば、特定の音楽を聴くことで、過去の記憶や感情が呼び起こされることがあります。</li>
          <li><strong>言葉とイメージの組み合わせ</strong>：言葉とイメージを組み合わせることで、より強力な内部表現の操作が可能になります。例えば、「青空を見上げてください。その青さを感じてください」と言いながら、実際に上を見上げる動作を促すことで、より鮮明な体験が得られます。</li>
        </ul>

        <h3>実践のポイント</h3>
        <p>内部表現の操作を実践する際には、以下のポイントに注意することが重要です：</p>
        <ul>
          <li>クライアントの既存の内部表現を尊重し、理解することから始める</li>
          <li>具体的で鮮明なイメージを描写する言葉を選ぶ</li>
          <li>抽象的な概念よりも、感覚的な表現を用いる</li>
          <li>クライアントのフィードバックに敏感に反応し、内部表現の変化を観察する</li>
          <li>強制せず、誘導的に内部表現の変化を促す</li>
        </ul>
        
        <div className="visual-aid">
          <div className="icon">
            <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 18h.01"></path>
              <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"></path>
              <path d="M12 8v4"></path>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="nav-buttons">
        <Link href="/mechanism" className="button">メカニズムに戻る</Link>
        <Link href="/homeostasis" className="button next">ホメオスタシスについて</Link>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: '内部表現の操作'
    }
  };
}