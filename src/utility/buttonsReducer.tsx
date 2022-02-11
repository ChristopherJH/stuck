import { Button } from "../types/Button";
import { ButtonAction } from "../types/ButtonAction";

export const BUTTON_NAMES = {
  SUBMIT_QUESTION: "submitQuestion",
  SUBMIT_OPTIONS: "submitOptions",
  SUBMIT_ATTRIBUTES: "submitAttributes",
  SUBMIT_ATTRIBUTES_WEIGHTS: "submitAttributesWeights",
  SUBMIT_OPTIONS_WEIGHTS: "submitOptionsWeights",
};

// Reducer function containing action to set button click property to true
export function buttonsReducer(
  state: Button[],
  action: ButtonAction
): Button[] {
  let newState: Button[];
  switch (action.type) {
    // Change button status to clicked
    case "click":
      newState = JSON.parse(JSON.stringify(state));
      const button = newState.find((button) => button.name === action.payload);
      if (button) {
        button.clicked = true;
        return newState;
      }
      return state;
    default:
      return state;
  }
}
