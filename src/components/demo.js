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
  border: 14px solid ${(props) => props.withBorder && props.withBorder};
  box-shadow: 0px 8px ${(props) => props.withShadow && props.withShadow},
    inset 0px 5px ${(props) => props.withShadow && `${colors.lightGrayishBlue}`};
  border-radius: 50%;
  display: flex;
  height: 130px;
  justify-content: center;
  position: absolute;
  width: 130px;
  transition: all 0.3s ease;
  user-select: none;

  &:active {
    box-shadow: none;
    transform: translateY(8px);
  }
`;

const Demo = () => {
  return (
    <StyledContainer>
      <BgTriangle />

      <StyledButton
        className="paper"
        withBorder={`${colors.paper_gradientB}`}
        withShadow={`${colors.paper_gradientA}`}
      >
        <IconPaper />
      </StyledButton>

      <StyledButton
        className="scissors"
        withBorder={`${colors.scissors_gradientB}`}
        withShadow={`${colors.scissors_gradientA}`}
      >
        <IconScissors />
      </StyledButton>

      <StyledButton
        className="rock"
        withBorder={`${colors.rock_gradientB}`}
        withShadow={`${colors.rock_gradientA}`}
      >
        <IconRock />
      </StyledButton>
    </StyledContainer>
  );
};

export default Demo;
