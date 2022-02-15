import { Dispatch } from "react";
import { initialState } from "../App";
import { Action } from "../types/Action";
import { StateType } from "../types/StateType";
import { handleReload } from "../utility/handleReload";

interface HeaderProps {
  dispatch: Dispatch<Action>;
  state: StateType;
}
export function Header(props: HeaderProps): JSX.Element {
  return (
    <>
      <div className="header-title">
        <h1>
          ❓{props.state.question === "" ? "Stuck" : props.state.question}
        </h1>
        {/* Render a start over button if the form has started to be filled in */}
        {props.state.question !== "" && (
          <div className="header-title-buttons">
            <button
              className="begin-button"
              onClick={() => handleReload(props.dispatch, initialState)}
            >
              <strong>Start over</strong>
            </button>
          </div>
        )}
      </div>
      <div className="header">
        <div className="header-motto">
          <h2>Let’s help weigh up some options...</h2>
        </div>
        <div className="header-subheaders">
          <h4>What shall I have for dinner? 🍕</h4>
          <h4>Where shall we go on holiday? 🏖</h4>
          <h4>Which job is best? 🧳</h4>
          <h4>What should I do tomorrow? ✅</h4>
        </div>
      </div>
    </>
  );
}
