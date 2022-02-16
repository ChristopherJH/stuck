import { Dispatch } from "react";
import { StateType } from "../types/StateType";
import { Action } from "../types/Action";
import { WeightOption } from "./WeightOption";
import { Button } from "@mui/material";

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
        {props.state.options.map((option, index) => {
          return (
            <WeightOption
              key={`option-${index}`}
              option={option}
              dispatch={props.dispatch}
            />
          );
        })}
      </div>

      {!props.revealWinnerClicked && (
        <div className="reveal-winner-button">
          <Button
            variant="contained"
            onClick={() =>
              props.setRevealWinnerClicked(!props.revealWinnerClicked)
            }
          >
            <strong>Reveal Winner</strong>
          </Button>
        </div>
      )}
    </div>
  );
}
