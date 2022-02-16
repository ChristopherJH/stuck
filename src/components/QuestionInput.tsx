import { Dispatch, FormEvent, useState } from "react";
import { Action } from "../types/Action";
import { StateType } from "../types/StateType";
import { ACTIONS } from "../utility/reducer";
import { toast } from "react-toastify";
import { Button, TextField, Tooltip } from "@mui/material";

interface QuestionInputProps {
  state: StateType;
  dispatch: Dispatch<Action>;
}

export function QuestionInput(props: QuestionInputProps): JSX.Element {
  const [inputValue, setInputValue] = useState<string>("");

  function handleSubmit(
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
    if (inputValue !== "") {
      props.dispatch({
        type: ACTIONS.ADD_QUESTION,
        payload: { question: inputValue },
      });
    } else {
      toast.warn("Cannot be empty");
    }
  }

  return (
    <div className="question-input">
      <h2>What are you stuck on❓</h2>
      <p className="mobile-tips">E.g. What should I have for lunch?</p>
      <form className="question-form" onSubmit={(e) => handleSubmit(e)}>
        <Tooltip
          title="E.g. What should I have for lunch?"
          placement="bottom-start"
        >
          <TextField
            fullWidth
            id="outlined-basic"
            sx={{ mr: 1 }}
            label="Question"
            variant="outlined"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Tooltip>
        <Button
          variant="contained"
          className="submit-question-button"
          onClick={(e) => handleSubmit(e)}
        >
          <strong>Submit</strong>
        </Button>
      </form>
    </div>
  );
}
