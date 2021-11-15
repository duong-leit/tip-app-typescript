export type DataType = {
  bill: string;
  people: string;
  tip: string;
  isCustomTip: boolean;
};
export type ErrType = {
  isErr: boolean;
  message: string;
};
export type isProcess = {
  isCalculator: boolean;
  isChange: boolean;
};
export type resultType = {
  tipAmount: string;
  totalAmount: string;
};
export type TipBtn = {
  attribute: {
    type: string;
    id: string;
    onClick: (e: any) => void;
    disabled: boolean;
  };
  context: string;
};
