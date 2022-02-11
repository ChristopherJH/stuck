import { Dispatch, useState } from "react";
import { GrAddCircle } from "react-icons/gr";
import { toast } from "react-toastify";
import { BUTTON_NAMES } from "../App";
import { Action } from "../types/Action";
import { Button } from "../types/Button";
import { ButtonAction } from "../types/ButtonAction";
import { StateType } from "../types/StateType";
import { ACTIONS } from "../utility/reducer";
import { DisplayChoices } from "./DisplayChoices";

interface AddattributeProps {
  dispatch: Dispatch<Action>;
  state: StateType;
  buttonsDispatch: Dispatch<ButtonAction>;
  buttonsState: Button[];
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
  function handleNextClicked() {
    if (props.state.attributes.length > 1) {
      props.buttonsDispatch({
        type: "click",
        payload: BUTTON_NAMES.SUBMIT_ATTRIBUTES,
      });
    } else {
      toast.warn("Add atleast two attributes");
    }
  }

  return (
    <div className="add-attributes">
      <h2>What's important?</h2>

      <div className="attributes-list-and-add">
        <input
          className="text-input"
          type="text"
          placeholder="E.g. Tastiness, Affordability, Healthiness"
          value={attributeName}
          onChange={(e) => setAttributeName(e.target.value)}
        ></input>
        <button className="add-button" onClick={() => AddAttribute()}>
          <GrAddCircle className="add-icon" />
        </button>
        <DisplayChoices state={props.state} options={false} />
      </div>

      {!props.buttonsState[2].clicked && (
        <button className="next-button" onClick={() => handleNextClicked()}>
          <strong>Next</strong>
        </button>
      )}
    </div>
  );
}
