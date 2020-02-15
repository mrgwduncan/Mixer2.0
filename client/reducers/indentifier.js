import { SET_INDENTIFIER } from "../actions"
const initialState = "";
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INDENTIFIER:
      return action.indentifier;
    default:
      return state;
  }
};
export default Reducer;
