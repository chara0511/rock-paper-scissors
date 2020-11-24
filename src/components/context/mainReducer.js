export const mainReducer = (state, action) => {
  switch (action.type) {
    case 'YOU_PICKED':
      return {
        ...state,
        youPicked: action.payload,
      };

    case 'HOUSE_PICKED':
      return {
        ...state,
        housePicked: action.payload,
      };

    case 'TOGGLE':
      return {
        ...state,
        toggle: action.payload,
      };

    case 'RESULT':
      return { ...state, result: action.payload };

    case 'INCREMENT':
      return {
        ...state,
        score: state.result === 'You Win' ? state.score + 1 : state.score,
      };

    case 'DECREMENT':
      return {
        ...state,
        score: state.result === 'You Lose' ? state.score - 1 : state.score,
      };

    default:
      return state;
  }
};
