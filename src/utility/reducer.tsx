import { Action } from "../types/Action";
import { StateType } from "../types/StateType";
import { addOptionAction } from "../actions/addOptionAction";
import { addValueAction } from "../actions/addValueAction";
import { changeWeightingAction } from "../actions/changeWeightingAction";

// Actions available to reducer
export const ACTIONS = {
  ADD_OPTION: "add-option",
  ADD_VALUE: "add-value",
  CHANGE_WEIGHTING: "change-weighting",
};

// Reducer function for useReduce
export function reducer(state: StateType, action: Action): StateType {
  switch (action.type) {
    // Add a new option
    case ACTIONS.ADD_OPTION:
      addOptionAction(state, action.payload);
      return state;

    // Add a new value
    case ACTIONS.ADD_VALUE:
      addValueAction(state, action.payload);
      return state;

    // Change the weighting of a value
    case ACTIONS.CHANGE_WEIGHTING:
      changeWeightingAction(
        state,
        action.payload.name,
        action.payload.weighting
      );
      return state;

    default:
      return state;
  }
}
