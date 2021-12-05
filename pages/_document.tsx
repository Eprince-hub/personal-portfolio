import createEmotionServer from '@emotion/server/create-instance';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import createEmotionCache from '../utils/createEmotionCache';

// was throwing an error when used normal so i do it like this,, => It worked!
const fontLink =
  'https://fonts.googleapis.com/css2?family=Archivo+Black&family=Merriweather&family=Playball&display=swap';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/*   <link
            href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Merriweather&family=Playball&display=swap"
            rel="stylesheet"
          /> */}

          <link
            rel="stylesheet"
            href={fontLink}
            integrity="sha384-K+MFliLRYXEa1Xq0q2yrGhFSn+a+rYjWYGPJLRbIDlaLlE45xfgg8uhd/frO8QJR"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();

  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents emotion to render invalid HTML.
  // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      ...emotionStyleTags,
    ],
  };
};
