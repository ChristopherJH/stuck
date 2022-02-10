import { StateType } from "../types/StateType";

export function changeAttributeWeightingAction(
  state: StateType,
  name: string,
  weighting: number
) {
  const attribute = state.attributes.find(
    (attribute) => attribute.name === name
  );

  if (attribute !== undefined) {
    attribute["weighting"] = weighting;
  }
  console.log(state);
}
