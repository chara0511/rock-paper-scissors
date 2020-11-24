import React, { useState } from 'react';

import styled from 'styled-components';
import { Button, media } from '../styles';
import Modal from './modal';

const StyledContainer = styled.div`
  margin: 1em auto 0 auto;

  ${media.smDesktop`
    margin: 0;
    display: flex;
    justify-content: flex-end;
  `}
`;

const Rules = () => {
  const [active, setActive] = useState({
    modal: false,
  });

  return (
    <StyledContainer>
      {active.modal && <Modal active={active} setActive={setActive} />}
      <Button active={active} setActive={setActive} buttonName="rules" />
    </StyledContainer>
  );
};

export default Rules;
