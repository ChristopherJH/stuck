import { Dispatch, useState } from "react";
import { Action } from "../types/Action";
import { StateType } from "../types/StateType";
import { Value } from "../types/Value";
import { ACTIONS } from "../utility/reducer";

interface WeightValueProps {
  value: Value;
  dispatch: Dispatch<Action>;
  state: StateType;
}

// A single component where the user can change the weighting of a value
export function WeightValue(props: WeightValueProps): JSX.Element {
  // State to update slider values
  const [weighting, setWeighting] = useState<number>(1);

  // Handler functions for updating the slider weight and changing it in reducer
  function handleWeightingChange(num: number) {
    setWeighting(num);
    props.dispatch({
      type: ACTIONS.CHANGE_VALUE_WEIGHTING,
      payload: { name: props.value.name, weighting: num },
    });
  }

  return (
    <div className="value-weight">
      <h4>Weighting</h4>
      <input
        type="range"
        min={0}
        max={100}
        step={1}
        value={weighting}
        onChange={(e) => handleWeightingChange(parseInt(e.target.value))}
      ></input>
      <p>{weighting}</p>
      <h3>{props.value.name}</h3>
    </div>
  );
}
