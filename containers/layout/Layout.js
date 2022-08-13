import { memo } from "react";
import styled from "styled-components";
import Header from "../header/Header";

const Main = styled.main``;

function Layout({ children }) {
  return (
    <>
      <Header />

      <Main>{children}</Main>
    </>
  );
}

export default memo(Layout);
