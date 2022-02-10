import { Dispatch } from "react";
import { Action } from "../types/Action";
import { StateType } from "../types/StateType";
import { WeightValue } from "./WeightValue";

interface WeightValuessProps {
  state: StateType;
  dispatch: Dispatch<Action>;
  WeightValuesClicked: boolean;
  setWeightValuesClicked: (input: boolean) => void;
}

// Renders components where user can change weightings of values
export default function WeightValues(props: WeightValuessProps): JSX.Element {
  return (
    <div className="values-weights">
      {props.state.values.map((value) => {
        return (
          <WeightValue
            value={value}
            key={`${value.name}-value`}
            dispatch={props.dispatch}
            state={props.state}
          />
        );
      })}
      {!props.WeightValuesClicked && (
        <button onClick={() => props.setWeightValuesClicked(true)}>Next</button>
      )}
    </div>
  );
}
