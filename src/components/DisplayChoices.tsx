import { Attribute } from "../types/Attribute";
import { Option } from "../types/Option";
import { StateType } from "../types/StateType";

interface DisplayChoicesProps {
  state: StateType;
  options: boolean;
}

// Map through attributes and display each one
export function DisplayChoices(props: DisplayChoicesProps): JSX.Element {
  let choices: Option[] | Attribute[];
  if (props.options) {
    choices = props.state.options;
  } else {
    choices = props.state.attributes;
  }
  return (
    <div className="choices-list">
      {choices.map((attribute, index) => {
        return (
          <p key={`${attribute.name}-${index}`}>
            <strong>{attribute.name}</strong>
          </p>
        );
      })}
    </div>
  );
}
