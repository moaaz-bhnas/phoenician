import { memo } from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledItem = styled.li``;

const StyledLink = styled.a``;

function Item({ link }) {
  return (
    <StyledItem>
      <Link passHref href={link.href}>
        <StyledLink>{link.text}</StyledLink>
      </Link>
    </StyledItem>
  );
}

export default memo(Item);
