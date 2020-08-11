import React from "react";
import styled from "styled-components";
import { theme } from "../styles";
const { colors } = theme;

const StyledContainer = styled.div`
  background: linear-gradient(
    ${colors.radial_gradientA},
    ${colors.radial_gradientB}
  );
  height: 100vh;
  padding: 30px;
`;

const Main = (props) => {
  return <StyledContainer>{props.children}</StyledContainer>;
};

export default Main;
