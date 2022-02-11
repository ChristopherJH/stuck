import { Dispatch, useState } from "react";
import { ButtonAction } from "../types/ButtonAction";
import { Action } from "../types/Action";
import { StateType } from "../types/StateType";
import { ACTIONS } from "../utility/reducer";
import { toast } from "react-toastify";

interface QuestionInputProps {
  state: StateType;
  dispatch: Dispatch<Action>;
  buttonsDispatch: Dispatch<ButtonAction>;
}

export function QuestionInput(props: QuestionInputProps): JSX.Element {
  const [inputValue, setInputValue] = useState<string>("");

  function handleSubmit() {
    if (inputValue !== "") {
      props.dispatch({
        type: ACTIONS.ADD_QUESTION,
        payload: { question: inputValue },
      });
      props.buttonsDispatch({ type: "click", payload: "submitQuestion" });
      setInputValue("");
    } else {
      toast.warn("Cannot be empty");
    }
  }

  return (
    <div className="question-input">
      <h2>What are you stuck on?</h2>
      <input
        className="text-input"
        type="text"
        placeholder="E.g. What should I eat tonight?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button onClick={() => handleSubmit()}>
        <strong>Add</strong>
      </button>
    </div>
  );
}
