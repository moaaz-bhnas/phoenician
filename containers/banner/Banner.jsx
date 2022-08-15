import { memo } from "react";
import { useTranslations } from "next-intl";
import styled from "styled-components";
import { containerStyles, sizes } from "../../utils/Style";
import Text from "../../components/banner/Text";
import Photo from "../../components/banner/Photo";

const Article = styled.article`
  /* ${containerStyles} */
  padding: 0;

  display: flex;
  height: calc(100vh - ${sizes.height.header});
  color: #fff;
  background-color: #0084a6;
`;

function Banner({ page, imagePath }) {
  return (
    <Article>
      <Text />
      <Photo imagePath={imagePath} />
    </Article>
  );
}

export default memo(Banner);
