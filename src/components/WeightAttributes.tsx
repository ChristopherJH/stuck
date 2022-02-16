import { Dispatch } from "react";
import { Action } from "../types/Action";
import { StateType } from "../types/StateType";
import { WeightAttribute } from "./WeightAttribute";

interface WeightAttributessProps {
  state: StateType;
  dispatch: Dispatch<Action>;
}

// Renders components where user can change weightings of attributes
export default function WeightAttributes(
  props: WeightAttributessProps
): JSX.Element {
  return (
    <div className="attributes-weights">
      <h2>How important are they❓</h2>
      <div className="attributes-weights-list">
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
      </div>
    </div>
  );
}
