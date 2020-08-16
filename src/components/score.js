import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../styles";
import MainContext from "./context/mainContext";

const { colors, fontSizes } = theme;

const StyledContainer = styled.div`
  background-color: ${colors.score_background};
  border-radius: 5px;
  height: 75px;
  width: 82px;
  margin: 12px;
  padding: 14px 0;

  & > p {
    margin: 0;
  }
`;

const StyledName = styled.p`
  color: ${colors.score_text};
  font-size: ${fontSizes.sm};
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const StyledScore = styled.p`
  font-size: ${fontSizes.xl};
  font-weight: 700;
  letter-spacing: 2px;
`;

const Score = () => {
  const { score } = useContext(MainContext);
  return (
    <StyledContainer>
      <StyledName>Score</StyledName>
      <StyledScore>{score}</StyledScore>
    </StyledContainer>
  );
};

export default Score;
