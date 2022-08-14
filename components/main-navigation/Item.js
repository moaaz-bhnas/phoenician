import { memo } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import styled from "styled-components";
import { rawLink, theme } from "../../utils/Style";

const StyledItem = styled.li`
  margin-right: 0.5rem;
`;

const StyledLink = styled.a`
  ${rawLink}

  display: block;
  padding: 0.5rem;
  font-weight: 500;

  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    bottom: 0.7rem;
    left: 0.5rem;
    right: 0.5rem;
    height: 0.5rem;
    z-index: -1;
    background-color: ${theme.bg.sand};
    opacity: 0.5;

    transition-property: height, bottom;
    transition-duration: 0.25s;
  }

  &:hover,
  &:focus {
    &::before {
      bottom: 0.5rem;
      height: 1.5rem;
    }
  }
`;

function Item({ link }) {
  const t = useTranslations("Navigation");

  return (
    <StyledItem>
      <Link passHref href={link.href}>
        <StyledLink>{t(link.text)}</StyledLink>
      </Link>
    </StyledItem>
  );
}

export default memo(Item);
