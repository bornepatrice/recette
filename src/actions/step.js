export const ADD_STEP = "ADD_STEP";
export const RM_STEP = "RM_STEP";
export const INITIALSTEP = "INITIALSTEP";

export function addAction() {
  return { type: ADD_STEP };
}
export function initialAction() {
  return { type: INITIALSTEP };
}
export function rmAction() {
  return { type: RM_STEP };
}
