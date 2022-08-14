import { memo } from "react";
import { useTranslations } from "next-intl";
import styled from "styled-components";
import { containerStyles } from "../../utils/Style";

const Article = styled.article`
  ${containerStyles}
`;

const Title = styled.h2``;

const P = styled.p``;

function Banner() {
  const t = useTranslations("Index.Banner");

  return (
    <Article>
      <Title>{t("title")}</Title>
      <P>{t("body")}</P>
    </Article>
  );
}

export default memo(Banner);
