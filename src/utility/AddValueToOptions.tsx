import { StateType } from "../types/StateType";

export function AddValueToOptions(state: StateType, name: string) {
  state.options.map((option) =>
    option.value_weightings.push({ name: name, weighting: 1 })
  );
}
