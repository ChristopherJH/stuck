import { Action } from "../types/Action";
import { StateType } from "../types/StateType";
import { addOptionAction } from "../actions/addOptionAction";
import { addAttributeAction } from "../actions/addAttributeAction";
import { changeAttributeWeightingAction } from "../actions/changeAttributeWeightingAction";
import { changeOptionWeightingAction } from "../actions/changeOptionWeightingAction";

// Actions available to reducer
export const ACTIONS = {
  ADD_OPTION: "add-option",
  ADD_ATTRIBUTE: "add-attribute",
  CHANGE_attribute_WEIGHTING: "change-attribute-weighting",
  CHANGE_OPTION_WEIGHTING: "change-option-weighting",
};

// Reducer function for useReduce
export function reducer(state: StateType, action: Action): StateType {
  switch (action.type) {
    // Add a new option
    case ACTIONS.ADD_OPTION:
      addOptionAction(state, action.payload);
      return state;

    // Add a new attribute
    case ACTIONS.ADD_ATTRIBUTE:
      addAttributeAction(state, action.payload);
      return state;

    // Change the weighting of a attribute
    case ACTIONS.CHANGE_attribute_WEIGHTING:
      changeAttributeWeightingAction(
        state,
        action.payload.name,
        action.payload.weighting
      );
      return state;

    // Change the weighting of of a certain attribute on an option
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
