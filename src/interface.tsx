interface IDataValue {
  data: object;
  err: object;
  canProcess: object;
  resultCal: object;
  onClickReset: () => void;
  handleSubmit: (e: any) => void;
  handleInput: (e: any) => void;
  onFocusTipCustom: (e: any) => void;
  handleTipBtn: (value: string) => void;
}

export type { IDataValue };
