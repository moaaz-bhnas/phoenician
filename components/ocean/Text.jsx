import { memo, useCallback } from "react";
import styled, { keyframes } from "styled-components";
import { useTranslations } from "next-intl";
import { containerStyles } from "../../utils/Style";

const StyledText = styled.div`
  ${containerStyles}

  padding-top: 4rem;
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  color: #173a3a;
  font-size: 2.75rem;
  display: flex;
  flex-direction: column;
`;

const Line = styled.span`
  margin-bottom: 2rem;
`;

const P = styled.p``;

function Text() {
  const t = useTranslations("Index.Ocean");

  const spaceIndex = t("title").indexOf(" ");

  return (
    <StyledText>
      <Title>
        <Line>{t("title").slice(0, spaceIndex)}</Line>
        <Line>{t("title").slice(spaceIndex + 1)}</Line>
      </Title>

      <P>{t("body")}</P>
    </StyledText>
  );
}

export default memo(Text);
