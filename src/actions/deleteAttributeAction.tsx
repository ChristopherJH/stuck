import { StateType } from "../types/StateType";

export function deleteAttributeAction(
  state: StateType,
  name: string
): StateType {
  // Make a copy of state
  let newState: StateType = JSON.parse(JSON.stringify(state));
  // Update to remove chosen attribute
  const updatedAttributes = newState.attributes.filter(
    (attribute) => attribute.name !== name
  );
  newState.attributes = updatedAttributes;

  // Remove attribute from each options weightings
  newState.options.map((option) => {
    const newWeightings = option.attribute_weightings.filter(
      (attribute) => attribute.name !== name
    );
    option.attribute_weightings = newWeightings;
    return option;
  });
  return newState;
}
