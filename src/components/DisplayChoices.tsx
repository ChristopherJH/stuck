import { List, ListItem, ListItemText, Divider, Tooltip } from "@mui/material";
import { Dispatch } from "react";
import { Action } from "../types/Action";
import { Attribute } from "../types/Attribute";
import { Option } from "../types/Option";
import { StateType } from "../types/StateType";
import { ACTIONS } from "../utility/reducer";

interface DisplayChoicesProps {
  state: StateType;
  options: boolean;
  dispatch: Dispatch<Action>;
}

// Map through attributes or options and display each one
export function DisplayChoices(props: DisplayChoicesProps): JSX.Element {
  let choices: Option[] | Attribute[];
  if (props.options) {
    choices = props.state.options;
  } else {
    choices = props.state.attributes;
  }

  // Deletes an option if clicked
  function deleteOption(name: string) {
    console.log("deleting choice: ", name);
    if (props.options) {
      props.dispatch({ type: ACTIONS.DELETE_OPTION, payload: name });
    } else {
      props.dispatch({ type: ACTIONS.DELETE_ATTRIBUTE, payload: name });
    }
  }

  return (
    <div className="choices-list">
      <List component="nav" aria-label="mailbox folders">
        {choices.map((choice, index) => {
          return (
            <div
              onClick={() => deleteOption(choice.name)}
              key={`${choice.name}-${index}`}
            >
              <Tooltip title="Delete" placement="right">
                <ListItem button>
                  <ListItemText primary={`${index + 1}. ${choice.name}`} />
                </ListItem>
              </Tooltip>
              <Divider />
            </div>
          );
        })}
      </List>
    </div>
  );
}
