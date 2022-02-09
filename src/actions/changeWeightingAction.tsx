import { StateType } from "../types/StateType";

export function changeWeightingAction(
  state: StateType,
  name: string,
  weighting: number
) {
  const value = state.values.find((value) => value.name === name);

  if (value !== undefined) {
    value["weighting"] = weighting;
  }
  console.log(state);
}
