import { SET_FIRST } from "../../actions";
const initialState = "";
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIRST:
      return action.first;
    default:
      return state;
  }
};
export default Reducer;
