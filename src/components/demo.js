import React, { useContext, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import BgTriangle from "../images/bgTriangle";
import { FormattedIcons } from "../icons";
import { theme } from "../styles/theme";
import MainContext from "./context/mainContext";
import { media } from "../styles";

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
  height: 350px;
  margin: 0 auto;
  max-width: 316px;
  position: relative;
  text-align: center;
  width: 100%;

  & .bgTriangle {
    margin: auto;
    width: 50%;

    path {
      stroke-width: 26;
    }
  }

  ${media.smDesktop`
    max-width: 950px;
    height: 450px;

    & .bgTriangle {
    width: 100%;
    margin: 90px auto;

    path {
      stroke-width: 18;
      }
    }
  `}
`;

const StyledContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
  max-width: 316px;
  position: relative;
  width: 100%;

  ${media.smDesktop`
    max-width: 500px;
    height: 450px;
  `}
`;

const StyledContentResult = styled(StyledContent)`
  ${media.smDesktop`
    display: grid;
    grid-template-areas: "YouPicked Result HousePicked";
    height: 450px;
    max-width: max-content;
    align-items: center;
  `}
`;

const WrapperYouPicked = styled.div`
  ${media.smDesktop`
    display: flex;
    flex-direction: column-reverse;
    grid-area: YouPicked;
    margin: 0 1.5em;
  `}
`;

const WrapperHousePicked = styled.div`
  ${media.smDesktop`
    display: flex;
    flex-direction: column-reverse;
    grid-area: HousePicked;
     margin: 0 1.5em;
  `}
`;

const Description = styled.p`
  color: ${score_background};
  font-size: ${fontSizes.md};
  margin: 30px 0;
  position: relative;
  text-transform: uppercase;

  ${media.smDesktop`
    font-size: ${fontSizes.ml};
  `}
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

  ${media.smDesktop`
    height: 210px;
    width: 210px;

    &.paper {
    border: 24px solid ${paper_gradientB};
    }
    &.scissor {
    border: 24px solid ${scissor_gradientB};
    }
    &.rock {
    border: 24px solid ${rock_gradientB};
    }

    & .iconPaper,
    & .iconScissor,
    & .iconRock{
      height: 89px;
      width: 79px;
    }
  `}
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

    ${media.smDesktop`
    box-shadow: ${({ shadow }) =>
      shadow === "winner"
        ? `0px 0px 0px 3.61em rgb(45, 62, 92, 50%),
      0px 0px 0px 7.77em rgb(41, 58, 88, 50%),
      0px 0px 0px 12.22em rgb(35, 54, 86, 50%)`
        : "none"};
  `}
  }

  &:active {
    transform: none;
  }

  ${media.smDesktop`
    height: 300px;
    width: 300px;

    &.paper {
    border: 36px solid ${paper_gradientB};
    }
    &.scissor {
    border: 36px solid ${scissor_gradientB};
    }
    &.rock {
    border: 36px solid ${rock_gradientB};
    }

    & .iconPaper,
    & .iconScissor,
    & .iconRock{
      height: 119px;
      width: 109px;
    }
  `}
`;

const Results = styled.div`
  margin: 0 auto;
  width: 220px;
  visibility: ${({ show }) => (show ? show : "hidden")};
  z-index: 3;

  ${media.smDesktop`
    display: ${({ show }) => (show ? show : "none")};
    visibility: initial;
  `}
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

  ${media.smDesktop`
    animation-delay: 50ms;
  `}
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

  &:hover {
    color: ${colors.softRed};
  }
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
        <StyledContentResult>
          <WrapperYouPicked>
            <ItemResult
              aria-label={`button__${you_picked}`}
              className={you_picked}
              shadow={result === "You Win" && "winner"}
            >
              <FormattedIcons name={you_picked} />
            </ItemResult>
            <Description>You picked</Description>
          </WrapperYouPicked>

          <WrapperHousePicked>
            {!loading ? (
              <ItemLoading />
            ) : (
              <ItemResult
                aria-label={`button__${house_picked}`}
                className={house_picked}
                shadow={result === "You Lose" && "winner"}
              >
                <FormattedIcons name={house_picked} />
              </ItemResult>
            )}

            <Description>The house picked</Description>
          </WrapperHousePicked>

          <Results show={showresults && "initial"}>
            <Title>{result}</Title>

            <ButtonBack onClick={playAgain}>Play again</ButtonBack>
          </Results>
        </StyledContentResult>
      ) : (
        <StyledContent>
          <BgTriangle />

          {data.map(({ name, value }, i) => (
            <Item
              aria-label={`button__${name}`}
              className={name}
              key={i}
              name={name}
              onClick={runDemo}
              value={value}
            >
              <FormattedIcons name={name} />
            </Item>
          ))}
        </StyledContent>
      )}
    </StyledContainer>
  );
};

export default Demo;
