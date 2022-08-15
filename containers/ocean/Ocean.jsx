import { memo } from "react";
import styled, { keyframes } from "styled-components";
import Bubble from "../../components/ocean/Bubble";
import { sizes } from "../../utils/Style";

const wave = keyframes`
  0% {
    transform: rotate(-2deg);
  }

  50% {
    transform: rotate(2deg);
  }

  100% {
    transform: rotate(-2deg);
  }
`;

const StyledOcean = styled.div`
  height: calc(100vh - ${sizes.height.header});
  overflow: hidden;

  background: rgb(193, 251, 250);
  background: linear-gradient(
    rgba(78, 234, 242, 1) 0%,
    rgba(0, 43, 68, 1) 100%
  );

  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: -15rem;
    right: -15rem;
    top: -7rem;
    height: 10rem;
    border-radius: 100%;
    background-color: #fff;
    opacity: 0.2;
    transform: rotate(-2deg);
    animation: ${wave} 10s ease-in infinite;
  }

  &::after {
    top: -6.5rem;
    animation-delay: 5s;
  }
`;

function randomInRange(start, end) {
  return Math.random() * (end - start) + start;
}

const bubbles = Array(7)
  .fill(null)
  .map((_) => ({
    duration: randomInRange(15, 25),
    delay: randomInRange(0, 10),
    left: randomInRange(0, 90),
    size: randomInRange(3, 5),
  }));

function Ocean() {
  return (
    <StyledOcean>
      {bubbles.map((bubble, index) => (
        <Bubble
          key={index}
          duration={bubble.duration}
          delay={bubble.delay}
          left={bubble.left}
          size={bubble.size}
        />
      ))}
    </StyledOcean>
  );
}

export default memo(Ocean);
