import { Dispatch } from "react";
import { StateType } from "../types/StateType";
import { Action } from "../types/Action";
import { WeightOption } from "./WeightOption";

interface WeightOptionsProps {
  state: StateType;
  dispatch: Dispatch<Action>;
  setRevealWinnerClicked: (input: boolean) => void;
  revealWinnerClicked: boolean;
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

      {!props.revealWinnerClicked && (
        <button
          className="reveal-winner-button"
          onClick={() => props.setRevealWinnerClicked(true)}
        >
          Reveal Winner
        </button>
      )}
    </div>
  );
}
