import { Dispatch, useCallback, useEffect, useState } from "react";
import { initialState } from "../App";
import { Action } from "../types/Action";
import { Option } from "../types/Option";
import { StateType } from "../types/StateType";
import { handleReload } from "../utility/handleReload";
import { Winner } from "../types/Winner";

interface DisplayWinnerProps {
  state: StateType;
  dispatch: Dispatch<Action>;
}
export function DisplayWinner(props: DisplayWinnerProps): JSX.Element {
  const initialWinner = { name: "Unknown", score: 0 };

  const [optionsScores, setOptionsScores] = useState<number[]>([]);
  const [winner, setWinner] = useState<Winner>(initialWinner);

  // Calculate the total score for an option
  function calculateScore(option: Option): number {
    let score = 0;
    for (const attribute of option.attribute_weightings) {
      // Find the attribute we're looking for in options
      const attributeInOption = option.attribute_weightings.find(
        (a) => a.name === attribute.name
      );
      if (attributeInOption) {
        // If attribute exists, find index of it
        const indexOfAttributeInOption =
          option.attribute_weightings.indexOf(attributeInOption);
        // Get weighting value
        const optionWeighting =
          option.attribute_weightings[indexOfAttributeInOption].weighting;
        // Calculate overall weighting and add to total score
        score += attribute.weighting * optionWeighting;
      } else {
        console.log("Attribute not found");
      }
    }
    return score;
  }

  // Calculate the total score of all options
  const calculateScores = useCallback(async () => {
    setOptionsScores([]);
    for (const option of props.state.options) {
      setOptionsScores((prevVals) => [...prevVals, calculateScore(option)]);
    }
  }, [props.state.options]);

  // Return winner object
  const findWinner = useCallback(async () => {
    const max = Math.max(...optionsScores);
    const winnerIndex = optionsScores.indexOf(max);
    const winnerName = props.state.options[winnerIndex].name;
    setWinner({ name: winnerName, score: max });
  }, [optionsScores, props.state.options]);

  // Calculate the new scores on first load and whenever refresh is clicked
  useEffect(() => {
    calculateScores();
  }, [calculateScores]);

  // Find winner whenever option scores array changes
  useEffect(() => {
    findWinner();
  }, [findWinner]);

  return (
    <div className="display-winner">
      <div className="winner-details">
        <h2>{props.state.question}</h2>

        <h1 className="winner-name">🏆 {winner.name} 🏆</h1>
        <h4>Score: {winner.score}</h4>
      </div>
      <button
        className="reload-button"
        onClick={() => handleReload(props.dispatch, initialState)}
      >
        Another decision to make?
      </button>
    </div>
  );
}
