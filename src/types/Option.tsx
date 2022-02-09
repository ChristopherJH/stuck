import { ValueWeightType } from "./ValueWeightType";

export interface Option {
  id: Date;
  name: string;
  value_weightings: ValueWeightType[];
}
