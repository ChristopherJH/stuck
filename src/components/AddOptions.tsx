import { Dispatch, useState } from "react";
import { Action } from "../types/Action";
import { StateType } from "../types/StateType";
import { ACTIONS } from "../utility/reducer";
import { GrAddCircle } from "react-icons/gr";
import { DisplayChoices } from "./DisplayChoices";

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
      <h2>What are the options?</h2>

      <div className="options-list-and-add">
        <input
          className="text-input"
          type="text"
          placeholder="Lasagna"
          value={optionAttribute}
          onChange={(e) => setOptionAttribute(e.target.value)}
        ></input>
        <button className="add-button" onClick={() => AddOption()}>
          <GrAddCircle className="add-icon" />
        </button>
        <DisplayChoices state={props.state} options={true} />
      </div>

      {!props.finishOptionsClicked && (
        <button
          className="next-button"
          onClick={() => props.setFinishedOptionsClicked(true)}
        >
          Next
        </button>
      )}
    </div>
  );
}
