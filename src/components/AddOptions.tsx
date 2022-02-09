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
  const [optionValue, setOptionValue] = useState<string>("");

  // Handler function for adding a new option
  function AddOption() {
    // Check whether a duplicate option or empty
    if (
      props.state.options.find((option) => option.name === optionValue) ===
        undefined &&
      optionValue !== ""
    ) {
      props.dispatch({
        type: ACTIONS.ADD_OPTION,
        payload: optionValue,
      });
    } else {
      console.log("Option already exists");
    }
    // Reset value
    setOptionValue("");
  }

  return (
    <div className="add-options">
      <h2>Options</h2>

      <DisplayOptions state={props.state} />
      <input
        type="text"
        placeholder="Lasagna"
        value={optionValue}
        onChange={(e) => setOptionValue(e.target.value)}
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
