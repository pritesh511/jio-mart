import { Types } from "../Constants/actionTypes";

export const decrementItem = (product) => ({
  type: Types.ITEM_DECREMENT,
  product,
});
