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
        <h1>❓ Stuck</h1>
        {/* Render a start over button if the form has started to be filled in */}
        {props.state.question !== "" && (
          <button
            className="begin-button"
            onClick={() => handleReload(props.dispatch, initialState)}
          >
            <strong>Start over</strong>
          </button>
        )}
      </div>
      <div className="header">
        <div className="header-motto">
          <h2>Let’s help weigh up some options...</h2>
        </div>
        <div className="header-subheaders">
          <h3>What shall I have for dinner? 🍕</h3>
          <h3>Where shall we go on holiday? 🏖</h3>
          <h3>Which job is best? 🧳</h3>
          <h3>What should I do tomorrow? ✅</h3>
        </div>
      </div>
    </>
  );
}
