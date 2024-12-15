import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className="antialiased bg-cover bg-center bg-fixed min-h-screen relative"
        style={{ backgroundImage: `url(/images/flower.png)` }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
