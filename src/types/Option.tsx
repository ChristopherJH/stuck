import { AttributeWeightType } from "./AttributeWeightType";

export interface Option {
  id: number;
  name: string;
  attribute_weightings: AttributeWeightType[];
}
