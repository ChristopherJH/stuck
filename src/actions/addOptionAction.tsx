import { StateType } from "../types/StateType";

export function addOptionAction(state: StateType, name: string): StateType {
  // Create a copy of the state
  const newState: StateType = JSON.parse(JSON.stringify(state));
  // Add option to options
  newState.options.push({
    id: newState.options.length,
    name: name,
    attribute_weightings: [],
  });
  // Update option attributes with existing attributes
  newState.attributes.forEach((attribute) => {
    newState.options[newState.options.length - 1].attribute_weightings.push({
      name: attribute.name,
      weighting: 50,
    });
  });

  console.log(newState);
  return newState;
}
