import { Dispatch, useState } from "react";
import { ACTIONS } from "../App";
import { Action } from "../types/Action";
import { StateType } from "../types/StateType";
import { DisplayValues } from "./DisplayValues";

interface AddValueProps {
  dispatch: Dispatch<Action>;
  state: StateType;
}
export function AddValues(props: AddValueProps): JSX.Element {
  const [valueValue, setValueValue] = useState<string>("");

  function AddValue(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (
      props.state.values.find((option) => option.name === valueValue) ===
        undefined &&
      valueValue !== ""
    ) {
      props.dispatch({
        type: ACTIONS.ADD_VALUE,
        payload: valueValue,
      });
    } else {
      console.log("Value already exists");
    }
    setValueValue("");
  }

  return (
    <div className="add-options">
      <DisplayValues state={props.state} />
      <input
        type="text"
        placeholder="Lasagna"
        value={valueValue}
        onChange={(e) => setValueValue(e.target.value)}
      ></input>
      <button onClick={(e) => AddValue(e)}>Add</button>
    </div>
  );
}
