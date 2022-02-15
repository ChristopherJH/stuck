import { Dispatch } from "react";
import { Action } from "../types/Action";
import { StateType } from "../types/StateType";
import { ACTIONS } from "./reducer";

// Clears form and reloads page
export function handleReload(
  dispatch: Dispatch<Action>,
  originalState: StateType
): void {
  dispatch({ type: ACTIONS.SET_STATE, payload: originalState });
  window.location.reload();
}
