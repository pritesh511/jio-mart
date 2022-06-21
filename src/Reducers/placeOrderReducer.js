const initalState = {
  orderItems: [],
};

const placeOrderReducer = (state = initalState, action) => {
  switch (action.type) {
    case "PLACE_ORDER":
      return {
        orderItems: action.payload.orderList,
      };
    case "COMPLETE_ORDER":
      return {
        orderItems: state.orderItems?.filter(
          (item) => item?.userEmail !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default placeOrderReducer;
