import { SET_RANDOM } from "../actions";
const initialState = {
  drinks: [{
    strDrink:""
}] };
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RANDOM :
      return action.random;
    default:
      return state;
  }
};
export default Reducer;