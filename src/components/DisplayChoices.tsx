import { Dispatch } from "react";
import ReactTooltip from "react-tooltip";
import { Action } from "../types/Action";
import { Attribute } from "../types/Attribute";
import { Option } from "../types/Option";
import { StateType } from "../types/StateType";
import { ACTIONS } from "../utility/reducer";

interface DisplayChoicesProps {
  state: StateType;
  options: boolean;
  dispatch: Dispatch<Action>;
}

// Map through attributes or options and display each one
export function DisplayChoices(props: DisplayChoicesProps): JSX.Element {
  let choices: Option[] | Attribute[];
  if (props.options) {
    choices = props.state.options;
  } else {
    choices = props.state.attributes;
  }

  // Deletes an option if clicked
  function deleteOption(name: string) {
    console.log("deleting choice: ", name);
    if (props.options) {
      props.dispatch({ type: ACTIONS.DELETE_OPTION, payload: name });
    } else {
      props.dispatch({ type: ACTIONS.DELETE_ATTRIBUTE, payload: name });
    }
  }

  return (
    <div className="choices-list">
      {choices.map((choice, index) => {
        return (
          <div
            className="choice"
            data-tip="Delete"
            onClick={() => deleteOption(choice.name)}
            key={`${choice.name}-${index}`}
          >
            <p>
              <strong>
                {index + 1}. {choice.name}
              </strong>
            </p>
            <ReactTooltip place="top" type="dark" effect="float" />
          </div>
        );
      })}
    </div>
  );
}
