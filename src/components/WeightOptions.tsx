import { Dispatch, useState } from "react";
import { StateType } from "../types/StateType";
import { Action } from "../types/Action";
import { WeightOption } from "./WeightOption";
import { HiOutlineRefresh } from "react-icons/hi";

interface WeightOptionsProps {
  state: StateType;
  dispatch: Dispatch<Action>;
  setRevealWinnerClicked: (input: boolean) => void;
  revealWinnerClicked: boolean;
}
export function WeightOptions(props: WeightOptionsProps): JSX.Element {
  // State for refreshing page
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="weight-options">
      <div className="weight-options-title-and-refresh">
        <h2>Weigh up your options...</h2>
        <button className="refresh-button" onClick={() => setRefresh(!refresh)}>
          <HiOutlineRefresh />
        </button>
      </div>

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
          <strong>Reveal Winner</strong>
        </button>
      )}
    </div>
  );
}
