import { Dispatch } from "react";
import { Action } from "../types/Action";
import { StateType } from "../types/StateType";
import { WeightAttribute } from "./WeightAttribute";

interface WeightAttributessProps {
  state: StateType;
  dispatch: Dispatch<Action>;
  WeightAttributesClicked: boolean;
  setWeightAttributesClicked: (input: boolean) => void;
}

// Renders components where user can change weightings of attributes
export default function WeightAttributes(
  props: WeightAttributessProps
): JSX.Element {
  return (
    <div className="attributes-weights">
      <h2>Importance of Attributes</h2>
      {props.state.attributes.map((attribute) => {
        return (
          <WeightAttribute
            attribute={attribute}
            key={`${attribute.name}-attribute`}
            dispatch={props.dispatch}
            state={props.state}
          />
        );
      })}
      {!props.WeightAttributesClicked && (
        <button onClick={() => props.setWeightAttributesClicked(true)}>
          Next
        </button>
      )}
    </div>
  );
}
