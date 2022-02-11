import { StateType } from "../types/StateType";

// Returns true if name doesn't exist and isn't empty
export function notDuplicateOrEmpty(
  state: StateType,
  name: string,
  options: boolean
) {
  if (options) {
    return (
      state.options.find((choice) => choice.name === name) === undefined &&
      name !== ""
    );
  } else {
    return (
      state.attributes.find((choice) => choice.name === name) === undefined &&
      name !== ""
    );
  }
}
