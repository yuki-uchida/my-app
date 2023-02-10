import "../styles/global.css";
import { useState } from "react";
function MyApp({ Component, pageProps }) {
  const [daisyTheme, _] = useState("lofi");
  return (
    <>
      <div data-theme={daisyTheme}>
        <Component {...pageProps} />

        <footer className="footer p-10 bg-neutral text-neutral-content">
          <div>
            <span className="footer-title">SkyWay Samples</span>
            <a className="link link-hover">P2P</a>
            <a className="link link-hover">TURN</a>
            <a className="link link-hover">P2P Room</a>
            <a className="link link-hover">SFU Room</a>
          </div>
          <div>
            <span className="footer-title">Author</span>
            <a href="https://twitter.com/yuki_wtz" className="link link-hover">
              Twitter
            </a>
            <a href="https://zenn.dev/yuki_uchida" className="link link-hover">
              Zenn
            </a>
            <a href="https://qiita.com/yuki_uchida" className="link link-hover">
              Qiita
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MyApp;
