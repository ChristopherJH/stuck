import { StateType } from "../types/StateType";

export function deleteOptionAction(state: StateType, name: string): StateType {
  let newState: StateType = JSON.parse(JSON.stringify(state));
  const updatedOptions = newState.options.filter(
    (option) => option.name !== name
  );
  newState.options = updatedOptions;
  return newState;
}
