import { StateType } from "../types/StateType";

export function AddAttributeToOptions(state: StateType, name: string) {
  state.options.map((option) =>
    option.attribute_weightings.push({ name: name, weighting: 50 })
  );
}
