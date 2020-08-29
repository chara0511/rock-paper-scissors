import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import BgTriangle from "./images/bgTriangle";
import { FormattedIcons } from "../icons";
import { theme } from "../styles/theme";
import MainContext from "./context/mainContext";

const { colors, fontSizes } = theme;

const StyledContainer = styled.div`
  border: 1px solid red;
  margin: 0 auto;
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
`;

const StyledContent = styled.div`
  border: 1px solid green;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2.7em;

  & .winner {
    box-shadow: 0px 0px 0px 1em rgb(45, 62, 92, 50%),
      0px 0px 0px 2.55em rgb(41, 58, 88, 50%),
      0px 0px 0px 4.44em rgb(35, 54, 86, 50%);
  }
`;

const Description = styled.p`
  border: 1px solid white;
  color: ${colors.score_background};
  font-size: ${fontSizes.md};
  margin: 30px 0;
  text-transform: uppercase;
`;

const Results = styled.div`
  border: 1px solid yellow;
  margin: 0 auto;
  width: 220px;
  visibility: ${(props) => (props.show ? props.show : "hidden")};
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
    border: 14px solid ${colors.paper_gradientB};
    box-shadow: 0px 8px ${colors.paper_gradientA},
      inset 0px 5px ${colors.lightGrayishBlue};
    top: 0;
  }

  &.scissor {
    border: 14px solid ${colors.scissor_gradientB};
    box-shadow: 0px 8px ${colors.scissor_gradientA},
      inset 0px 5px ${colors.lightGrayishBlue};
    right: 0;
    top: 0;
  }

  &.rock {
    border: 14px solid ${colors.rock_gradientB};
    box-shadow: 0px 8px ${colors.rock_gradientA},
      inset 0px 5px ${colors.lightGrayishBlue};
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
  background: ${colors.itemLoading};
  position: relative;
`;

// create a new box to include this 2 box shadows and apply position absolute
const ItemResult = styled(Item)`
  position: relative;

  &.paper,
  &.scissor,
  &.rock {
    box-shadow: none;
  }

  &:active {
    transform: none;
  }
`;

const Title = styled.h1`
  color: ${colors.score_background};
  font-size: ${fontSizes.xxl};
  letter-spacing: 2px;
  margin: 0;
  text-transform: uppercase;
`;

const ButtonBack = styled.button`
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

  const [results, setResults] = useState(null);

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
      setResults(true);
    }, 300);
  };

  const playAgain = () => {
    changeToggle(false);

    setResults(false);
  };

  return (
    <StyledContainer>
      {toggle ? (
        <StyledContent>
          <div>
            <ItemResult className={you_picked}>
              <FormattedIcons name={you_picked} />
            </ItemResult>
            <Description>You picked</Description>
          </div>

          <div>
            {!results ? (
              <ItemLoading />
            ) : (
              <ItemResult className={house_picked}>
                <FormattedIcons name={house_picked} />
              </ItemResult>
            )}

            <Description>The house picked</Description>
          </div>

          <Results show={results && "initial"}>
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
