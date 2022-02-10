import { StateType } from "../types/StateType";

export function addOptionAction(state: StateType, name: string) {
  state.options.push({
    id: new Date(),
    name: name,
    attribute_weightings: [],
  });
  console.log(state);
}
