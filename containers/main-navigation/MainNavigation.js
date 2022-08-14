import { useRouter } from "next/router";
import { memo } from "react";
import styled from "styled-components";
import List from "../../components/main-navigation/List";
import LogoLink from "../../components/main-navigation/LogoLink";

const StyledNavigation = styled.nav`
  flex: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: ${({ locale }) => (locale === "en" ? "2rem" : null)};
  margin-left: ${({ locale }) => (locale === "ar" ? "2rem" : null)};
`;

function Navigation() {
  const { locale } = useRouter();

  return (
    <StyledNavigation aria-label="Main" locale={locale}>
      <LogoLink />
      <List />
    </StyledNavigation>
  );
}

export default memo(Navigation);
