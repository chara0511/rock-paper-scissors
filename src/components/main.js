import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from '../styles';

const { colors } = theme;

const StyledContainer = styled.div`
  background-image: radial-gradient(
    circle at 50% 0%,
    ${colors.radialGradientA} 15%,
    ${colors.radialGradientB} 100%
  );
  min-height: 100vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Main = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

Main.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Main;
