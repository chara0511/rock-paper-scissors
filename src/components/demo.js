import React from "react";
import styled from "styled-components";
import BgTriangle from "./images/bgTriangle";
import { IconPaper, IconScissors, IconRock } from "../icons";
import { theme } from "../styles/theme";

const { colors } = theme;

const StyledContainer = styled.div`
  border: 1px solid red;
  margin: 30px auto;
  position: relative;
  text-align: center;
  max-width: 316px;
  width: 100%;

  & .bgTriangle {
    width: 50%;

    path {
      stroke-width: 26;
    }
  }

  & .paper {
    top: 0;
  }

  & .scissors {
    right: 0;
    top: 0;
  }

  & .rock {
    bottom: 0;
    left: 0;
    margin: 0 auto;
    right: 0;
  }
`;

const StyledButton = styled.button`
  align-items: center;
  background-color: ${colors.score_background};
  border: 16px solid ${(props) => props.withBorder && props.withBorder};
  border-radius: 50%;
  display: flex;
  height: 130px;
  justify-content: center;
  position: absolute;
  width: 130px;

  & .iconPaper,
  & .iconScissor,
  & .iconRock {
    height: inherit;
  }
`;

const Demo = () => {
  return (
    <StyledContainer>
      <BgTriangle />

      <StyledButton className="paper" withBorder={`${colors.paper_gradientA}`}>
        <IconPaper />
      </StyledButton>

      <StyledButton
        className="scissors"
        withBorder={`${colors.scissors_gradientA}`}
      >
        <IconScissors />
      </StyledButton>

      <StyledButton className="rock" withBorder={`${colors.rock_gradientA}`}>
        <IconRock />
      </StyledButton>
    </StyledContainer>
  );
};

export default Demo;
