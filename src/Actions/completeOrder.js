import { Types } from "../Constants/actionTypes";

export const completeOrder = (userEmail) => ({
  type: Types.COMPLETE_ORDER,
  payload: userEmail,
});
