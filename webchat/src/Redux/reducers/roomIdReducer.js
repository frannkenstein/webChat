import { AddRoomId } from "../constants/constantsTypes";

export const INITIAL_STATE = {
  roomId: [],
};

export const roomIdReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AddRoomId.ADD_ROOM_ID:
      let res = { ...state, roomId: [...state.roomId, action.payload.data] };
      localStorage.setItem("roomIDsList", JSON.stringify(res.roomId));
      return res;

    default:
      return state;
  }
};
