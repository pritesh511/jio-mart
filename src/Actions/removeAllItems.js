import { Types } from "../Constants/actionTypes";

export const removeAllItems = (userEmail) => ({
  type: Types.REMOVE_ALL_ITEMS,
  payload: userEmail,
});
