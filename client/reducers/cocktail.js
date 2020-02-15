import { UPDATE_COCKTAIL } from "../actions";
const initialState = {}
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COCKTAIL:
      return action.cocktail;
    default:
      return state;
  }
};
export default Reducer;
