import { Action } from "../types/Action";
import { StateType } from "../types/StateType";
import { addOptionAction } from "../actions/addOptionAction";
import { addValueAction } from "../actions/addValueAction";
import { changeValueWeightingAction } from "../actions/changeValueWeightingAction";
import { changeOptionWeightingAction } from "../actions/changeOptionWeightingAction";

// Actions available to reducer
export const ACTIONS = {
  ADD_OPTION: "add-option",
  ADD_VALUE: "add-value",
  CHANGE_VALUE_WEIGHTING: "change-value-weighting",
  CHANGE_OPTION_WEIGHTING: "change-option-weighting",
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
    case ACTIONS.CHANGE_VALUE_WEIGHTING:
      changeValueWeightingAction(
        state,
        action.payload.name,
        action.payload.weighting
      );
      return state;

    // Change the weighting of of a certain value on an option
    case ACTIONS.CHANGE_OPTION_WEIGHTING:
      changeOptionWeightingAction(
        state,
        action.payload.optionName,
        action.payload.attributeName,
        action.payload.weighting
      );
      return state;
    default:
      return state;
  }
}
