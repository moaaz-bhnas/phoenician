import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    line-height: 155%;
    color: #333;
    background-color: #faf9f7;
    margin: 0;
    padding: 0;
  }
`;

export const sizes = {
  maxWidth: {
    default: "60rem",
  },
  // borderRadius: {
  //   default: "3px",
  // },
  // width: {
  //   card: "30rem",
  // },
  // height: {
  //   header: "3.7rem",
  // },
  gutter: {
    default: "1rem",
    smallScreen: ".8rem",
  },
};

export const mediaQueries = {
  main: "768px",
  // reviewForm: {
  //   row: "550px",
  //   rating: "420px",
  // },
  // review: {
  //   main: "31.6rem",
  //   reaction: "450px",
  // },
  // likersPopup: {
  //   main: "26.6rem",
  // },
};

export const containerStyles = css`
  max-width: ${sizes.maxWidth.default};
  margin-left: auto;
  margin-right: auto;
  padding-left: ${sizes.gutter.default};
  padding-right: ${sizes.gutter.default};

  @media screen and (max-width: ${mediaQueries.main}) {
    padding-left: ${sizes.gutter.smallScreen};
    padding-right: ${sizes.gutter.smallScreen};
  }
`;

export const rawList = css`
  list-style: none;
  margin: 0;
  padding-left: 0;
`;

export const rawLink = css`
  text-decoration: none;
  color: inherit;
`;

export const offScreen = css`
  position: absolute;
  left: -200rem;
`;
