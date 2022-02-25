import { createGlobalStyle } from "styled-components";
import typography from "./typography";
import colors from "./colors";

export const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
* {
  box-sizing: border-box;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
    font-weight: 400;
    line-height: 1.5;
    overflow-x: hidden;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
  background: ${colors.secundary};
  font-family: ${typography.text};
  color: ${colors.primary};
}
ol, ul {
    list-style: none;
}
a {
  color: inherit;
  text-decoration: none;
}
.container,
.container-fluid {
  margin-right: auto;
  margin-left: auto;
}
.container-fluid {
  padding-right: 2rem;
  padding-left: 2rem;
}
@media only screen and (min-width: 48em) {
  .container {
    width: 49rem;
  }
}
@media only screen and (min-width: 64em) {
  .container {
    width: 65rem;
  }
}
@media only screen and (min-width: 75em) {
  .container {
    width: 76rem;
  }
}
`;