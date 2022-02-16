import { Attribute } from "../types/Attribute";
import { Option } from "../types/Option";
import { StateType } from "../types/StateType";
import { testInputState } from "../utility/testInputState";
import { changeAttributeWeightingAction } from "./changeAttributeWeightingAction";

const tastiness = { name: "Tastiness", weighting: 2.5 };
const cost = { name: "Cost", weighting: 2.5 };
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
const outputTastinessAttribute = { id: 0, name: "Tastiness", weighting: 40 };

const outputOptionsArr: Option[] = [pizza, chinese];

const outputAttributesArr: Attribute[] = [
  outputTastinessAttribute,
  costAttribute,
];

const outputState: StateType = {
  options: outputOptionsArr,
  attributes: outputAttributesArr,
  question: "What should I eat tonight?",
};

test("Adjusting attribute weighting alters the state", () => {
  expect(
    changeAttributeWeightingAction(testInputState, "Tastiness", 40)
  ).toStrictEqual(outputState);
});
