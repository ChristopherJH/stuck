import { Dispatch } from "react";
import { Action } from "../types/Action";
import { StateType } from "../types/StateType";
import { ValueWeighting } from "./ValueWeighting";

interface ValuesWeightingsProps {
  state: StateType;
  dispatch: Dispatch<Action>;
}

// Renders components where user can change weightings of values
export default function ValuesWeightings(
  props: ValuesWeightingsProps
): JSX.Element {
  return (
    <div className="values-weights">
      {props.state.values.map((value) => {
        return (
          <ValueWeighting
            value={value}
            key={`${value.name}-value`}
            dispatch={props.dispatch}
            state={props.state}
          />
        );
      })}
    </div>
  );
}
