import { StateType } from "../types/StateType";

export function addOptionAction(state: StateType, name: string) {
  state.options.push({
    id: new Date(),
    name: name,
    value_weightings: [],
  });
  console.log(state);
}
