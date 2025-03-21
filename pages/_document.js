import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">
      <Head />
      <body>
        <script dangerouslySetInnerHTML={{
          __html: `
            // インラインスクリプトでローディングを非表示
            window.addEventListener('load', function() {
              var loading = document.querySelector('.loading');
              if (loading) {
                loading.classList.add('hidden');
              }
            });
          `,
        }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
