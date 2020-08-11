import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  border: solid 1px green;
  border-radius: 5px;
  margin: 12px;
  padding: 12px;
`;

const Score = () => {
  return (
    <StyledContainer>
      <h2>Score</h2>
      <p>12</p>
    </StyledContainer>
  );
};

export default Score;
