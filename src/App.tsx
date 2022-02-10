import { useReducer, useRef, useState } from "react";
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

const initialState: StateType = {
  options: [],
  attributes: [],
};

function App() {
  // States
  const [finishOptionsClicked, setFinishedOptionsClicked] =
    useState<boolean>(false);
  const [finishAttributesClicked, setFinishedAttributesClicked] =
    useState<boolean>(false);
  const [weightAttributesClicked, setWeightAttributesClicked] =
    useState<boolean>(false);
  const [revealWinnerClicked, setRevealWinnerClicked] =
    useState<boolean>(false);

  // References for scrolling
  const addAttributesRef = useRef<null | HTMLDivElement>(null);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <Header />
      <AddOptions
        dispatch={dispatch}
        state={state}
        setFinishedOptionsClicked={setFinishedOptionsClicked}
        finishOptionsClicked={finishOptionsClicked}
        addAttributesRef={addAttributesRef}
      />

      <AddAttributes
        dispatch={dispatch}
        state={state}
        setFinishedAttributesClicked={setFinishedAttributesClicked}
        finishAttributesClicked={finishAttributesClicked}
        addAttributesRef={addAttributesRef}
      />

      {finishAttributesClicked && (
        <WeightAttributes
          state={state}
          dispatch={dispatch}
          WeightAttributesClicked={weightAttributesClicked}
          setWeightAttributesClicked={setWeightAttributesClicked}
        />
      )}
      {weightAttributesClicked && (
        <WeightOptions
          state={state}
          dispatch={dispatch}
          revealWinnerClicked={revealWinnerClicked}
          setRevealWinnerClicked={setRevealWinnerClicked}
        />
      )}
      {revealWinnerClicked && <DisplayWinner state={state} />}
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
