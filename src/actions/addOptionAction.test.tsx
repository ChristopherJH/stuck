import { Attribute } from "../types/Attribute";
import { Option } from "../types/Option";
import { StateType } from "../types/StateType";
import { testInputState } from "../utility/testInputState";
import { addOptionAction } from "./addOptionAction";

const tastiness = { name: "Tastiness", weighting: 2.5 };
const cost = { name: "Cost", weighting: 2.5 };
const tastinessAttribute = { id: 0, name: "Tastiness", weighting: 2.5 };
const costAttribute = { id: 1, name: "Cost", weighting: 2.5 };

const pizza = {
  id: 0,
  name: "Pizza",
  attribute_weightings: [tastiness, cost],
};

const chinese = {
  id: 1,
  name: "Chinese",
  attribute_weightings: [tastiness, cost],
};

// Create output state
const padThai = {
  id: 2,
  name: "Pad thai",
  attribute_weightings: [tastiness, cost],
};

const outputOptionsArr: Option[] = [pizza, chinese, padThai];

const outputAttributesArr: Attribute[] = [tastinessAttribute, costAttribute];

const outputState: StateType = {
  options: outputOptionsArr,
  attributes: outputAttributesArr,
  question: "What should I eat tonight?",
};

test("Adding pad thai option to a state alters the state", () => {
  expect(addOptionAction(testInputState, "Pad thai")).toStrictEqual(
    outputState
  );
});
