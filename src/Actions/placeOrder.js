import { Types } from "../Constants/actionTypes";

export const placeOrder = (orderList, userEmail, price, saveAmount) => ({
  type: Types.PLACE_ORDER,
  payload: { orderList, userEmail },
});
