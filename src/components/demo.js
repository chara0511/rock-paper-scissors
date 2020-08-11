import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  border: 1px solid red;
  margin: 30px 0;
`;
const Demo = () => {
  return (
    <StyledContainer>
      <p>from Demo.js</p>
    </StyledContainer>
  );
};

export default Demo;
