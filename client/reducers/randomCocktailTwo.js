import { SET_RANDOMTWO } from "../actions";
const initialState = {
  drinks: [{
    strDrink:""
}] };
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RANDOMTWO :
      return action.random;
    default:
      return state;
  }
};
export default Reducer;
