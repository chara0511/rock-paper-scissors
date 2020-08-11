import React from "react";
import Score from "./score";
import styled from "styled-components";

const StyledContainer = styled.div`
  border: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

const StyledTitle = styled.h1`
  border: 1px solid brown;
  margin: 12px;
`;

const Header = () => {
  return (
    <StyledContainer>
      <StyledTitle>Rock, Paper, Scissors</StyledTitle>

      <Score />
    </StyledContainer>
  );
};

export default Header;
