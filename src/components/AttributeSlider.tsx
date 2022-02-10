import { Dispatch, useState } from "react";
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
  const [weighting, setWeighting] = useState<number>(props.attribute.weighting);

  function handleOptionWeightingChange(num: number) {
    setWeighting(num);
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
      <div className="attribute-slider-and-number">
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={weighting}
          onChange={(e) =>
            handleOptionWeightingChange(parseInt(e.target.value))
          }
        ></input>
        <p>{weighting}</p>
      </div>
      <h4>{props.attribute.name}</h4>
    </div>
  );
}
