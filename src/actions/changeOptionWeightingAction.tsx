import { StateType } from "../types/StateType";

export function changeOptionWeightingAction(
  state: StateType,
  optionName: string,
  attributeName: string,
  weighting: number
) {
  const option = state.options.find((option) => option.name === optionName);
  const attribute = option?.value_weightings.find(
    (value) => value.name === attributeName
  );

  if (attribute !== undefined) {
    attribute["weighting"] = weighting;
  }
  console.log(state);
}
