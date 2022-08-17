import { useRouter } from "next/router";
import { memo } from "react";
import styled from "styled-components";
import LanguageSwitch from "../../components/header/LanguageSwitch";
import data from "../../utils/data";
import { containerStyles, offScreen, sizes } from "../../utils/Style";
import MainNavigation from "../main-navigation/MainNavigation";

const StyledHeader = styled.header`
  background-color: #fff;
`;

const Title = styled.h1`
  ${offScreen}
`;

const Container = styled.div`
  ${containerStyles}
  height: ${sizes.height.header};

  display: flex;
  align-items: center;
`;

function Header() {
  const { locale } = useRouter();

  return (
    <StyledHeader>
      <Title locale={locale}>{data.title}</Title>

      <Container>
        <MainNavigation />

        <LanguageSwitch />
      </Container>
    </StyledHeader>
  );
}

export default memo(Header);
