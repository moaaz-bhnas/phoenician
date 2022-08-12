import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navigation() {
  const t = useTranslations("Navigation");
  const { locale, locales, route } = useRouter();
  const otherLocale = locales?.find((cur) => cur !== locale);

  return (
    <div>
      {otherLocale && (
        <Link href={route} locale={otherLocale}>
          <a>{t("switchLocale", { locale: otherLocale })}</a>
        </Link>
      )}
    </div>
  );
}
