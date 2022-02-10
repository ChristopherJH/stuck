import { Dispatch, useState } from "react";
import { Action } from "../types/Action";
import { StateType } from "../types/StateType";
import { ACTIONS } from "../utility/reducer";
import { DisplayOptions } from "./DisplayOptions";

interface AddOptionProps {
  dispatch: Dispatch<Action>;
  state: StateType;
  setFinishedOptionsClicked: (input: boolean) => void;
  finishOptionsClicked: boolean;
}
export function AddOptions(props: AddOptionProps): JSX.Element {
  const [optionAttribute, setOptionAttribute] = useState<string>("");

  // Handler function for adding a new option
  function AddOption() {
    // Check whether a duplicate option or empty
    if (
      props.state.options.find((option) => option.name === optionAttribute) ===
        undefined &&
      optionAttribute !== ""
    ) {
      props.dispatch({
        type: ACTIONS.ADD_OPTION,
        payload: optionAttribute,
      });
    } else {
      console.log("Option already exists");
    }
    // Reset attribute
    setOptionAttribute("");
  }

  return (
    <div className="add-options">
      <h2>Options</h2>

      <DisplayOptions state={props.state} />
      <input
        className="text-input"
        type="text"
        placeholder="Lasagna"
        value={optionAttribute}
        onChange={(e) => setOptionAttribute(e.target.value)}
      ></input>
      <button onClick={() => AddOption()}>Add</button>
      {!props.finishOptionsClicked && (
        <button onClick={() => props.setFinishedOptionsClicked(true)}>
          Next
        </button>
      )}
    </div>
  );
}
