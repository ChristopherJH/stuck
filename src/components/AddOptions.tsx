import { Dispatch, FormEvent, useState } from "react";
import { Action } from "../types/Action";
import { StateType } from "../types/StateType";
import { ACTIONS } from "../utility/reducer";
import { DisplayChoices } from "./DisplayChoices";
import { toast } from "react-toastify";
import { notDuplicateOrEmpty } from "../utility/notDuplicateOrEmpty";

interface AddOptionProps {
  dispatch: Dispatch<Action>;
  state: StateType;
}
export function AddOptions(props: AddOptionProps): JSX.Element {
  const [optionName, setOptionName] = useState<string>("");

  // Handler function for adding a new option
  function AddOption(
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
    // Check whether a duplicate option or empty
    if (notDuplicateOrEmpty(props.state, optionName, true)) {
      props.dispatch({
        type: ACTIONS.ADD_OPTION,
        payload: optionName,
      });
    } else {
      toast.warn("Invalid option");
    }
    // Reset attribute
    setOptionName("");
  }

  return (
    <div className="add-options">
      <h2>What are the options❓</h2>

      <div className="options-list-and-add">
        <form className="add-options-form" onSubmit={(e) => AddOption(e)}>
          <input
            className="text-input add-option-input"
            type="text"
            placeholder="E.g. Pasta, Pizza"
            value={optionName}
            onChange={(e) => setOptionName(e.target.value)}
          ></input>
          <button className="add-button" onClick={(e) => AddOption(e)}>
            <strong>Add Option</strong>
          </button>
        </form>
        <div className="text-input-helper-message">
          {props.state.options.length < 2 && (
            <p>Please provide at least two options.</p>
          )}
        </div>

        <DisplayChoices
          state={props.state}
          options={true}
          dispatch={props.dispatch}
        />
      </div>
    </div>
  );
}
