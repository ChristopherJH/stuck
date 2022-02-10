import { StateType } from "../types/StateType";
import { AddAttributeToOptions } from "../utility/AddAttributeToOptions";

export function addAttributeAction(state: StateType, name: string): StateType {
  state.attributes.push({
    id: state.attributes.length,
    name: name,
    weighting: 50,
  });
  // Add attribute to options attribute_weightings array
  AddAttributeToOptions(state, name);
  console.log(state);
  return state;
}
