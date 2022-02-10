import { useState } from "react";
import { Option } from "../types/Option";
import { StateType } from "../types/StateType";
import { ValueWeightType } from "../types/ValueWeightType";

interface WeightOptionsProps {
  state: StateType;
}
export function WeightOptions(props: WeightOptionsProps): JSX.Element {
  return (
    <div className="weight-options">
      {props.state.options.map((option) => {
        return <WeightOption option={option} />;
      })}
    </div>
  );
}

interface WeightOptionProps {
  option: Option;
}
function WeightOption(props: WeightOptionProps): JSX.Element {
  return (
    <div className="weight-option">
      <h3>{props.option.name}</h3>
      {props.option.value_weightings.map((value) => {
        return <ValueSlider value={value} />;
      })}
    </div>
  );
}

interface ValueSliderProps {
  value: ValueWeightType;
}

function ValueSlider(props: ValueSliderProps): JSX.Element {
  const [weighting, setWeighting] = useState<number>(props.value.weighting);

  return (
    <div className="value-slider">
      <input type="range" min="0" max="100" step="1" value={weighting}></input>
    </div>
  );
}
