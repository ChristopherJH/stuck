import { Dispatch, useState } from "react";
import { Action } from "../types/Action";
import { StateType } from "../types/StateType";
import { ACTIONS } from "../utility/reducer";
import { DisplayValues } from "./DisplayValues";

interface AddValueProps {
  dispatch: Dispatch<Action>;
  state: StateType;
  setFinishedValuesClicked: (input: boolean) => void;
  finishValuesClicked: boolean;
}
export function AddValues(props: AddValueProps): JSX.Element {
  const [valueValue, setValueValue] = useState<string>("");

  // Handler function for adding a new value
  function AddValue() {
    // Check whether a duplicate value or empty

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
    <div className="add-values">
      <h2>Values</h2>
      <DisplayValues state={props.state} />
      <input
        type="text"
        placeholder="Tastiness"
        value={valueValue}
        onChange={(e) => setValueValue(e.target.value)}
      ></input>
      <button onClick={() => AddValue()}>Add</button>
      {!props.finishValuesClicked && (
        <button onClick={() => props.setFinishedValuesClicked(true)}>
          Next
        </button>
      )}
    </div>
  );
}
