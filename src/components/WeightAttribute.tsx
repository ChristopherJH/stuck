import { Dispatch, useState } from "react";
import { Action } from "../types/Action";
import { StateType } from "../types/StateType";
import { Attribute } from "../types/Attribute";
import { ACTIONS } from "../utility/reducer";
import { displayImportance } from "../utility/displayImportance";
import { Rating, Typography } from "@mui/material";

interface WeightAttributeProps {
  attribute: Attribute;
  dispatch: Dispatch<Action>;
  state: StateType;
}

// A single component where the user can change the weighting of a attribute
export function WeightAttribute(props: WeightAttributeProps): JSX.Element {
  const [hover, setHover] = useState<number>(-1);

  // Handler functions for updating the slider weight and changing it in reducer
  function handleWeightingChange(event: any, newValue: number | null) {
    props.dispatch({
      type: ACTIONS.CHANGE_attribute_WEIGHTING,
      payload: {
        name: props.attribute.name,
        weighting: newValue ? newValue : 0,
      },
    });
  }

  return (
    <div
      className="weight-attribute"
      id={`weight-attribute-${props.attribute.name}`}
    >
      <h3>{props.attribute.name}</h3>
      <Rating
        name="hover-feedback"
        value={props.attribute.weighting}
        precision={0.5}
        onChange={handleWeightingChange}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      <Typography component="legend">
        {" "}
        {displayImportance(hover !== -1 ? hover : props.attribute.weighting)}
      </Typography>
    </div>
  );
}
