import React from "react";
import Score from "./score";
import styled from "styled-components";
import Logo from "../images/logo";
import { theme, media } from "../styles";

const { colors } = theme;

const StyledContainer = styled.div`
  align-items: center;
  border: 4px solid ${colors.header_outline};
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  text-align: center;

  ${media.smDesktop`
    border-radius: 16px;
    margin: 0 auto;
    width: 700px;
  `}
`;

const StyledTitle = styled.div`
  border: 1px solid brown;
  margin: 22px;

  & .logo {
    height: 50px;
    width: 86px;

    ${media.smDesktop`
      height: 96px;
      width: 160px;
    `}
  }
`;

const Header = () => {
  return (
    <StyledContainer>
      <StyledTitle>
        <Logo />
      </StyledTitle>

      <Score />
    </StyledContainer>
  );
};

export default Header;
