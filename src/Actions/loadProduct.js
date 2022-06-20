import { Types } from "../Constants/actionTypes";

export const loadProduct = (data) => ({
  type: Types.LOAD_PRODUCT,
  payload: data,
});
