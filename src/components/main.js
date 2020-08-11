import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  border: 1px solid red;
  height: 100vh;
`;

const Main = (props) => {
  return <StyledContainer>{props.children}</StyledContainer>;
};

export default Main;
