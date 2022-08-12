import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import styled from "styled-components";
import PageLayout from "../components/PageLayout";

const P = styled.p``;

export default function Index() {
  const t = useTranslations("Index");
  const { locale } = useRouter();

  return (
    <PageLayout title={t("title")}>
      {/* <P>
        {t("description", {
          locale,
          code: (children) => <Code>{children}</Code>,
        })}
      </P> */}
    </PageLayout>
  );
}

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: {
        ...require(`../messages/shared/${locale}.json`),
        ...require(`../messages/index/${locale}.json`),
      },
    },
  };
}
