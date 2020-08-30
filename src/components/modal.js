import React from "react";
import ImageRules from "./images/imageRules";
import styled from "styled-components";
import { theme, Button } from "../styles";

const { colors, fontSizes } = theme;

const StyledContainer = styled.div`
  background-color: ${colors.score_background};
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 3;
`;

const StyledContent = styled.div`
  align-items: center;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-around;
`;

const StyledTitle = styled.h2`
  font-size: ${fontSizes.ml};
  text-transform: uppercase;
`;

const Modal = ({ active, setActive }) => {
  return (
    <StyledContainer>
      <StyledContent>
        <StyledTitle>rules</StyledTitle>
        <ImageRules />
        <Button active={active} modalMode="none" setActive={setActive} />
      </StyledContent>
    </StyledContainer>
  );
};

export default Modal;
