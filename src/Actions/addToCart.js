import { Types } from "../Constants/actionTypes";

export const productCart = (product, userEmail) => ({
  type: Types.ADD_TO_CART,
  payload: {
    product,
    userEmail,
  },
});
