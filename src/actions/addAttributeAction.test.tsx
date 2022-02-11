import { Attribute } from "../types/Attribute";
import { Option } from "../types/Option";
import { StateType } from "../types/StateType";
import { testInputState } from "../utility/testInputState";
import { addAttributeAction } from "./addAttributeAction";

// Create input state
const tastiness = { name: "Tastiness", weighting: 50 };
const cost = { name: "Cost", weighting: 50 };
const tastinessAttribute = { id: 0, name: "Tastiness", weighting: 50 };
const costAttribute = { id: 1, name: "Cost", weighting: 50 };

// Create output state
const healthiness = { name: "Healthiness", weighting: 50 };
const healthinessAttribute = {
  id: 2,
  name: "Healthiness",
  weighting: 50,
};
const outputPizza = {
  id: 0,
  name: "Pizza",
  attribute_weightings: [tastiness, cost, healthiness],
};
const outputChinese = {
  id: 1,
  name: "Chinese",
  attribute_weightings: [tastiness, cost, healthiness],
};

const outputOptionsArr: Option[] = [outputPizza, outputChinese];

const outputAttributesArr: Attribute[] = [
  tastinessAttribute,
  costAttribute,
  healthinessAttribute,
];

const outputState: StateType = {
  options: outputOptionsArr,
  attributes: outputAttributesArr,
  question: "What should I eat tonight?",
};

test("Adding healthiness attribute to a state alters the state", () => {
  expect(addAttributeAction(testInputState, "Healthiness")).toStrictEqual(
    outputState
  );
});
