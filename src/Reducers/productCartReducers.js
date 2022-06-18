const intialState = {
  productCart: [],
};

const productCartReducers = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const isInCart = state.productCart.some(
        (item) => item.id === action.product.id
      );
      if (isInCart) {
        return {
          ...state,
          productCart: state.productCart.map((item) =>
            item.id === action.product.id
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
            ...action.product,
            qty: 1,
          },
        ],
      };
    case "ITEM_DECREMENT":
      return {
        ...state,
        productCart: state.productCart.map((item) =>
          item.id === action.product.id
            ? {
                ...item,
                qty: item.qty - 1,
              }
            : item
        ),
      };
    case "REMOVE_ALL_ITEMS":
      return intialState;
    default:
      return state;
  }
};

export default productCartReducers;
