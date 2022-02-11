import { Dispatch } from "react";
import { BUTTON_NAMES } from "../App";
import { Action } from "../types/Action";
import { Button } from "../types/Button";
import { ButtonAction } from "../types/ButtonAction";
import { StateType } from "../types/StateType";
import { WeightAttribute } from "./WeightAttribute";

interface WeightAttributessProps {
  state: StateType;
  dispatch: Dispatch<Action>;
  buttonsDispatch: Dispatch<ButtonAction>;
  buttonsState: Button[];
}

// Renders components where user can change weightings of attributes
export default function WeightAttributes(
  props: WeightAttributessProps
): JSX.Element {
  return (
    <div className="attributes-weights">
      <h2>How important are they?</h2>
      <h3>(Higher is better)</h3>

      <div className="attributes-weights-list">
        {props.state.attributes.map((attribute) => {
          return (
            <WeightAttribute
              attribute={attribute}
              key={`${attribute.name}-attribute`}
              dispatch={props.dispatch}
              state={props.state}
            />
          );
        })}
      </div>

      {!props.buttonsState[3].clicked && (
        <button
          className="next-button"
          onClick={() =>
            props.buttonsDispatch({
              type: "click",
              payload: BUTTON_NAMES.SUBMIT_ATTRIBUTES_WEIGHTS,
            })
          }
        >
          <strong>Next</strong>
        </button>
      )}
    </div>
  );
}
