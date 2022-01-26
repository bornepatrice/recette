import { ADD_ING, RM_ING, INITIAL } from "../actions/ingredient";
export function ingredientReducer(state = [], action) {
  switch (action.type) {
    case ADD_ING:
      return [...state, action.payload];
    case INITIAL:
      return action.payload;
    case RM_ING:
      return state.filter((ing) => ing.name !== action.name);
    default:
      return state;
  }
}
