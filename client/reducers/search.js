import { UPDATE_SEARCHRESULTS } from "../actions";
import { CLEAR_SEARCHRESULTS } from "../actions";
const initialState = { drinks: [] };

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCHRESULTS:
      return action.drinks;
    case CLEAR_SEARCHRESULTS:
      return initialState;
    default:
      return state;
  }
};
export default Reducer;
