import React, { useContext, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import BgTriangle from "./images/bgTriangle";
import { FormattedIcons } from "../icons";
import { theme } from "../styles/theme";
import MainContext from "./context/mainContext";

const { colors, fontSizes } = theme;

const {
  dark_text,
  itemLoading,
  lightGrayishBlue,
  paper_gradientA,
  paper_gradientB,
  rock_gradientA,
  rock_gradientB,
  scissor_gradientA,
  scissor_gradientB,
  score_background,
} = colors;

const StyledContainer = styled.div`
  border: 1px solid red;
  margin: 0 auto;
  max-width: 316px;
  position: relative;
  text-align: center;
  width: 100%;

  & .bgTriangle {
    width: 50%;

    path {
      stroke-width: 26;
    }
  }
`;

const StyledContent = styled.div`
  border: 1px solid green;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2.7em;
`;

const Description = styled.p`
  border: 1px solid white;
  color: ${score_background};
  font-size: ${fontSizes.md};
  margin: 30px 0;
  position: relative;
  text-transform: uppercase;
`;

const Results = styled.div`
  border: 1px solid yellow;
  margin: 0 auto;
  width: 220px;
  visibility: ${({ show }) => (show ? show : "hidden")};
`;

const Item = styled.button`
  align-items: center;
  border-radius: 50%;
  display: flex;
  height: 130px;
  justify-content: center;
  position: absolute;
  width: 130px;
  transition: all 0.3s ease;
  user-select: none;

  &.paper {
    border: 14px solid ${paper_gradientB};
    box-shadow: 0px 8px ${paper_gradientA}, inset 0px 5px ${lightGrayishBlue};
    top: 0;
  }

  &.scissor {
    border: 14px solid ${scissor_gradientB};
    box-shadow: 0px 8px ${scissor_gradientA}, inset 0px 5px ${lightGrayishBlue};
    right: 0;
    top: 0;
  }

  &.rock {
    border: 14px solid ${rock_gradientB};
    box-shadow: 0px 8px ${rock_gradientA}, inset 0px 5px ${lightGrayishBlue};
    bottom: 0;
    left: 0;
    margin: auto;
    right: 0;
  }

  &:active {
    box-shadow: none;
    transform: translateY(8px);
  }
`;

const ItemLoading = styled(Item)`
  border: none;
  width: 105px;
  height: 105px;
  margin: 15px 12.5px 40px 12.5px;
  box-shadow: none;
  background: ${itemLoading};
  position: relative;
`;

const ItemResult = styled(Item)`
  cursor: default;
  position: relative;

  &.paper,
  &.scissor,
  &.rock {
    box-shadow: ${({ shadow }) =>
      shadow === "winner"
        ? `0px 0px 0px 1em rgb(45, 62, 92, 50%),
      0px 0px 0px 2.55em rgb(41, 58, 88, 50%),
      0px 0px 0px 4.44em rgb(35, 54, 86, 50%)`
        : "none"};
    z-index: ${({ shadow }) => (shadow === "winner" ? 0 : 1)};
  }

  &:active {
    transform: none;
  }
`;
const titleAnimation = keyframes`
  0%{
    opacity: 0;
    transform: scale(0.3);
  }
  50%{
    opacity: 1;
    transform: scale(1.1);
  }
  70%{
    transform: scale(0.9);
  }
`;

const Title = styled.h1`
  animation-delay: 2.3s;
  animation-duration: 1s;
  animation-name: ${titleAnimation};
  animation-iteration-count: 1;
  color: ${score_background};
  font-size: ${fontSizes.xxl};
  letter-spacing: 2px;
  margin: 0;
  text-transform: uppercase;
`;

const ButtonBack = styled.button`
  border-radius: 10px;
  color: ${dark_text};
  font-size: ${fontSizes.md};
  font-weight: 600;
  letter-spacing: 2px;
  margin-top: 25px;
  padding: 15px;
  text-transform: uppercase;
  width: 100%;
`;

const Demo = () => {
  const {
    you_picked,
    house_picked,
    toggle,
    result,
    data,
    getYouPicked,
    getHousePicked,
    changeToggle,
    getResult,
    incrementScore,
    decrementScore,
  } = useContext(MainContext);

  const [loading, setLoading] = useState(null);

  const [showresults, setShowResults] = useState(null);

  const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

  const items = data.map(({ name }) => name);

  const randomPick = () => {
    const interval = setInterval(() => {
      const randomItem = items[random(0, 3)];

      return getHousePicked(randomItem);
    }, 100);

    setTimeout(() => {
      return clearInterval(interval);
    }, 2000);
  };

  useEffect(() => {
    getResult(you_picked, house_picked);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [you_picked, house_picked]);

  const runDemo = ({ currentTarget }) => {
    getYouPicked(items[parseFloat(currentTarget.value)]);

    randomPick();

    changeToggle(true);

    incrementScore();

    decrementScore();

    setTimeout(() => {
      setLoading(true);
    }, 300);

    setTimeout(() => {
      setShowResults(true);
    }, 2300);
  };

  const playAgain = () => {
    changeToggle(false);

    setLoading(false);

    setShowResults(false);
  };

  return (
    <StyledContainer>
      {toggle ? (
        <StyledContent>
          <div>
            <ItemResult
              className={you_picked}
              shadow={result === "You Win" && "winner"}
            >
              <FormattedIcons name={you_picked} />
            </ItemResult>
            <Description>You picked</Description>
          </div>

          <div>
            {!loading ? (
              <ItemLoading />
            ) : (
              <ItemResult
                className={house_picked}
                shadow={result === "You Lose" && "winner"}
              >
                <FormattedIcons name={house_picked} />
              </ItemResult>
            )}

            <Description>The house picked</Description>
          </div>

          <Results show={showresults && "initial"}>
            <Title>{result}</Title>

            <ButtonBack onClick={playAgain}>Play again</ButtonBack>
          </Results>
        </StyledContent>
      ) : (
        <>
          <BgTriangle />

          {data.map(({ name, value }, i) => (
            <Item
              className={name}
              key={i}
              name={name}
              onClick={runDemo}
              value={value}
            >
              <FormattedIcons name={name} />
            </Item>
          ))}
        </>
      )}
    </StyledContainer>
  );
};

export default Demo;
