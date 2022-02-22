import { Dispatch, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { Action } from "../types/Action";
import { StateType } from "../types/StateType";
import { ACTIONS } from "../utility/reducer";
import { DisplayChoices } from "./DisplayChoices";
import { notDuplicateOrEmpty } from "../utility/notDuplicateOrEmpty";
import { Button, TextField, Tooltip } from "@mui/material";

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
      <h2>What's important❓</h2>
      <p className="mobile-tips">E.g. Tastiness, Affordability</p>

      <div className="attributes-list-and-add">
        <form className="add-attributes-form" onSubmit={(e) => AddAttribute(e)}>
          <Tooltip title="E.g. Tastiness, Affordability" placement="top-start">
            <TextField
              fullWidth
              sx={{ mr: 1 }}
              id="outlined-basic"
              className="text-field add-attribute-input"
              label="Attribute"
              variant="outlined"
              value={attributeName}
              onChange={(e) => setAttributeName(e.target.value)}
            />
          </Tooltip>
          <Button
            variant="contained"
            className="add-button add-attribute-button"
            onClick={(e) => AddAttribute(e)}
          >
            <strong>Add</strong>
          </Button>
        </form>
        {props.state.attributes.length < 2 && (
          <div className="text-input-helper-message add-attributes-helper-message">
            <p>Please provide at least two attributes.</p>
          </div>
        )}

        <DisplayChoices
          state={props.state}
          options={false}
          dispatch={props.dispatch}
        />
      </div>
      {props.state.options.length > 1 && (
        <p className="scroll-message">Scroll to view the next section.</p>
      )}
    </div>
  );
}
