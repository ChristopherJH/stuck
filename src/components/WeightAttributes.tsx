import { Dispatch, useState } from "react";
import { HiOutlineRefresh } from "react-icons/hi";
import { Action } from "../types/Action";
import { StateType } from "../types/StateType";
import { WeightAttribute } from "./WeightAttribute";

interface WeightAttributessProps {
  state: StateType;
  dispatch: Dispatch<Action>;
  WeightAttributesClicked: boolean;
  setWeightAttributesClicked: (input: boolean) => void;
}

// Renders components where user can change weightings of attributes
export default function WeightAttributes(
  props: WeightAttributessProps
): JSX.Element {
  // State for refreshing page
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="attributes-weights">
      <div className="attributes-weights-title-and-refresh">
        <h2>How important are they?</h2>
        <button className="refresh-button" onClick={() => setRefresh(!refresh)}>
          <HiOutlineRefresh />
        </button>
      </div>

      <div className="attributes-weights-list">
        {props.state.attributes.map((attribute) => {
          return (
            <WeightAttribute
              attribute={attribute}
              key={`${attribute.name}-attribute`}
              dispatch={props.dispatch}
              state={props.state}
            />
          );
        })}
      </div>

      {!props.WeightAttributesClicked && (
        <button
          className="next-button"
          onClick={() => props.setWeightAttributesClicked(true)}
        >
          Next
        </button>
      )}
    </div>
  );
}
