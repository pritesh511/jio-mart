import { Types } from "../Constants/actionTypes";

export const decrementItem = (product, userEmail) => ({
  type: Types.ITEM_DECREMENT,
  payload: { product, userEmail },
});
