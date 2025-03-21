// メインJavaScriptファイル

document.addEventListener('DOMContentLoaded', function() {
  // スクロールアニメーション
  const handleScroll = () => {
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    
    const elementInView = (el, scrollOffset = 100) => {
      const elementTop = el.getBoundingClientRect().top;
      return elementTop <= window.innerHeight - scrollOffset;
    };
    
    scrollElements.forEach((el) => {
      if (elementInView(el)) {
        el.classList.add('revealed');
      }
    });

    // ナビゲーションのスクロール効果
    const nav = document.querySelector('nav');
    if (window.scrollY > 10) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    // トップに戻るボタン
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
      if (window.scrollY > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
  };

  // ページ読み込み時にローディングを非表示
  const loading = document.querySelector('.loading');
  if (loading) {
    setTimeout(() => {
      loading.classList.add('hidden');
    }, 500);
  }
  
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // 初期チェック
  
  // モバイルメニュートグル
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
      const nav = document.querySelector('nav');
      nav.classList.toggle('mobile-open');
      
      // ボディのスクロールをロック/アンロック
      if (nav.classList.contains('mobile-open')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });
  }
  
  // トップに戻るボタン
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});

// ページ遷移アニメーション
const transitionElements = document.querySelectorAll('.page-transition');
transitionElements.forEach(el => {
  el.classList.add('active-page');
});