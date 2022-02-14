import { StateType } from "../types/StateType";

export function deleteAttributeAction(
  state: StateType,
  name: string
): StateType {
  console.log("Deleting attribute: ", name);
  let newState: StateType = JSON.parse(JSON.stringify(state));
  const updatedAttributes = newState.attributes.filter(
    (attribute) => attribute.name !== name
  );
  newState.attributes = updatedAttributes;

  newState.options.map((option) => {
    option.attribute_weightings.filter((attribute) => attribute.name !== name);
    return option;
  });
  return newState;
}
