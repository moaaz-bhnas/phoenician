import { memo } from "react";
import Link from "next/link";
import styled from "styled-components";
import Logo from "../logo/Logo";

const StyledLink = styled.a``;

function LogoLink() {
  return (
    <Link passHref href="/">
      <StyledLink>
        <Logo />
      </StyledLink>
    </Link>
  );
}

export default memo(LogoLink);
