import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    line-height: 155%;
    color: #32838c;
    margin: 0;
    padding: 0;
  }
`;

export const theme = {
  text: {
    default: "#32838c",
    // brand: "#1f70e6",
    // grey: "#737373",
    // link: "#4d4dff",
    // rating1: "#F00000",
    // rating2: "#9E9600",
    // rating3: "#857E00",
    // rating4: "#43A83E",
    // rating5: "#2A6827",
  },
  bg: {
    sand: "#f2d1b3",
    // default: "#F0F2F5",
    // header: "#fff",
    // grey1: "#e8e9eb",
    // grey2: "#d8dadd",
    // grey3: "#c8c7c6",
    // grey4: "#727274",
    // dark: "#333",
    // twitter: "#0D91E3",
    // google: "#DB4437",
    // like: "#E81728",
  },
  // border: {
  //   grey2: "#d8dadd",
  //   dark: "#333",
  // },
  // icon: {
  //   default: "#606266",
  //   bottomLight: "#777677",
  //   bottomDark: "#333",
  // },
};

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
