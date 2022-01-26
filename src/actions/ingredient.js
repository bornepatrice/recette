export const ADD_ING = "ADD_ING";
export const RM_ING = "RM_ING";
export const INITIAL = "INITIAL";

export function addAction() {
  return { type: ADD_ING };
}
export function initialAction() {
  return { type: INITIAL };
}
export function rmAction() {
  return { type: RM_ING };
}
