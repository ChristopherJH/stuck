import { StateType } from "../types/StateType";

export function alterOtherAttributesWeightings(
  newState: StateType,
  name: string,
  changeInWeighting: number
): StateType {
  // Decrease / Increase the weighting of other attributes
  const otherAttributes = newState.attributes.filter(
    (attribute) => attribute.name !== name
  );

  const attributesAllowedToChange = otherAttributes.filter(
    (attribute) => attribute.weighting >= 0 || attribute.weighting <= 100
  );

  const numOfOtherAttributes = attributesAllowedToChange.length;
  const weightingChangePerAttribute = changeInWeighting / numOfOtherAttributes;
  attributesAllowedToChange.forEach(
    (attribute) => (attribute.weighting -= weightingChangePerAttribute)
  );
  return newState;
}
