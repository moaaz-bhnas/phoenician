import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import styled from "styled-components";
import Banner from "../containers/banner/Banner";
import Layout from "../containers/layout/Layout";

const P = styled.p``;

export default function Index() {
  const t = useTranslations("Index");
  const { locale } = useRouter();

  return (
    <Layout>
      <Banner />
    </Layout>
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
