const intialState = {
  producrCart: [],
};

const productCartReducers = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { product } = action.payload;
      return {
        ...state,
        producrCart: [...state.producrCart, product],
      };
    case "REMOVE_ALL_ITEMS":
      return intialState;
    default:
      return state;
  }
};

export default productCartReducers;
