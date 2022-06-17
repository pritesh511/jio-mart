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
    default:
      return state;
  }
};

export default productCartReducers;
