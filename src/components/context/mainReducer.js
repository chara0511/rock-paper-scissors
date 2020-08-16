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

    case "COMPARE":
      return {
        ...state,
        compare: action.payload,
      };

    case "RESULT":
      return { ...state, result: action.payload };

    default:
      return state;
  }
};
