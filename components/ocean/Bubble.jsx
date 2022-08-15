import { memo } from "react";
import styled, { css, keyframes } from "styled-components";

const bubble = keyframes`
  0% {
    opacity: 0;
    bottom: -4rem;
  }

  50% {
    opacity: .4;
  }

  100% {
    opacity: 0;
    bottom: 100%;
  }
`;

const Container = styled.div`
  width: ${({ size }) => size + "rem"};
  height: ${({ size }) => size + "rem"};
  padding: 1rem;

  position: absolute;
  bottom: -4rem;
  left: ${({ left }) => left + "%"};

  animation: ${({ duration, delay }) =>
    css`
      ${bubble} ${duration}s ease-out ${delay}s infinite
    `};
  transition: box-shadow 0.1s;

  &:hover {
    > div {
      box-shadow: 0 0 20px 5px rgba(255, 255, 255, 1);
    }
  }
`;

const StyledBubble = styled.div`
  height: 100%;
  border-radius: 50%;
  background-color: #fff;
`;

function Bubble(props) {
  return (
    <Container {...props}>
      <StyledBubble />
    </Container>
  );
}

export default memo(Bubble);
