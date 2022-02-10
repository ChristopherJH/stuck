import { StateType } from "../types/StateType";
import { AddAttributeToOptions } from "../utility/AddAttributeToOptions";

export function addAttributeAction(state: StateType, name: string) {
  state.attributes.push({
    id: new Date(),
    name: name,
    weighting: 1,
  });
  // Add attribute to options attribute_weightings array
  AddAttributeToOptions(state, name);
  console.log(state);
}
