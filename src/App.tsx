import { useReducer, useState } from "react";
import { AddOptions } from "./components/AddOptions";
import "./App.css";
import { Header } from "./components/Header";
import { StateType } from "./types/StateType";
import { AddValues } from "./components/AddValues";
import WeightValues from "./components/WeightValues";
import { reducer } from "./utility/reducer";
import { WeightOptions } from "./components/WeightOptions";

const initialState: StateType = {
  options: [],
  values: [],
};

function App() {
  // States
  const [beginClicked, setBeginClicked] = useState<boolean>(false);
  const [finishOptionsClicked, setFinishedOptionsClicked] =
    useState<boolean>(false);
  const [finishValuesClicked, setFinishedValuesClicked] =
    useState<boolean>(false);
  const [WeightValuesClicked, setWeightValuesClicked] =
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
        <AddValues
          dispatch={dispatch}
          state={state}
          setFinishedValuesClicked={setFinishedValuesClicked}
          finishValuesClicked={finishValuesClicked}
        />
      )}
      {finishValuesClicked && (
        <WeightValues
          state={state}
          dispatch={dispatch}
          WeightValuesClicked={WeightValuesClicked}
          setWeightValuesClicked={setWeightValuesClicked}
        />
      )}
      {WeightValuesClicked && <WeightOptions state={state} />}
    </div>
  );
}

export default App;
