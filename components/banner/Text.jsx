import { memo } from "react";
import { useTranslations } from "next-intl";
import styled from "styled-components";
import Title from "./Title";
import usePage from "../../hooks/usePage";
import capitalize from "../../utils/helpers/capitalize";
import { theme } from "../../utils/Style";

const StyledText = styled.div`
  flex: 0 50%;

  display: flex;
  justify-content: flex-end;

  padding: 3.5rem 10rem;
`;

const Container = styled.div``;

const P = styled.p`
  font-size: 1.2rem;
  line-height: 1.35;
  max-width: 20rem;
`;

function Text() {
  const page = usePage();
  const t = useTranslations(`${capitalize(page)}.Banner`);

  return (
    <StyledText>
      <Container>
        <Title />
        <P>{t("body")}</P>
      </Container>
    </StyledText>
  );
}

export default memo(Text);
