import { Dispatch, FormEvent, useState } from "react";
import { Action } from "../types/Action";
import { StateType } from "../types/StateType";
import { ACTIONS } from "../utility/reducer";
import { DisplayChoices } from "./DisplayChoices";
import { toast } from "react-toastify";
import { ButtonAction } from "../types/ButtonAction";
import { Button } from "../types/Button";
import { BUTTON_NAMES } from "../utility/buttonsReducer";
import { notDuplicateOrEmpty } from "../utility/notDuplicateOrEmpty";
import { GrAddCircle } from "react-icons/gr";

interface AddOptionProps {
  dispatch: Dispatch<Action>;
  state: StateType;
  buttonsDispatch: Dispatch<ButtonAction>;
  buttonsState: Button[];
}
export function AddOptions(props: AddOptionProps): JSX.Element {
  const [optionName, setOptionName] = useState<string>("");

  // Handler function for adding a new option
  function AddOption(
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
    // Check whether a duplicate option or empty
    if (notDuplicateOrEmpty(props.state, optionName, true)) {
      props.dispatch({
        type: ACTIONS.ADD_OPTION,
        payload: optionName,
      });
    } else {
      toast.warn("Invalid option");
    }
    // Reset attribute
    setOptionName("");
  }

  // Reveals next component if enough options given
  function handleNextClicked() {
    if (props.state.options.length > 1) {
      props.buttonsDispatch({
        type: "click",
        payload: BUTTON_NAMES.SUBMIT_OPTIONS,
      });
    } else {
      toast.warn("Add atleast two options");
    }
  }

  return (
    <div className="add-options">
      <h2>What are the options?</h2>

      <div className="options-list-and-add">
        <form onSubmit={(e) => AddOption(e)}>
          <input
            className="text-input"
            type="text"
            placeholder="E.g. Lasagna, Curry, Pizza"
            value={optionName}
            onChange={(e) => setOptionName(e.target.value)}
          ></input>
          <button className="add-button" onClick={(e) => AddOption(e)}>
            <GrAddCircle className="add-icon" />
          </button>
        </form>

        <DisplayChoices state={props.state} options={true} />
      </div>

      {!props.buttonsState[1].clicked && (
        <button className="next-button" onClick={() => handleNextClicked()}>
          <strong>Next</strong>
        </button>
      )}
    </div>
  );
}
