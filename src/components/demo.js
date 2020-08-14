import React from "react";
import styled from "styled-components";
import BgTriangle from "./images/bgTriangle";
import { FormattedIcons } from "../icons";
import { theme } from "../styles/theme";
import { useState } from "react";

const { colors, fontSizes } = theme;

const StyledContainer = styled.div`
  border: 1px solid red;
  margin: 30px auto;
  position: relative;
  text-align: center;
  max-width: 316px;
  width: 100%;

  & .bgTriangle {
    width: 50%;

    path {
      stroke-width: 26;
    }
  }

  & .Paper {
    top: 0;
  }

  & .Scissor {
    right: 0;
    top: 0;
  }

  & .Rock {
    bottom: 0;
    left: 0;
    margin: auto;
    right: 0;
  }
`;

const StyledResult = styled.div`
  border: 1px solid green;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & button {
    position: relative;
  }

  & .Rock {
    margin: 0;
  }
`;

const StyledResultDescription = styled.div`
  border: 1px solid yellow;
  margin: 50px auto;
  width: 220px;
`;

const StyledButton = styled.button`
  align-items: center;
  border: 14px solid ${(props) => props.withBorder && props.withBorder};
  box-shadow: 0px 8px ${(props) => props.withShadow && props.withShadow},
    inset 0px 5px ${(props) => props.withShadow && `${colors.lightGrayishBlue}`};
  border-radius: 50%;
  display: flex;
  height: 130px;
  justify-content: center;
  position: absolute;
  width: 130px;
  transition: all 0.3s ease;
  user-select: none;

  &:active {
    box-shadow: none;
    transform: translateY(8px);
  }
`;

const StyledTitle = styled.h1`
  color: ${colors.score_background};
  font-size: ${fontSizes.xxl};
  letter-spacing: 2px;
  margin: 0;
  text-transform: uppercase;
`;

const StyledButtonBack = styled.button`
  border-radius: 10px;
  color: ${colors.dark_text};
  font-size: ${fontSizes.md};
  font-weight: 600;
  letter-spacing: 2px;
  margin-top: 25px;
  padding: 15px;
  text-transform: uppercase;
  width: 100%;
`;

const Demo = () => {
  const [drop, setDrop] = useState({ user: null, computer: null, msg: null });

  const random = Math.random();

  const computer = (numberRandom) => {
    if (numberRandom >= 0.66) {
      return "Rock";
    }
    if (numberRandom >= 0.33) {
      return "Scissor";
    }
    if (numberRandom < 0.33) {
      return "Paper";
    }
  };

  const message = (name) => {
    //paper

    if (name === "Paper") {
      if (random >= 0.66) {
        return { msg: "You win" };
      } else if (random >= 0.33) {
        return { msg: "You Lose" };
      } else if (random < 0.33) {
        return { msg: "Empate" };
      }
    }

    //scissors
    if (name === "Scissor") {
      if (random >= 0.66) {
        return { msg: "You lose" };
      } else if (random >= 0.33) {
        return { msg: "Empate" };
      } else if (random < 0.33) {
        return { msg: "You Win" };
      }
    }

    //rock
    if (name === "Rock") {
      if (random >= 0.66) {
        return { msg: "Empate" };
      } else if (random >= 0.33) {
        return { msg: "You win" };
      } else if (random < 0.33) {
        return { msg: "You lose" };
      }
    }
  };

  const runDemo = (e) => {
    setDrop({
      user: e.currentTarget.name,
      computer: computer(random),
      message: message(e.currentTarget.name),
    });
  };

  const data = [
    {
      name: "Paper",
      style: {
        border: `${colors.paper_gradientB}`,
        box_shadow: `${colors.paper_gradientA}`,
      },
    },
    {
      name: "Scissor",
      style: {
        border: `${colors.scissors_gradientB}`,
        box_shadow: `${colors.scissors_gradientA}`,
      },
    },
    {
      name: "Rock",
      style: {
        border: `${colors.rock_gradientB}`,
        box_shadow: `${colors.rock_gradientA}`,
      },
    },
  ];

  return (
    <StyledContainer>
      {drop.message ? (
        <StyledResult>
          <StyledButton className={drop.user} name={drop.user}>
            <FormattedIcons name={drop.user} />
          </StyledButton>

          <StyledButton className={drop.computer} name={drop.computer}>
            <FormattedIcons name={drop.computer} />
          </StyledButton>

          <StyledResultDescription>
            <StyledTitle>{drop.message.msg}</StyledTitle>

            <StyledButtonBack
              onClick={() =>
                setDrop({
                  user: null,
                  computer: null,
                  message: null,
                })
              }
            >
              Play again
            </StyledButtonBack>
          </StyledResultDescription>
        </StyledResult>
      ) : (
        <>
          <BgTriangle />

          {data.map((item, i) => (
            <StyledButton
              className={item.name}
              key={i}
              withBorder={item.style.border}
              withShadow={item.style.box_shadow}
              name={item.name}
              onClick={runDemo}
            >
              <FormattedIcons name={item.name} />
            </StyledButton>
          ))}
        </>
      )}
    </StyledContainer>
  );
};

export default Demo;
