import { Winner } from "../types/Winner";
import { Option } from "../types/Option";

export function findWinners(
  optionsScores: number[],
  options: Option[]
): Winner[] {
  // Make copies of scores and options so that we can alter them
  const scoresCopy = [...optionsScores];
  console.log("Starting scores:", scoresCopy);
  const optionsCopy = [...options];
  console.log("Starting options:", optionsCopy);

  const newWinners: Winner[] = [];
  // Only start the process if scores array contains elements
  while (scoresCopy.length > 0) {
    console.log("Finding new top scores...");
    // Find max element
    const max = Math.max(...scoresCopy);
    // Find index of max element
    const winnerIndex = scoresCopy.indexOf(max);
    // Use winner index to find winner name in options array
    const winnerName = optionsCopy[winnerIndex].name;
    // Add winner to our winners array
    const newWinner: Winner = { name: winnerName, score: max };
    newWinners.push(newWinner);
    // Remove winner from arrays to find the next winner
    scoresCopy.splice(winnerIndex, 1);
    optionsCopy.splice(winnerIndex, 1);
    console.log("Finishing:", { scoresCopy });
    console.log("Finishing:", { optionsCopy });
  }
  console.log({ newWinners });
  return newWinners;
}
