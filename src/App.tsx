import { useEffect, useReducer } from "react";
import { AddOptions } from "./components/AddOptions";
import "./App.css";
import { Header } from "./components/Header";
import { StateType } from "./types/StateType";
import { AddAttributes } from "./components/AddAttributes";
import WeightAttributes from "./components/WeightAttributes";
import { ACTIONS, reducer } from "./utility/reducer";
import { WeightOptions } from "./components/WeightOptions";
import { DisplayWinner } from "./components/DisplayWinner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QuestionInput } from "./components/QuestionInput";
import { Button } from "./types/Button";
import { buttonsReducer, BUTTON_NAMES } from "./utility/buttonsReducer";

// Initial reducer states
export const initialState: StateType = {
  options: [],
  attributes: [],
  question: "",
};

// Initial buttons
const initialButtonsState: Button[] = [
  { name: BUTTON_NAMES.SUBMIT_QUESTION, clicked: false },
  { name: BUTTON_NAMES.SUBMIT_OPTIONS, clicked: false },
  { name: BUTTON_NAMES.SUBMIT_ATTRIBUTES, clicked: false },
  { name: BUTTON_NAMES.SUBMIT_ATTRIBUTES_WEIGHTS, clicked: false },
  { name: BUTTON_NAMES.SUBMIT_OPTIONS_WEIGHTS, clicked: false },
];

function App() {
  // Reducer for managing button clicks
  const [buttonsState, buttonsDispatch] = useReducer(
    buttonsReducer,
    initialButtonsState
  );
  // Reducer for managing options, attributes and question
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const saved = localStorage.getItem("state");
    if (saved) {
      dispatch({ type: ACTIONS.SET_STATE, payload: JSON.parse(saved) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  });

  return (
    <div className="App">
      <Header dispatch={dispatch} state={state} />
      <QuestionInput dispatch={dispatch} state={state} />
      {/* If previous stage has been completed, reveal next */}
      {state.question !== "" && (
        <AddOptions dispatch={dispatch} state={state} />
      )}

      {state.options.length > 1 && (
        <AddAttributes dispatch={dispatch} state={state} />
      )}

      {state.attributes.length > 1 && (
        <>
          <WeightAttributes state={state} dispatch={dispatch} />
          <WeightOptions
            state={state}
            dispatch={dispatch}
            buttonsDispatch={buttonsDispatch}
            buttonsState={buttonsState}
          />
        </>
      )}

      {buttonsState[4].clicked && (
        <DisplayWinner state={state} dispatch={dispatch} />
      )}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
