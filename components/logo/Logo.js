import { memo } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

function Logo({ width = 50 }) {
  const t = useTranslations("Navigation");

  return (
    <Image
      src="/images/logo.svg"
      alt={t("logoAlt")}
      width={width}
      height={width}
      layout="fixed"
      quality={100}
      priority={true}
    />
  );
}

export default memo(Logo);
