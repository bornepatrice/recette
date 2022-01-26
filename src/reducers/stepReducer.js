import { ADD_STEP, RM_STEP, INITIALSTEP } from "../actions/step";
export function stepReducer(state = [], action) {
  switch (action.type) {
    case ADD_STEP:
      let id = state.length + 1;
      return [...state, { id: id, description: action.payload }];
    case INITIALSTEP:
      return action.payload;
    case RM_STEP:
      return state.filter((ing) => ing.index !== action.index);
    default:
      return state;
  }
}
