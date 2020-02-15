import { SET_SELECTED } from "../actions";
const initialState = "";
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED:
      return action.selected;
    default:
      return state;
  }
};
export default Reducer;
