import { memo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslations } from "next-intl";
import styled from "styled-components";
import { rawLink } from "../../utils/Style";

const StyledLink = styled.a`
  ${rawLink}

  /* background-color: #f2d1b3; */
  padding: 0.5rem;
  font-weight: 500;
  border-radius: 1rem;
  border: 1px solid;
`;

function LanguageSwitch() {
  const t = useTranslations("Navigation");
  const { locale: currentLocale, locales, route } = useRouter();
  const otherLocale = locales?.find((locale) => locale !== currentLocale);

  return (
    <Link passHref href={route} locale={otherLocale}>
      <StyledLink>{t("switchLocale", { locale: otherLocale })}</StyledLink>
    </Link>
  );
}

export default memo(LanguageSwitch);
