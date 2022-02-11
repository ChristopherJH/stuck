import { Dispatch } from "react";
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
  // Handler functions for updating the slider weight and changing it in reducer
  function handleWeightingChange(e: React.ChangeEvent<HTMLInputElement>) {
    props.dispatch({
      type: ACTIONS.CHANGE_attribute_WEIGHTING,
      payload: {
        name: props.attribute.name,
        weighting: parseInt(e.target.value),
      },
    });
  }

  return (
    <div className="weight-attribute">
      <h3>
        {props.attribute.name}: {props.attribute.weighting}
      </h3>
      <input
        type="range"
        className="slider"
        min={0}
        max={100}
        step={1}
        value={props.attribute.weighting}
        onChange={(e) => handleWeightingChange(e)}
      ></input>
    </div>
  );
}
