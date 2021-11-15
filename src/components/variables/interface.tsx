import { ChangeEvent } from "react";
import { TipBtn, DataType, ErrType, isProcess, resultType } from "./types";

export interface IDataValue {
  data: DataType;
  err: ErrType;
  canProcess: isProcess;
  resultCal: resultType;
  onClickReset: () => void;
  handleSubmit: (e: ChangeEvent<HTMLInputElement>) => void;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocusTipCustom: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickTipBtn: (value: string) => void;
}

export interface btnProps {
  btnList: TipBtn[];
}

export interface IOutputField {
  label: string[];
  outputField: {
    id: string;
    name: string;
    type: string;
    value: string;
  };
}

export interface IProviderProps {
  children: React.ReactNode;
}

export interface IFetchApi {
  result: boolean;
  total: number;
  amount: number;
}
