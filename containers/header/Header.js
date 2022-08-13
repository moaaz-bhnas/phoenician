import { memo } from "react";
import styled from "styled-components";
import LanguageSwitch from "../../components/header/LanguageSwitch";
import MainNavigation from "../main-navigation/MainNavigation";

const StyledHeader = styled.header``;

const Title = styled.h1``;

function Header() {
  return (
    <StyledHeader>
      <Title>Phoenician</Title>

      <MainNavigation />

      <LanguageSwitch />
    </StyledHeader>
  );
}

export default memo(Header);
