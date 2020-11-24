import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from '../media';
import { IconClose } from '../../icons';
import { theme } from '../theme';

const { colors, fontSizes } = theme;

const StyledButton = styled.button`
  background-color: transparent;
  border: ${({ modalMode }) => modalMode || `2px solid ${colors.headerOutline}`};
  border-radius: 10px;
  color: ${({ modalMode }) => (modalMode ? `${colors.darkText} ` : `${colors.scoreBackground}`)};
  font-size: ${fontSizes.md};
  font-weight: 600;
  height: 45px;
  letter-spacing: 1px;
  text-align: ${({ modalMode }) => (modalMode ? 'end' : 'center')};
  text-transform: uppercase;
  width: ${({ modalMode }) => (modalMode ? 'auto' : '132px')};

  ${media.smDesktop`
    grid-area: button;
  `}
`;

const Button = ({ active, setActive, modalMode, buttonName }) => {
  const handleButton = () => {
    if (!active.modal) {
      setActive({ ...active, modal: true });
    } else {
      setActive({ ...active, modal: false });
    }
  };

  return (
    <StyledButton modalMode={modalMode} onClick={handleButton}>
      {buttonName || <IconClose />}
    </StyledButton>
  );
};

Button.propTypes = {
  active: PropTypes.object.isRequired,
  setActive: PropTypes.func.isRequired,
  modalMode: PropTypes.string,
  buttonName: PropTypes.string,
};

export default Button;
