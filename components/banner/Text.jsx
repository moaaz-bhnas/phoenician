import { memo } from "react";
import { useTranslations } from "next-intl";
import styled from "styled-components";
import Title from "./Title";
import usePage from "../../hooks/usePage";
import capitalize from "../../utils/helpers/capitalize";

const StyledText = styled.div`
  flex: 0 50%;

  padding: 3.5rem;
`;

const P = styled.p`
  font-size: 1.1rem;
`;

function Text() {
  const page = usePage();
  const t = useTranslations(`${capitalize(page)}.Banner`);

  return (
    <StyledText>
      <Title />
      <P>{t("body")}</P>
    </StyledText>
  );
}

export default memo(Text);
