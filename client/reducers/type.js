import { SET_TYPE } from "../actions";
const initialState = "";
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TYPE:
      return action.ctype;
    default:
      return state;
  }
};
export default Reducer;
