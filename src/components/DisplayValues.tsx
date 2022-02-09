import { StateType } from "../types/StateType";

interface DisplayValuesProps {
  state: StateType;
}

// Map through values and display each one
export function DisplayValues(props: DisplayValuesProps): JSX.Element {
  return (
    <div className="options-list">
      {props.state.values.map((value, index) => {
        return <p key={`${value.name}-${index}`}>{value.name}</p>;
      })}
    </div>
  );
}
