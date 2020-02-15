import { SET_NAME } from "../../actions";
const initialState = ""
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return action.name;
    default:
      return state;
  }
};
export default Reducer;
