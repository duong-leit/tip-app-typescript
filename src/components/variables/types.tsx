type dataType = {
  bill: string;
  people: string;
  tip: string;
  isCustomTip: boolean;
};
type ErrType = {
  isErr: boolean;
  message: string;
};
type isProcess = {
  isCalculator: boolean;
  isChange: boolean;
};
type resultType = {
  tipAmount: string;
  totalAmount: string;
};

export type { dataType, ErrType, isProcess, resultType };
