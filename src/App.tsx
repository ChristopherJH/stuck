import { useReducer, useState } from "react";
import { AddOptions } from "./components/AddOptions";
import "./App.css";
import { Header } from "./components/Header";
import { Action } from "./types/Action";
import { StateType } from "./types/StateType";

const initialState: StateType = {
  options: [],
  values: [],
};

export const ACTIONS = {
  ADD_OPTION: "add-option",
};

function reducer(state: StateType, action: Action): StateType {
  switch (action.type) {
    case ACTIONS.ADD_OPTION:
      console.log("Add option action triggered");
      if (typeof action.payload === "string") {
        state.options.push({
          id: new Date(),
          name: action.payload,
          value_weightings: [],
        });
      }
      console.log(state.options);
      return state;
    default:
      return state;
  }
}
function App() {
  const [beginClicked, setBeginClicked] = useState<boolean>(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <Header />

      {!beginClicked && (
        <button className="begin-button" onClick={() => setBeginClicked(true)}>
          Begin
        </button>
      )}
      {beginClicked && <AddOptions dispatch={dispatch} state={state} />}
    </div>
  );
}

export default App;
