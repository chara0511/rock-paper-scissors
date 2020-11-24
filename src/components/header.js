import React from 'react';
import styled from 'styled-components';
import Score from './score';
import Logo from '../images/logo';
import { theme, media } from '../styles';

const { colors } = theme;

const StyledContainer = styled.div`
  align-items: center;
  border: 4px solid ${colors.headerOutline};
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  text-align: center;

  ${media.smDesktop`
    border-radius: 16px;
    margin: .5em auto;
    width: 700px;
  `}
`;

const StyledTitle = styled.div`
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
