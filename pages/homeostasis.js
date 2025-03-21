import Link from 'next/link';

export default function Homeostasis() {
  return (
    <section id="homeostasis">
      <h2>ホメオスタシス（恒常性維持機能）の利用</h2>
      <div className="concept-card">
        <h3>ホメオスタシスとは</h3>
        <p>ホメオスタシスとは、生体が内部環境を一定に保とうとする自己調節機能のことです。体温調節や血糖値の維持など、身体の様々な機能がこの原理に基づいて働いています。</p>
        
        <h3>マインドエンジニアリングにおけるホメオスタシスの役割</h3>
        <p>マインドエンジニアリングでは、このホメオスタシスを内部表現の変化を定着させる重要なメカニズムとして活用します。</p>
        
        <ul>
          <li><strong>内部表現と身体の連動</strong>：内部表現に変化が起きると、身体もそれに合わせて変化しようとします。例えば、「指がくっつく」という内部表現が形成されると、実際に指がくっつくように身体が反応します。</li>
          <li><strong>フィードバックループ</strong>：内部表現の変化→身体の変化→内部表現のさらなる強化という循環が生まれます。この循環によって、変化が定着します。</li>
          <li><strong>ホメオスタシスの同調</strong>：人間は他者の状態に同調する性質を持っています。変性意識下では特にこの同調が強まり、他者の内部表現に影響を受けやすくなります。</li>
        </ul>

        <h3>実践での活用法</h3>
        <p>ホメオスタシスを活用するためのテクニック：</p>
        <ul>
          <li><strong>イデオモーター反応の利用</strong>：意識せずとも身体が反応する現象を利用して、内部表現の変化を促進します。</li>
          <li><strong>小さな成功体験の積み重ね</strong>：小さな変化を実感させることで、ホメオスタシスのフィードバックループを強化します。</li>
          <li><strong>グループダイナミクスの活用</strong>：集団でのワークでは、ホメオスタシスの同調を利用して、変化を促進することができます。</li>
          <li><strong>身体感覚へのフォーカス</strong>：内部表現の変化に伴う身体感覚に注意を向けさせることで、変化を定着させます。</li>
        </ul>
        
        <div className="visual-aid">
          <div className="icon">
            <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12" y2="16"></line>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="nav-buttons">
        <Link href="/representation" className="button">内部表現の操作に戻る</Link>
        <Link href="/altered-state" className="button next">変性意識について</Link>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'ホメオスタシス'
    }
  };
}