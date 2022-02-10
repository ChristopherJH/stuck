import { Dispatch, useState } from "react";
import { Action } from "../types/Action";
import { StateType } from "../types/StateType";
import { Attribute } from "../types/Attribute";
import { ACTIONS } from "../utility/reducer";

interface WeightAttributeProps {
  attribute: Attribute;
  dispatch: Dispatch<Action>;
  state: StateType;
}

// A single component where the user can change the weighting of a attribute
export function WeightAttribute(props: WeightAttributeProps): JSX.Element {
  // State to update slider attributes
  const [weighting, setWeighting] = useState<number>(50);

  // Handler functions for updating the slider weight and changing it in reducer
  function handleWeightingChange(num: number) {
    setWeighting(num);
    props.dispatch({
      type: ACTIONS.CHANGE_attribute_WEIGHTING,
      payload: { name: props.attribute.name, weighting: num },
    });
  }

  return (
    <div className="weight-attribute">
      <h3>{props.attribute.name}</h3>
      <input
        type="range"
        min={0}
        max={100}
        step={1}
        value={weighting}
        onChange={(e) => handleWeightingChange(parseInt(e.target.value))}
      ></input>
      <p>{weighting}</p>
    </div>
  );
}
