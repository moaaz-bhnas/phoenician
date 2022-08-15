import { memo } from "react";
import styled from "styled-components";
import usePage from "../../hooks/usePage";
import { useTranslations } from "next-intl";
import capitalize from "../../utils/helpers/capitalize";

const StyledTitle = styled.h2`
  font-size: 2rem;
  line-height: 1.2;
`;

const Line = styled.span``;

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
