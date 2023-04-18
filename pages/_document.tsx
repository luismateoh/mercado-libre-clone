import { Html, Head, Main, NextScript } from 'next/document';
export default function Document() {
  return (
    <Html lang='es'>
      <link href='./media/icons/favicon.svg' rel='icon' type='image/x-icon' />
      <meta content='#fff159' name='theme-color' />
      <Head />
      <body className='font-roboto'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
