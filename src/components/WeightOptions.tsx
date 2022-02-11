import { Dispatch } from "react";
import { StateType } from "../types/StateType";
import { Action } from "../types/Action";
import { WeightOption } from "./WeightOption";
import { Button } from "../types/Button";
import { ButtonAction } from "../types/ButtonAction";
import { BUTTON_NAMES } from "../utility/buttonsReducer";

interface WeightOptionsProps {
  state: StateType;
  dispatch: Dispatch<Action>;
  buttonsDispatch: Dispatch<ButtonAction>;
  buttonsState: Button[];
}
export function WeightOptions(props: WeightOptionsProps): JSX.Element {
  return (
    <div className="weight-options">
      <h2>Weigh up your options...</h2>
      <div className="options-weights-list">
        {props.state.options.map((option) => {
          return (
            <WeightOption
              key={`option-${option.id}`}
              option={option}
              dispatch={props.dispatch}
            />
          );
        })}
      </div>

      {!props.buttonsState[4].clicked && (
        <button
          className="reveal-winner-button"
          onClick={() =>
            props.buttonsDispatch({
              type: "click",
              payload: BUTTON_NAMES.SUBMIT_OPTIONS_WEIGHTS,
            })
          }
        >
          <strong>Reveal Winner</strong>
        </button>
      )}
    </div>
  );
}
