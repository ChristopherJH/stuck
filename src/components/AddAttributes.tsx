import { Dispatch, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { BUTTON_NAMES } from "../utility/buttonsReducer";
import { Action } from "../types/Action";
import { Button } from "../types/Button";
import { ButtonAction } from "../types/ButtonAction";
import { StateType } from "../types/StateType";
import { ACTIONS } from "../utility/reducer";
import { DisplayChoices } from "./DisplayChoices";
import { notDuplicateOrEmpty } from "../utility/notDuplicateOrEmpty";
import { GrAddCircle } from "react-icons/gr";

interface AddattributeProps {
  dispatch: Dispatch<Action>;
  state: StateType;
  buttonsDispatch: Dispatch<ButtonAction>;
  buttonsState: Button[];
}
export function AddAttributes(props: AddattributeProps): JSX.Element {
  const [attributeName, setAttributeName] = useState<string>("");

  // Handler function for adding a new attribute
  function AddAttribute(
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
    // Check whether a duplicate attribute or empty
    if (notDuplicateOrEmpty(props.state, attributeName, false)) {
      props.dispatch({
        type: ACTIONS.ADD_ATTRIBUTE,
        payload: attributeName,
      });
    } else {
      toast.warn("Invalid option");
    }
    setAttributeName("");
  }

  // Reveals next component if enough attributes given
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
        <form onSubmit={(e) => AddAttribute(e)}>
          <input
            className="text-input"
            type="text"
            placeholder="E.g. Tastiness, Affordability, Healthiness"
            value={attributeName}
            onChange={(e) => setAttributeName(e.target.value)}
          ></input>
          <button className="add-button" onClick={(e) => AddAttribute(e)}>
            <GrAddCircle className="add-icon" />
          </button>
        </form>

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
