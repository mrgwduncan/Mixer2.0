import { SET_CATAGORY } from "../../actions";
const initialState = "";
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATAGORY:
      return action.catagory;
    default:
      return state;
  }
};
export default Reducer;
