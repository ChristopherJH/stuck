import { StateType } from "../types/StateType";

export function changeOptionWeightingAction(
  state: StateType,
  optionName: string,
  attributeName: string,
  weighting: number
) {
  // Find option
  const option = state.options.find((option) => option.name === optionName);
  // Find attribute
  const attribute = option?.attribute_weightings.find(
    (attribute) => attribute.name === attributeName
  );

  // Set attribute weighting
  if (attribute !== undefined) {
    attribute["weighting"] = weighting;
  }
  console.log(state);
}
