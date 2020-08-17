import React from "react";
import styled from "styled-components";
import { theme } from "../styles";
const { colors } = theme;

const StyledContainer = styled.div`
  background-image: radial-gradient(
    circle at 50% 0%,
    ${colors.radial_gradientA} 15%,
    ${colors.radial_gradientB} 100%
  );
  min-height: 100vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Main = (props) => {
  return <StyledContainer>{props.children}</StyledContainer>;
};

export default Main;
