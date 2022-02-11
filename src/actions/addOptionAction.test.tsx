import { Attribute } from "../types/Attribute";
import { Option } from "../types/Option";
import { StateType } from "../types/StateType";
import { addOptionAction } from "./addOptionAction";

// Create input state
const tastiness = { name: "Tastiness", weighting: 50 };
const cost = { name: "Cost", weighting: 50 };
const tastinessAttribute = { id: 0, name: "Tastiness", weighting: 50 };
const costAttribute = { id: 1, name: "Cost", weighting: 50 };

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

const inputOptionsArr: Option[] = [pizza, chinese];

const inputAttributesArr: Attribute[] = [tastinessAttribute, costAttribute];

const inputState: StateType = {
  options: inputOptionsArr,
  attributes: inputAttributesArr,
  question: "What should I eat tonight?",
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
  expect(addOptionAction(inputState, "Pad thai")).toStrictEqual(outputState);
});
