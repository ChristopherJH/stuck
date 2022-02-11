import { useReducer } from "react";
import { AddOptions } from "./components/AddOptions";
import "./App.css";
import { Header } from "./components/Header";
import { StateType } from "./types/StateType";
import { AddAttributes } from "./components/AddAttributes";
import WeightAttributes from "./components/WeightAttributes";
import { reducer } from "./utility/reducer";
import { WeightOptions } from "./components/WeightOptions";
import { DisplayWinner } from "./components/DisplayWinner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QuestionInput } from "./components/QuestionInput";
import { Button } from "./types/Button";
import { buttonsReducer } from "./utility/buttonsReducer";

const initialState: StateType = {
  options: [],
  attributes: [],
  question: "",
};

export const BUTTON_NAMES = {
  SUBMIT_QUESTION: "submitQuestion",
  SUBMIT_OPTIONS: "submitOptions",
  SUBMIT_ATTRIBUTES: "submitAttributes",
  SUBMIT_ATTRIBUTES_WEIGHTS: "submitAttributesWeights",
  SUBMIT_OPTIONS_WEIGHTS: "submitOptionsWeights",
};

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

  return (
    <div className="App">
      <Header />
      <QuestionInput
        dispatch={dispatch}
        state={state}
        buttonsDispatch={buttonsDispatch}
      />
      {buttonsState[0].clicked && (
        <AddOptions
          dispatch={dispatch}
          state={state}
          buttonsDispatch={buttonsDispatch}
          buttonsState={buttonsState}
        />
      )}

      {buttonsState[1].clicked && (
        <AddAttributes
          dispatch={dispatch}
          state={state}
          buttonsDispatch={buttonsDispatch}
          buttonsState={buttonsState}
        />
      )}

      {buttonsState[2].clicked && (
        <WeightAttributes
          state={state}
          dispatch={dispatch}
          buttonsDispatch={buttonsDispatch}
          buttonsState={buttonsState}
        />
      )}
      {buttonsState[3].clicked && (
        <WeightOptions
          state={state}
          dispatch={dispatch}
          buttonsDispatch={buttonsDispatch}
          buttonsState={buttonsState}
        />
      )}
      {buttonsState[4].clicked && <DisplayWinner state={state} />}
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
