import React, { useReducer } from "react";
import MainContext from "./mainContext";
import { mainReducer } from "./mainReducer";
import { YOU_PICKED, HOUSE_PICKED, COMPARE, RESULT, SCORE } from "./types";

const MainState = ({ children }) => {
  const initialState = {
    you_picked: null,
    house_picked: null,
    compare: false,
    result: null,
    score: 0,
  };

  const [state, dispatch] = useReducer(mainReducer, initialState);

  const getYouPicked = (name) => {
    dispatch({ type: YOU_PICKED, payload: name });
  };

  const getHousePicked = (name) => {
    dispatch({ type: HOUSE_PICKED, payload: name });
  };

  const getCompare = (boolean) => {
    dispatch({ type: COMPARE, payload: boolean });
  };

  // resolve this
  const getResult = (you, house) => {
    if (you === house) {
      return dispatch({ type: RESULT, payload: "Tie" });
    }

    switch (you) {
      case "Paper":
        return house === "Scissor"
          ? dispatch({ type: RESULT, payload: "You Lose" })
          : dispatch({ type: RESULT, payload: "You Win" });

      case "Scissor":
        return house === "Paper"
          ? dispatch({ type: RESULT, payload: "You Win" })
          : dispatch({ type: RESULT, payload: "You Lose" });

      case "Rock":
        return house === "Scissor"
          ? dispatch({ type: RESULT, payload: "You Win" })
          : dispatch({ type: RESULT, payload: "You Lose" });

      default:
        return;
    }
  };

  const getScore = (number) => {
    dispatch({ type: SCORE, payload: number });
  };

  return (
    <MainContext.Provider
      value={{
        state: state,
        you_picked: state.you_picked,
        house_picked: state.house_picked,
        compare: state.compare,
        result: state.result,
        score: state.score,
        getYouPicked,
        getHousePicked,
        getCompare,
        getResult,
        getScore,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainState;
