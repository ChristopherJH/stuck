import { Dispatch } from "react";
import { StateType } from "../types/StateType";
import { Action } from "../types/Action";
import { WeightOption } from "./WeightOption";

interface WeightOptionsProps {
  state: StateType;
  dispatch: Dispatch<Action>;
}
export function WeightOptions(props: WeightOptionsProps): JSX.Element {
  return (
    <div className="weight-options">
      <h2>Weigh up your options</h2>
      {props.state.options.map((option) => {
        return <WeightOption option={option} dispatch={props.dispatch} />;
      })}
    </div>
  );
}
