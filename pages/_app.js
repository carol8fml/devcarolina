import { GlobalStyle } from "../styles/globalStyles";

const MyApp = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);
export default MyApp;