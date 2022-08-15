import { memo } from "react";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  flex: 0 50%;
  /* width: 25rem;
  height: 25rem; */
  position: relative;
`;

function Photo({ imagePath }) {
  return (
    <Container>
      <Image
        src={imagePath}
        // alt={t("imageAlt")} // to do
        alt="change" // to do
        layout="fill"
        objectFit="none"
        quality={100}
      />
    </Container>
  );
}

export default memo(Photo);
