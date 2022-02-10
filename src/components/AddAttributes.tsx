import { Dispatch, useState } from "react";
import { GrAddCircle } from "react-icons/gr";
import { Action } from "../types/Action";
import { StateType } from "../types/StateType";
import { ACTIONS } from "../utility/reducer";
import { DisplayAttributes } from "./DisplayAttributes";

interface AddattributeProps {
  dispatch: Dispatch<Action>;
  state: StateType;
  setFinishedAttributesClicked: (input: boolean) => void;
  finishAttributesClicked: boolean;
}
export function AddAttributes(props: AddattributeProps): JSX.Element {
  const [attributeName, setAttributeName] = useState<string>("");

  // Handler function for adding a new attribute
  function AddAttribute() {
    // Check whether a duplicate attribute or empty

    if (
      props.state.attributes.find((option) => option.name === attributeName) ===
        undefined &&
      attributeName !== ""
    ) {
      props.dispatch({
        type: ACTIONS.ADD_ATTRIBUTE,
        payload: attributeName,
      });
    } else {
      console.log("Attribute already exists");
    }
    setAttributeName("");
  }

  return (
    <div className="add-attributes">
      <h2>What's important?</h2>

      <div className="attributes-list-and-add">
        <input
          className="text-input"
          type="text"
          placeholder="Tastiness"
          value={attributeName}
          onChange={(e) => setAttributeName(e.target.value)}
        ></input>
        <button className="add-button" onClick={() => AddAttribute()}>
          <GrAddCircle className="add-icon" />
        </button>
        <DisplayAttributes state={props.state} />
      </div>

      {!props.finishAttributesClicked && (
        <button
          className="next-button"
          onClick={() => props.setFinishedAttributesClicked(true)}
        >
          Next
        </button>
      )}
    </div>
  );
}
