import { StateType } from "../types/StateType";

export function addOptionAction(state: StateType, name: string): StateType {
  // Add option to options
  state.options.push({
    id: state.options.length,
    name: name,
    attribute_weightings: [],
  });
  // Update option attributes with existing attributes
  state.attributes.forEach((attribute) => {
    state.options[state.options.length - 1].attribute_weightings.push({
      name: attribute.name,
      weighting: 50,
    });
  });

  console.log(state);
  return state;
}
