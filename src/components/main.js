import React from "react";
import styled from "styled-components";
import { theme } from "../styles";
const { colors } = theme;

const StyledContainer = styled.div`
  border: 1px solid red;
  height: 100vh;
  background: linear-gradient(
    ${colors.radial_gradientA},
    ${colors.radial_gradientB}
  );
`;

const Main = (props) => {
  return <StyledContainer>{props.children}</StyledContainer>;
};

export default Main;
