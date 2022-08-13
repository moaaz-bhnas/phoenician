import { memo } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import styled from "styled-components";
import { rawLink } from "../../utils/Style";

const StyledItem = styled.li`
  margin-right: 0.5rem;
`;

const StyledLink = styled.a`
  ${rawLink}

  display: block;
  padding: 0.5rem;
  font-weight: 500;
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
