const intialState = {
  productCart: [],
  cart: [],
};

const productCartReducers = (state = intialState, action) => {
  switch (action.type) {
    case "LOAD_PRODUCT":
      return {
        ...state,
        productCart: action.payload,
      };
    case "ADD_TO_CART":
      const isInCart = state.cart?.some(
        (item) =>
          item?.id === action.payload.product?.id &&
          item?.userEmail === action.payload.userEmail
      );
      if (isInCart) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.product.id
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
        cart: [
          ...state.cart,
          {
            ...action.payload.product,
            qty: 1,
            userEmail: action.payload.userEmail,
          },
        ],
      };
    case "ITEM_DECREMENT":
      const findItem = state.cart?.filter(
        (item) =>
          item?.id === action.payload.product?.id &&
          item?.userEmail === action.payload.userEmail
      );
      if (findItem[0].qty > 1) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.product.id
              ? {
                  ...item,
                  qty: item.qty - 1,
                }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: state.cart?.filter(
            (item) => item?.id !== action.payload.product?.id
          ),
        };
      }

    case "REMOVE_ALL_ITEMS":
      return intialState;
    default:
      return state;
  }
};

export default productCartReducers;
