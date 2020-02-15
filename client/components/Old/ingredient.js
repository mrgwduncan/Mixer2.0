import { SET_INGREDIENT } from "../../actions"
const initialState = null;
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INGREDIENT:
      return action.ingredient;
    default:
      return state;
  }
};
export default Reducer;
