import React from "react";
import ImageRules from "../images/imageRules";
import styled from "styled-components";
import { theme, Button, media } from "../styles";

const { colors, fontSizes } = theme;

const StyledContainer = styled.div`
  background-color: ${colors.score_background};
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 3;

  ${media.smDesktop`
    align-items: center;
    display: flex;
    justify-content: center;
  `}
`;

const StyledContent = styled.div`
  align-items: center;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-around;

  ${media.smDesktop`
    border-radius: 8px;
    display: grid;
    grid-template-areas: "title button"
                          "rules rules" ;
    height: 100%;
    justify-content: center;
    max-width: 400px;
    max-height: 420px;
    width: 100%;

    & svg{
      grid-area: rules;
    }
  `}
`;

const StyledTitle = styled.h2`
  font-size: ${fontSizes.ml};
  text-transform: uppercase;

  ${media.smDesktop`
    font-size: ${fontSizes.xl};
    grid-area: title;
  `}
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
