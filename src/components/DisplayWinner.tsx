import { Dispatch, useCallback, useEffect, useState } from "react";
import { initialState } from "../App";
import { Action } from "../types/Action";
import { StateType } from "../types/StateType";
import { handleReload } from "../utility/handleReload";
import { Winner } from "../types/Winner";
import { Button } from "@mui/material";
import { calculateScore } from "../utility/calculateScore";
import { findWinners } from "../utility/findWinners";

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

  // Calculate the total score of all options
  const calculateScores = useCallback(() => {
    setOptionsScores([]);
    for (const option of props.state.options) {
      setOptionsScores((prevVals) => [
        ...prevVals,
        calculateScore(option, props.state.attributes),
      ]);
    }
  }, [props.state.options, props.state.attributes]);

  // Return array of winners
  const findWinnersCallback = useCallback(() => {
    const newWinners: Winner[] = findWinners(
      optionsScores,
      props.state.options
    );
    if (newWinners.length > 0) {
      setWinners(newWinners);
    }
  }, [optionsScores, props.state.options]);

  // Calculate the new scores on first load and whenever refresh is clicked
  useEffect(() => {
    calculateScores();
  }, [calculateScores]);

  // Find winner whenever option scores array changes
  useEffect(() => {
    findWinnersCallback();
  }, [findWinnersCallback]);

  return (
    <div className="display-winner">
      <div className="winner-details">
        <h2>{props.state.question}</h2>
        {/* If we have a tie, show both options */}
        {winners[0].score === winners[1].score ? (
          <>
            <h1 className="winner-name">
              🏆 {winners[0].name} or {winners[1].name} 🏆
            </h1>{" "}
            <h2>(It's a tie!)</h2>
          </>
        ) : (
          // If we have no tie, display winner with option to display second place
          <>
            <h1 className="winner-name">🏆 {winners[0].name} 🏆</h1>
            {showSecondPlace ? (
              <p className="second-place">
                🥈 <strong>{winners[1].name}</strong>
              </p>
            ) : (
              <Button
                variant="text"
                className="second-place-button"
                onClick={() => setShowSecondPlace(true)}
              >
                View Next Best Option 🥈
              </Button>
            )}
          </>
        )}
      </div>
      <div className="another-decision-button">
        <Button
          variant="text"
          onClick={() => handleReload(props.dispatch, initialState)}
        >
          Another decision to make❓
        </Button>
      </div>
    </div>
  );
}
