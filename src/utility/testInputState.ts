import { Attribute } from "../types/Attribute";
import { Option } from "../types/Option";
import { StateType } from "../types/StateType";

// Creating a state that can be used in testing
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

export const testInputState: StateType = {
  options: inputOptionsArr,
  attributes: inputAttributesArr,
  question: "What should I eat tonight?",
};
