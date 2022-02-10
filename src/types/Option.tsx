import { AttributeWeightType } from "./AttributeWeightType";

export interface Option {
  id: Date;
  name: string;
  attribute_weightings: AttributeWeightType[];
}
