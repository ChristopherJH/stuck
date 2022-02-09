import { Dispatch, useState } from "react";
import { ACTIONS } from "../App";
import { Action } from "../types/Action";
import { StateType } from "../types/StateType";
import { DisplayOptions } from "./DisplayOptions";

interface AddOptionProps {
  dispatch: Dispatch<Action>;
  state: StateType;
}
export function AddOptions(props: AddOptionProps): JSX.Element {
  const [optionValue, setOptionValue] = useState<string>("");

  function AddOption(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
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
    setOptionValue("");
  }

  return (
    <div className="add-options">
      <DisplayOptions state={props.state} />
      <input
        type="text"
        placeholder="Lasagna"
        value={optionValue}
        onChange={(e) => setOptionValue(e.target.value)}
      ></input>
      <button onClick={(e) => AddOption(e)}>Add</button>
    </div>
  );
}
