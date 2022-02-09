import { StateType } from "../types/StateType";

interface DisplayOptionsProps {
  state: StateType;
}

// Map through options and display each one
export function DisplayOptions(props: DisplayOptionsProps): JSX.Element {
  return (
    <div className="options-list">
      {props.state.options.map((option, index) => {
        return <p key={`${option.name}-${index}`}>{option.name}</p>;
      })}
    </div>
  );
}
