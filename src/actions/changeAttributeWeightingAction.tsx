import { StateType } from "../types/StateType";

export function changeAttributeWeightingAction(
  state: StateType,
  name: string,
  weighting: number
): StateType {
  // Create a copy of the state
  const newState: StateType = JSON.parse(JSON.stringify(state));
  const attribute = newState.attributes.find(
    (attribute) => attribute.name === name
  );

  if (attribute !== undefined) {
    attribute["weighting"] = weighting;
  }
  console.log(newState);
  return newState;
}
