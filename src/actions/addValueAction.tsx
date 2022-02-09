import { StateType } from "../types/StateType";
import { AddValueToOptions } from "../utility/AddValueToOptions";

export function addValueAction(state: StateType, name: string) {
  state.values.push({
    id: new Date(),
    name: name,
    weighting: 1,
  });
  // Add value to options value_weightings array
  AddValueToOptions(state, name);
  console.log(state);
}
