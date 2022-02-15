import { Dispatch, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { Action } from "../types/Action";
import { StateType } from "../types/StateType";
import { ACTIONS } from "../utility/reducer";
import { DisplayChoices } from "./DisplayChoices";
import { notDuplicateOrEmpty } from "../utility/notDuplicateOrEmpty";

interface AddattributeProps {
  dispatch: Dispatch<Action>;
  state: StateType;
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

  return (
    <div className="add-attributes">
      <h2>What's important?</h2>

      <div className="attributes-list-and-add">
        <form className="add-attributes-form" onSubmit={(e) => AddAttribute(e)}>
          <input
            className="text-input add-attribute-input"
            type="text"
            placeholder="E.g. Tastiness, Affordability"
            value={attributeName}
            onChange={(e) => setAttributeName(e.target.value)}
          ></input>
          <button className="add-button" onClick={(e) => AddAttribute(e)}>
            <strong>Add Attribute</strong>
          </button>
        </form>
        <div className="text-input-helper-message">
          {props.state.attributes.length < 2 && (
            <p>Please provide at least two attributes.</p>
          )}
        </div>

        <DisplayChoices
          state={props.state}
          options={false}
          dispatch={props.dispatch}
        />
      </div>
    </div>
  );
}
