
import { UPDATE_CONTROL } from "../actions"
const initialState = 0
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CONTROL: return action.result
    default:
      return state
  }
}
export default Reducer