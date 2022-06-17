import { Types } from "../Constants/actionTypes";

export const currentUser = (user) => ({
  type: Types.CURRENT_USER,
  payload: user,
});
