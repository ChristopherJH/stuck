import { Dispatch } from "react";
import { Option } from "../types/Option";
import { AttributeWeightType } from "../types/AttributeWeightType";
import { Action } from "../types/Action";
import { ACTIONS } from "../utility/reducer";

interface AttributeSliderProps {
  attribute: AttributeWeightType;
  dispatch: Dispatch<Action>;
  option: Option;
}

export function AttributeSlider(props: AttributeSliderProps): JSX.Element {
  function handleOptionWeightingChange(num: number) {
    props.dispatch({
      type: ACTIONS.CHANGE_OPTION_WEIGHTING,
      payload: {
        optionName: props.option.name,
        attributeName: props.attribute.name,
        weighting: num,
      },
    });
  }

  return (
    <div className="attribute-slider">
      <input
        type="range"
        className="slider"
        min="0"
        max="100"
        step="1"
        value={props.attribute.weighting}
        onChange={(e) => handleOptionWeightingChange(parseInt(e.target.value))}
      ></input>
      <h4>
        {props.attribute.name}: {props.attribute.weighting}
      </h4>
    </div>
  );
}
