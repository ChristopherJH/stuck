import { useReducer, useState } from "react";
import { AddOptions } from "./components/AddOptions";
import "./App.css";
import { Header } from "./components/Header";
import { StateType } from "./types/StateType";
import { AddAttributes } from "./components/AddAttributes";
import WeightAttributes from "./components/WeightAttributes";
import { reducer } from "./utility/reducer";
import { WeightOptions } from "./components/WeightOptions";

const initialState: StateType = {
  options: [],
  attributes: [],
};

function App() {
  // States
  const [beginClicked, setBeginClicked] = useState<boolean>(false);
  const [finishOptionsClicked, setFinishedOptionsClicked] =
    useState<boolean>(false);
  const [finishAttributesClicked, setFinishedAttributesClicked] =
    useState<boolean>(false);
  const [WeightAttributesClicked, setWeightAttributesClicked] =
    useState<boolean>(false);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <Header />

      {!beginClicked && (
        <button className="begin-button" onClick={() => setBeginClicked(true)}>
          Begin
        </button>
      )}
      {beginClicked && (
        <AddOptions
          dispatch={dispatch}
          state={state}
          setFinishedOptionsClicked={setFinishedOptionsClicked}
          finishOptionsClicked={finishOptionsClicked}
        />
      )}
      {finishOptionsClicked && (
        <AddAttributes
          dispatch={dispatch}
          state={state}
          setFinishedAttributesClicked={setFinishedAttributesClicked}
          finishAttributesClicked={finishAttributesClicked}
        />
      )}
      {finishAttributesClicked && (
        <WeightAttributes
          state={state}
          dispatch={dispatch}
          WeightAttributesClicked={WeightAttributesClicked}
          setWeightAttributesClicked={setWeightAttributesClicked}
        />
      )}
      {WeightAttributesClicked && (
        <WeightOptions state={state} dispatch={dispatch} />
      )}
    </div>
  );
}

export default App;
