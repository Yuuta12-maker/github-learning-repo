import Link from 'next/link';

export default function Mechanism() {
  return (
    <section id="mechanism">
      <h2>マインドエンジニアリングのメカニズム</h2>
      <p>マインドエンジニアリング・コーチングは、以下の主要なメカニズムを活用して効果を発揮します。それぞれのメカニズムは相互に関連し、相乗効果を生み出します。</p>
      
      <div className="mechanism-grid">
        <div className="mechanism-card">
          <h3>内部表現の操作</h3>
          <p>内部表現は、言葉、イメージ、五感への働きかけによって操作されます。言葉で具体的なイメージを想起させたり、感情を揺さぶることで内部表現に影響を与えます。</p>
          <Link href="/representation" className="button small">詳細を見る</Link>
        </div>

        <div className="mechanism-card">
          <h3>ホメオスタシス（恒常性維持機能）の利用</h3>
          <p>ホメオスタシスは、生体が現状を維持しようとする機能です。内部表現に変化が起きると、身体もそれに合わせて変化しようとします。</p>
          <Link href="/homeostasis" className="button small">詳細を見る</Link>
        </div>

        <div className="mechanism-card">
          <h3>変性意識の利用</h3>
          <p>変性意識とは、現実世界から意識が離れた状態です。この状態では暗示やイメージが内部表現に浸透しやすくなります。</p>
          <Link href="/altered-state" className="button small">詳細を見る</Link>
        </div>

        <div className="mechanism-card">
          <h3>アンカーとトリガーの利用</h3>
          <p>アンカーとは、特定の心理状態や体感状態を脳内に記憶させることで、トリガーによっていつでもその状態を引き出せるようにするものです。</p>
          <Link href="/anchor" className="button small">詳細を見る</Link>
        </div>
      </div>

      <div className="nav-buttons">
        <Link href="/overview" className="button">概要に戻る</Link>
        <Link href="/representation" className="button next">内部表現の操作について</Link>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'メカニズム'
    }
  };
}