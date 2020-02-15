import { SET_RANDOMONE } from "../actions";
const initialState = {
  drinks: [{
    strDrink:""
}] };
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RANDOMONE :
      return action.random;
    default:
      return state;
  }
};
export default Reducer;
