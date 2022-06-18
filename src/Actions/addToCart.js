import { Types } from "../Constants/actionTypes";

export const productCart = (product) => ({
  type: Types.ADD_TO_CART,
  product,
});
