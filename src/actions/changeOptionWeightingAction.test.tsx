import { Attribute } from "../types/Attribute";
import { Option } from "../types/Option";
import { StateType } from "../types/StateType";
import { testInputState } from "../utility/testInputState";
import { changeOptionWeightingAction } from "./changeOptionWeightingAction";

const tastiness = { name: "Tastiness", weighting: 50 };
const cost = { name: "Cost", weighting: 50 };
const tastinessAttribute = { id: 0, name: "Tastiness", weighting: 50 };
const costAttribute = { id: 1, name: "Cost", weighting: 50 };

const chinese = {
  id: 1,
  name: "Chinese",
  attribute_weightings: [tastiness, cost],
};

// Create output state
const outputTastiness = { name: "Tastiness", weighting: 40 };

const outputPizza = {
  id: 0,
  name: "Pizza",
  attribute_weightings: [outputTastiness, cost],
};

const outputOptionsArr: Option[] = [outputPizza, chinese];

const outputAttributesArr: Attribute[] = [tastinessAttribute, costAttribute];

const outputState: StateType = {
  options: outputOptionsArr,
  attributes: outputAttributesArr,
  question: "What should I eat tonight?",
};

test("Adjusting attribute value on an option alters the state", () => {
  expect(
    changeOptionWeightingAction(testInputState, "Pizza", "Tastiness", 40)
  ).toStrictEqual(outputState);
});
