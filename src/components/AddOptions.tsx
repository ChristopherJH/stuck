import { Dispatch, FormEvent, useState } from "react";
import { Action } from "../types/Action";
import { StateType } from "../types/StateType";
import { ACTIONS } from "../utility/reducer";
import { DisplayChoices } from "./DisplayChoices";
import { toast } from "react-toastify";
import { notDuplicateOrEmpty } from "../utility/notDuplicateOrEmpty";
import { Button, TextField, Tooltip } from "@mui/material";

interface AddOptionProps {
  dispatch: Dispatch<Action>;
  state: StateType;
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

  return (
    <div className="add-options">
      <h2>What are the options❓</h2>
      <p className="mobile-tips">E.g. Lasagna, Pizza, Sandwich</p>

      <div className="options-list-and-add">
        <form className="add-options-form" onSubmit={(e) => AddOption(e)}>
          <Tooltip title="E.g. Lasagna, Pizza, Sandwich" placement="top-start">
            <TextField
              fullWidth
              sx={{ mr: 1 }}
              id="outlined-basic"
              className="text-field"
              label="Option"
              variant="outlined"
              value={optionName}
              onChange={(e) => setOptionName(e.target.value)}
            />
          </Tooltip>

          <Button
            variant="contained"
            className="add-button"
            onClick={(e) => AddOption(e)}
          >
            <strong>Add</strong>
          </Button>
        </form>
        <div className="text-input-helper-message">
          {props.state.options.length < 2 && (
            <p>Please provide at least two options.</p>
          )}
        </div>

        <DisplayChoices
          state={props.state}
          options={true}
          dispatch={props.dispatch}
        />
      </div>
      {props.state.options.length > 1 && (
        <p className="scroll-message">Scroll to view the next section.</p>
      )}
    </div>
  );
}
