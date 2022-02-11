import { Dispatch } from "react";
import { Option } from "../types/Option";
import { Action } from "../types/Action";
import { AttributeSlider } from "./AttributeSlider";

interface WeightOptionProps {
  option: Option;
  dispatch: Dispatch<Action>;
}

export function WeightOption(props: WeightOptionProps): JSX.Element {
  return (
    <div className="weight-option">
      <h3>{props.option.name}</h3>
      {props.option.attribute_weightings.map((attribute) => {
        return (
          <AttributeSlider
            key={`attribute-slider-${attribute.name}`}
            option={props.option}
            attribute={attribute}
            dispatch={props.dispatch}
          />
        );
      })}
    </div>
  );
}
