import Link from 'next/link';

export default function CaseStudies() {
  return (
    <section id="case-studies">
      <h2>実践例・ケーススタディ</h2>
      <p>マインドエンジニアリング・コーチングは様々な状況で応用できます。以下に具体的な実践例をいくつか紹介します。</p>
      
      <div className="case-studies-grid">
        <div className="case-study-card">
          <h3>ケース１：プレゼンテーション不安の克服</h3>
          <div className="case-content">
            <div className="case-problem">
              <h4>状況</h4>
              <p>クライアントは30代の営業職で、大人数の前でのプレゼンテーションが極度に不安という問題を持っていました。過去に失敗体験があり、その記憶がトリガーとなり、プレゼン直前には心拍数上昇、手の震え、思考の混乱が生じていました。</p>
            </div>
            <div className="case-approach">
              <h4>アプローチ</h4>
              <ol>
                <li><strong>内部表現の変換</strong>: 過去の失敗体験を「学習の機会」として再フレーム化</li>
                <li><strong>アンカーの確立</strong>: 成功体験（商談をいただいた場面や小規模グループでの成功）に検討し、その際の身体感覚と自信の現れをアンカーとして設定</li>
                <li><strong>変性意識の利用</strong>: プレゼン前に短時間の呼吸法とイメージトレーニングで変性意識状態を生成</li>
                <li><strong>トリガー設定</strong>: 深呼吸と特定の手の仕草（親指と人差し指をつまむ動作）をトリガーとして設定</li>
              </ol>
            </div>
            <div className="case-result">
              <h4>結果</h4>
              <p>4週間のトレーニング後、クライアントは重要なプレゼンテーションを自信を持って行うことができました。不安のレベルは測定で約70%減少し、パフォーマンス評価も大幅に改善しました。現在もトリガーを使用して身体反応を制御し、無理なくプレゼンを行えるようになりました。</p>
            </div>
          </div>
        </div>

        <div className="case-study-card">
          <h3>ケース２：チームパフォーマンスの向上</h3>
          <div className="case-content">
            <div className="case-problem">
              <h4>状況</h4>
              <p>あるベンチャー企業の開発チームで2名のメンバー間の激しい対立が継続し、チーム全体の士気と生産性が低下していました。当事者同士は互いに否定的な内部表現を持ち、恐怖・嫌悪・怒りの感情がチーム全体に広がっていました。</p>
            </div>
            <div className="case-approach">
              <h4>アプローチ</h4>
              <ol>
                <li><strong>チームワークショップ</strong>: ホメオスタシスの同調を利用した変性意識ワークを実施</li>
                <li><strong>内部表現の変換</strong>: 各メンバーが持つ他者についてのネガティブな表現を確認し、ポジティブなフレームへの変換をサポート</li>
                <li><strong>共有ビジョンの確立</strong>: チーム全体で共有する目標と共通の内部表現を形成</li>
                <li><strong>チームアンカーの確立</strong>: チームの成功体験をアンカーとして、チームのシンボルや合言葉をトリガーとして設定</li>
              </ol>
            </div>
            <div className="case-result">
              <h4>結果</h4>
              <p>2ヶ月のプログラム実施後、チームの雰囲気と協力関係が大幅に改善しました。対立していた2名は互いの強みを認め合い、それぞれの得意分野でリーダーシップを発揮するようになりました。チームの生産性は約35%向上し、株価にもポジティブな影響が出ました。</p>
            </div>
          </div>
        </div>

        <div className="case-study-card">
          <h3>ケース３：スポーツパフォーマンスの向上</h3>
          <div className="case-content">
            <div className="case-problem">
              <h4>状況</h4>
              <p>プロレベルのテニス選手が試合中のクラッチポイントでのメンタルブロックに悩んでいました。クラッチポイントでの失点が繰り返され、「重要な場面で失敗する」という内部表現が形成されていました。</p>
            </div>
            <div className="case-approach">
              <h4>アプローチ</h4>
              <ol>
                <li><strong>内部対話の変換</strong>: 試合中の自己对话をポジティブなステートメントに変換</li>
                <li><strong>変性意識を用いたイメージトレーニング</strong>: クラッチポイントでの成功シーンを高い臨場感で繰り返しイメージ</li>
                <li><strong>身体的アンカーの確立</strong>: 特定の身体動作（ラケットを握り直す動作と深呼吸）を集中力と自信の状態にリンク</li>
                <li><strong>ホメオスタシスフィードバックの活用</strong>: 心拍と呼吸が増えるという生理反応を「準備完了のシグナル」として再フレーム</li>
              </ol>
            </div>
            <div className="case-result">
              <h4>結果</h4>
              <p>6週間のトレーニング後、選手はクラッチポイントでの勝率が62%から78%に向上しました。試合中のメンタルの安定性が向上し、重要なトーナメントで最初の優勝を収めることができました。選手自身がストレス下でもパフォーマンスを維持できるという自信を得ました。</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="nav-buttons">
        <Link href="/anchor" className="button">アンカーとトリガーに戻る</Link>
        <Link href="/" className="button next">ホームに戻る</Link>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: '実践例・ケーススタディ'
    }
  };
}