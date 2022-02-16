import { Dispatch } from "react";
import { Option } from "../types/Option";
import { AttributeWeightType } from "../types/AttributeWeightType";
import { Action } from "../types/Action";
import { ACTIONS } from "../utility/reducer";
import { Rating, Typography } from "@mui/material";

interface AttributeSliderProps {
  attribute: AttributeWeightType;
  dispatch: Dispatch<Action>;
  option: Option;
}

export function AttributeSlider(props: AttributeSliderProps): JSX.Element {
  function handleOptionWeightingChange(event: any, newValue: number | null) {
    props.dispatch({
      type: ACTIONS.CHANGE_OPTION_WEIGHTING,
      payload: {
        optionName: props.option.name,
        attributeName: props.attribute.name,
        weighting: newValue ? newValue : 0,
      },
    });
  }

  return (
    <div className="attribute-slider">
      <Typography component="legend">{props.attribute.name}</Typography>
      <Rating
        name="simple-controlled"
        defaultValue={2.5}
        precision={0.5}
        onChange={handleOptionWeightingChange}
      />
    </div>
  );
}
