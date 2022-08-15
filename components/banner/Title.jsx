import { memo } from "react";
import styled, { keyframes } from "styled-components";
import usePage from "../../hooks/usePage";
import { useTranslations } from "next-intl";
import capitalize from "../../utils/helpers/capitalize";
import { theme } from "../../utils/Style";

const StyledTitle = styled.h2`
  font-size: 2rem;
  line-height: 1.2;
`;

const expand = keyframes`
  from {
    right: 20rem;
  }

  to {
    right: 0.5rem
  }
`;

const Line = styled.span`
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 1.25rem;
    bottom: 0;
    left: -0.5rem;
    background-color: ${theme.bg.sand};
    opacity: 0.5;
    animation: ${expand} 0.3s ease-out forwards;
  }

  &:nth-of-type(2) {
    &::before {
      animation-delay: 0.15s;
    }
  }
`;

const Br = styled.br``;

function Title() {
  const page = usePage();
  const t = useTranslations(`${capitalize(page)}.Banner`);

  return (
    <StyledTitle>
      <Line>{t("title.line1")}</Line>
      <Br />
      <Line>{t("title.line2")}</Line>
    </StyledTitle>
  );
}

export default memo(Title);
