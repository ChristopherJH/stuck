import { Button } from "../types/Button";
import { ButtonAction } from "../types/ButtonAction";

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
