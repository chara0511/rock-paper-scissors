export const mainReducer = (state, action) => {
  switch (action.type) {
    case "YOU_PICKED":
      return {
        ...state,
        you_picked: { name: action.payload },
      };

    case "HOUSE_PICKED":
      return {
        ...state,
        house_picked: { name: action.payload },
      };

    case "TOGGLE":
      return {
        ...state,
        toggle: action.payload,
      };

    case "RESULT":
      return { ...state, result: action.payload };

    case "DECREMENT":
      return {
        ...state,
        score: state.result === "You Lose" ? state.score - 1 : state.score,
      };

    case "INCREMENT":
      return {
        ...state,
        score: state.result === "You Win" ? state.score + 1 : state.score,
      };

    default:
      return state;
  }
};
