import { Types } from "../Constants/actionTypes";

export const incrementItem = (product) => ({
  type: Types.ITEM_INCREMENT,
  payload: { product },
});
