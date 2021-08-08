import React from "react";
import { Container, LoadingAnimationContainer } from "./Loader.style";

interface LoaderProps {
  text?: string;
}

export const Loader: React.FC<LoaderProps> = ({ text }) => {
  return (
    <Container>
      <h4>{text}</h4>
      <LoadingAnimationContainer>Loading...</LoadingAnimationContainer>
    </Container>
  );
};
