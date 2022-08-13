import { memo } from "react";
import styled from "styled-components";
import List from "../../components/main-navigation/List";
import LogoLink from "../../components/main-navigation/LogoLink";

const StyledNavigation = styled.nav``;

function Navigation() {
  return (
    <StyledNavigation aria-label="Main">
      <LogoLink />
      <List />
    </StyledNavigation>
  );
}

export default memo(Navigation);
