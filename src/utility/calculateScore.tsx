import { Attribute } from "../types/Attribute";
import { Option } from "../types/Option";

// Calculate the total score for an option
export function calculateScore(
  option: Option,
  attributes: Attribute[]
): number {
  let score = 0;
  for (const attribute of attributes) {
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
