import { StateType } from "../types/StateType";
import { AddAttributeToOptions } from "../utility/AddAttributeToOptions";

export function addAttributeAction(state: StateType, name: string): StateType {
  // Create a copy of the state
  const newState: StateType = JSON.parse(JSON.stringify(state));
  newState.attributes.push({
    id: newState.attributes.length,
    name: name,
    weighting: 2.5,
  });
  // Add attribute to options attribute_weightings array
  AddAttributeToOptions(newState, name);
  console.log(newState);
  return newState;
}
