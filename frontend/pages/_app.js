import Parse from "parse";

import "../styles/globals.css";

Parse.serverURL = "http://localhost:1337/parse";
Parse.initialize("myAppId", "");
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
