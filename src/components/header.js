import React from "react";
import Score from "./score";
import styled from "styled-components";
import Logo from "./images/logo";
import { theme } from "../styles";

const { colors } = theme;

const StyledContainer = styled.div`
  align-items: center;
  border: 4px solid ${colors.header_outline};
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  margin: 30px;
  text-align: center;
`;

const StyledTitle = styled.div`
  border: 1px solid brown;
  margin: 22px;

  & .logo {
    height: 50px;
    width: 86px;
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
