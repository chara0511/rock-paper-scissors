import React, { useState } from "react";

import styled from "styled-components";
import { Button } from "../styles";
import { Modal } from ".";

const StyledContainer = styled.div`
  border: 1px solid green;
  margin: 1em auto 0 auto;
  text-align: center;
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
