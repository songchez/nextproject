import Script from "next/script";

import Layout from "../components/Layout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  function kakaoInit() {
    // 페이지가 로드되면 실행
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
    console.log(window.Kakao.isInitialized());
  }

  return (
    <Layout>
      <Component {...pageProps} />
      <Script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        onLoad={kakaoInit}
      ></Script>
    </Layout>
  );
}
