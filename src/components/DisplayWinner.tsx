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

  // An array containing the scores of each option
  const [optionsScores, setOptionsScores] = useState<number[]>([]);
  // An array eventually containing a list of our winners from first to last
  const [winners, setWinners] = useState<Winner[]>([
    initialWinner,
    initialWinner,
  ]);
  // State for our 'show second place' button
  const [showSecondPlace, setShowSecondPlace] = useState<boolean>(false);

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
  const calculateScores = useCallback(() => {
    setOptionsScores([]);
    for (const option of props.state.options) {
      setOptionsScores((prevVals) => [...prevVals, calculateScore(option)]);
    }
  }, [props.state.options]);

  // Return array of winners
  const findWinners = useCallback(() => {
    // Make copies of scores and options so that we can alter them
    let scores = [...optionsScores];
    let options = [...props.state.options];
    // Only start the process if scores array contains elements
    if (scores.length > 0) {
      setWinners([]);
    }
    while (scores.length > 0) {
      // Find max element
      const max = Math.max(...scores);
      // Find index of max element
      const winnerIndex = scores.indexOf(max);
      // Use winner index to find winner name in options array
      const winnerName = options[winnerIndex].name;
      // Add winner to our winners array
      setWinners((prevVals) => [...prevVals, { name: winnerName, score: max }]);
      // Remove winner from arrays to find the next winner
      scores.splice(winnerIndex, 1);
      options.splice(winnerIndex, 1);
    }
  }, [optionsScores, props.state.options]);

  // Calculate the new scores on first load and whenever refresh is clicked
  useEffect(() => {
    calculateScores();
  }, [calculateScores]);

  // Find winner whenever option scores array changes
  useEffect(() => {
    findWinners();
  }, [findWinners]);

  return (
    <div className="display-winner">
      <div className="winner-details">
        <h2>{props.state.question}</h2>
        <h1 className="winner-name">🏆 {winners[0].name} 🏆</h1>
        <h4>Score: {winners[0].score}</h4>
        {showSecondPlace ? (
          <p className="second-place">
            🥈{" "}
            <strong>
              {winners[1].name} ({winners[1].score})
            </strong>
          </p>
        ) : (
          <button
            className="second-place-button"
            onClick={() => setShowSecondPlace(true)}
          >
            View Next Best Option 🥈
          </button>
        )}
      </div>
      <button
        className="reload-button"
        onClick={() => handleReload(props.dispatch, initialState)}
      >
        Another decision to make❓
      </button>
    </div>
  );
}
