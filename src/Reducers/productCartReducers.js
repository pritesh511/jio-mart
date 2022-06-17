const intialState = {
  productCart: [],
};

const productCartReducers = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { product } = action.payload;
      const isInCart = state.productCart.some((item) => item.id === product.id);
      if (isInCart) {
        return {
          ...state,
          productCart: state.productCart.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  qty: item.qty + 1,
                }
              : item
          ),
        };
      }
      return {
        ...state,
        productCart: [
          ...state.productCart,
          {
            ...product,
            qty: 1,
          },
        ],
      };
    case "REMOVE_ALL_ITEMS":
      return intialState;
    default:
      return state;
  }
};

export default productCartReducers;
