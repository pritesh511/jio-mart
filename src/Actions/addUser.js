import { Types } from "../Constants/actionTypes";

export const addUser = (user) => ({ type: Types.ADD_USER, payload: { user } });
