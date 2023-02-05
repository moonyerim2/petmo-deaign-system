import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
${({ theme }) => css`
  @font-face {
    font-family: "Pretendard";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
  }

  @font-face {
    font-family: "Pretendard";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff")
      format("woff");
    font-weight: 500;
  }

  @font-face {
    font-family: "Pretendard";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff")
      format("woff");
    font-weight: 700;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    line-height: 150%;
    vertical-align: baseline;
  }

  body {
    background-color: ${theme.color.white};
    color: ${theme.color.black};
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, "Malgun Gothic",
      "맑은 고딕", helvetica, "Apple SD Gothic Neo", sans-serif;
    font-weight: ${theme.fontWeight.regular};
  }

  img,
  picture {
    display: block;
    max-width: 100%;
  }

  ol,
  ul {
    list-style: none;
  }

  button {
    background-color: transparent;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${theme.fontWeight.regular};
  }

  a,
  a:hover,
  a:active {
    color: ${theme.color.black};
    text-decoration: none;
  }
`}
`;

export default GlobalStyle;
