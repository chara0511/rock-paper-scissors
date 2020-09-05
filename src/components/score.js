import React, { useContext } from "react";
import styled from "styled-components";
import { theme, media } from "../styles";
import MainContext from "./context/mainContext";

const { colors, fontSizes } = theme;

const StyledContainer = styled.div`
  background-color: ${colors.score_background};
  border-radius: 5px;
  height: 75px;
  margin: 0 22px;
  padding: 14px 0;
  width: 82px;

  & > p {
    margin: 0;
  }

  ${media.smDesktop`
    border-radius: 10px;
    height: 115px;
    width: 152px;
    
  `}
`;

const StyledName = styled.p`
  color: ${colors.score_text};
  font-size: ${fontSizes.sm};
  letter-spacing: 1px;
  text-transform: uppercase;

  ${media.smDesktop`
   font-size: ${fontSizes.md};
  `}
`;

const StyledScore = styled.p`
  font-size: ${fontSizes.xl};
  font-weight: 700;
  letter-spacing: 2px;

  ${media.smDesktop`
    font-size: ${fontSizes.xxl};
  `}
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
