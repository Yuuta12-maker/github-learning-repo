import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>マインドエンジニアリング・コーチング (MEC) | 森山雄太</title>
        <meta name="description" content="マインドエンジニアリング・コーチング(MEC)の公式サイト。コーチングのコーチとして活動する森山雄太が主宰するコーチングサービスです。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>MEC</h1>
          <p>マインドエンジニアリング・コーチング</p>
        </div>
        <nav className={styles.nav}>
          <Link href="/">ホーム</Link>
          <Link href="/about">MECについて</Link>
          <Link href="/services">サービス</Link>
          <Link href="/blog">ブログ</Link>
          <Link href="/contact">お問い合わせ</Link>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h2>あなたの可能性を最大限に引き出す</h2>
          <p>マインドエンジニアリング・コーチング (MEC) は、コーチングの専門知識を深め、実践スキルを磨くための専門プログラムです。</p>
          <div className={styles.cta}>
            <Link href="/contact" className={styles.button}>無料相談を予約する</Link>
          </div>
        </section>

        <section className={styles.features}>
          <h2>MECの特徴</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3>科学的アプローチ</h3>
              <p>最新の心理学と脳科学の知見に基づいたコーチング手法を学べます</p>
            </div>
            <div className={styles.featureCard}>
              <h3>実践重視</h3>
              <p>理論だけでなく実践的なスキルを身につけるためのトレーニングを提供</p>
            </div>
            <div className={styles.featureCard}>
              <h3>カスタマイズ可能</h3>
              <p>あなたのニーズに合わせたプログラムをカスタマイズして提供します</p>
            </div>
          </div>
        </section>

        <section className={styles.testimonials}>
          <h2>受講者の声</h2>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <p>「MECのプログラムを受けて、コーチとしての自信が格段に向上しました。クライアントの変化も目に見えて良くなりました。」</p>
              <p className={styles.author}>鈴木 智子 様</p>
            </div>
            <div className={styles.testimonialCard}>
              <p>「森山先生のアドバイスは具体的で実践的。すぐに現場で活かせる内容ばかりでした。」</p>
              <p className={styles.author}>田中 健太 様</p>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <h2>MEC</h2>
            <p>マインドエンジニアリング・コーチング</p>
          </div>
          <div className={styles.footerLinks}>
            <h3>メニュー</h3>
            <Link href="/">ホーム</Link>
            <Link href="/about">MECについて</Link>
            <Link href="/services">サービス</Link>
            <Link href="/blog">ブログ</Link>
            <Link href="/contact">お問い合わせ</Link>
          </div>
          <div className={styles.footerContact}>
            <h3>お問い合わせ</h3>
            <p>Email: info@mec-coaching.jp</p>
            <p>Tel: 03-XXXX-XXXX</p>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} マインドエンジニアリング・コーチング All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}
