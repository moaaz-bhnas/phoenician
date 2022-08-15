import { memo } from "react";
import styled from "styled-components";
import LanguageSwitch from "../../components/header/LanguageSwitch";
import data from "../../utils/data";
import { containerStyles, offScreen } from "../../utils/Style";
import MainNavigation from "../main-navigation/MainNavigation";

const StyledHeader = styled.header`
  background-color: #fff;
  border-bottom: 1px solid #ccc;
`;

const Title = styled.h1`
  ${offScreen}
`;

const Container = styled.div`
  ${containerStyles}
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  display: flex;
  align-items: center;
`;

function Header() {
  return (
    <StyledHeader>
      <Title>{data.title}</Title>

      <Container>
        <MainNavigation />

        <LanguageSwitch />
      </Container>
    </StyledHeader>
  );
}

export default memo(Header);