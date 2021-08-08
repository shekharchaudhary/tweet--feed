import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  text-align: center;
  height: 100px;
`;

const loadingAnimation = keyframes`
    0%,
    80%,
    100% {
    box-shadow: 0 1.5em 0 -1.3em;
    }
    40% {
    box-shadow: 0 1.5em 0 0;
    }
`;

export const LoadingAnimationContainer = styled.div`
  border-radius: 50%;
  width: 1.5em;
  height: 1.5em;
  animation-fill-mode: both;
  animation: ${loadingAnimation} 1.8s infinite ease-in-out;
  color: #00acee;
  margin: 10px auto;
  margin-top: -1em;
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);
  animation-delay: -0.16s;

  &:before,
  &:after {
    border-radius: 50%;
    width: 1.5em;
    height: 1.5em;
    animation-fill-mode: both;
    animation: ${loadingAnimation} 1.8s infinite ease-in-out;
    content: "";
    position: absolute;
    top: 0;
  }

  &:before {
    left: -2.5em;
    animation-delay: -0.32s;
  }

  &:after {
    left: 2.5em;
  }
`;
