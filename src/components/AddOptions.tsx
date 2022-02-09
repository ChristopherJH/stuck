import { Dispatch, useState } from "react";
import { ACTIONS } from "../App";
import { Action } from "../types/Action";
import { StateType } from "../types/StateType";

interface AddOptionProps {
  dispatch: Dispatch<Action>;
  state: StateType;
}
export function AddOptions(props: AddOptionProps): JSX.Element {
  const [optionValue, setOptionValue] = useState<string>("");

  function AddOption() {
    props.dispatch({
      type: ACTIONS.ADD_OPTION,
      payload: optionValue,
    });
    setOptionValue("");
  }

  return (
    <div className="add-options">
      {props.state.options.map((option, index) => {
        return <p key={`option.name-${index}`}>{option.name}</p>;
      })}
      <input
        type="text"
        placeholder="Lasagna"
        onChange={(e) => setOptionValue(e.target.value)}
      ></input>
      <button onClick={AddOption}>Add</button>
    </div>
  );
}
