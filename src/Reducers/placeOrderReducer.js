const initalState = {
  orderItems: [],
};

const placeOrderReducer = (state = initalState, action) => {
  switch (action.type) {
    case "PLACE_ORDER":
      return {
        orderItems: [...state.orderItems, ...action.payload.orderList],
      };
    case "COMPLETE_ORDER":
      const order_data = state.orderItems?.filter(
        (item) => item?.userEmail !== action.payload
      );
      return {
        orderItems: order_data,
      };
    default:
      return state;
  }
};

export default placeOrderReducer;
