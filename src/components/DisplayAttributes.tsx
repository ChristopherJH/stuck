import { StateType } from "../types/StateType";

interface DisplayAttributesProps {
  state: StateType;
}

// Map through attributes and display each one
export function DisplayAttributes(props: DisplayAttributesProps): JSX.Element {
  return (
    <div className="attributes-list">
      {props.state.attributes.map((attribute, index) => {
        return <p key={`${attribute.name}-${index}`}>{attribute.name}</p>;
      })}
    </div>
  );
}
