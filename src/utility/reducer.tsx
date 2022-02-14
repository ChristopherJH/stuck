import { Action } from "../types/Action";
import { StateType } from "../types/StateType";
import { addOptionAction } from "../actions/addOptionAction";
import { addAttributeAction } from "../actions/addAttributeAction";
import { changeAttributeWeightingAction } from "../actions/changeAttributeWeightingAction";
import { changeOptionWeightingAction } from "../actions/changeOptionWeightingAction";
import { deleteOptionAction } from "../actions/deleteOptionAction";
import { deleteAttributeAction } from "../actions/deleteAttributeAction";

// Actions available to reducer
export const ACTIONS = {
  ADD_OPTION: "add-option",
  ADD_ATTRIBUTE: "add-attribute",
  CHANGE_attribute_WEIGHTING: "change-attribute-weighting",
  CHANGE_OPTION_WEIGHTING: "change-option-weighting",
  ADD_QUESTION: "add-question",
  DELETE_OPTION: "delete-option",
  DELETE_ATTRIBUTE: "delete-attribute",
};

// Reducer function for useReduce
export function reducer(state: StateType, action: Action): StateType {
  let newState: StateType;
  switch (action.type) {
    // Add a new option
    case ACTIONS.ADD_OPTION:
      newState = addOptionAction(state, action.payload);
      return newState;

    // Add a new attribute
    case ACTIONS.ADD_ATTRIBUTE:
      newState = addAttributeAction(state, action.payload);
      return newState;

    // Change the weighting of a attribute
    case ACTIONS.CHANGE_attribute_WEIGHTING:
      newState = changeAttributeWeightingAction(
        state,
        action.payload.name,
        action.payload.weighting
      );
      return newState;

    // Change the weighting of of a certain attribute on an option
    case ACTIONS.CHANGE_OPTION_WEIGHTING:
      newState = changeOptionWeightingAction(
        state,
        action.payload.optionName,
        action.payload.attributeName,
        action.payload.weighting
      );
      return newState;
    // Add question to be answered
    case ACTIONS.ADD_QUESTION:
      newState = JSON.parse(JSON.stringify(state));
      newState.question = action.payload.question;
      return newState;
    // Delete an option
    case ACTIONS.DELETE_OPTION:
      newState = deleteOptionAction(state, action.payload);
      return newState;
    // Delete an attribute
    case ACTIONS.DELETE_ATTRIBUTE:
      newState = deleteAttributeAction(state, action.payload);
      return newState;
    default:
      return state;
  }
}
