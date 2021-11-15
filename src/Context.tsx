import { ChangeEvent, createContext } from "react";
import { useState } from "react";
import React from "react";
import {
  DataType,
  ErrType,
  isProcess,
  resultType,
} from "./components/variables/types";
import {
  IDataValue,
  IProviderProps,
  IFetchApi,
} from "./components/variables/interface";
const URL = `https://plitter-server.vercel.app/api/`;

const dataContext = createContext<IDataValue>({} as IDataValue);

function HandleDataProvider({ children }: IProviderProps): JSX.Element {
  const [data, setData] = useState<DataType>({
    bill: "",
    people: "",
    tip: "",
    isCustomTip: false,
  });

  const [err, setErr] = useState<ErrType>({
    isErr: false,
    message: "",
  });

  const [canProcess, setProcess] = useState<isProcess>({
    isCalculator: false,
    isChange: false,
  });

  const [resultCal, setResult] = useState<resultType>({
    tipAmount: "0.00",
    totalAmount: "0.00",
  });

  const onClickReset = (): void => {
    setData({ ...data, bill: "", people: "", tip: "" });
    setErr({ isErr: false, message: "" });
    setResult({ tipAmount: "0.00", totalAmount: "0.00" });
    setProcess({ isCalculator: false, isChange: false });
  };

  const handleSubmit = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      //is Change Input
      setProcess({ ...canProcess, isChange: false });
      if (Number(data.people) === 0) {
        if (Number(data.bill) === 0) {
          alert("bill and people cannot be empty.");
          onClickReset();
        } else {
          setErr({
            isErr: true,
            message: "can't be zero",
          });
        }
        return;
      }
      setErr({
        isErr: true,
        message: "",
      });
      setProcess({ ...canProcess, isCalculator: true });

      let results = await getData(
        Number(data.bill),
        Number(data.people),
        Number(data.tip)
      );
      if (results["result"]) {
        setResult({
          tipAmount: results["amount"].toFixed(2),
          totalAmount: results["total"].toFixed(2),
        });
      } else {
        alert("maybe bill and number of people is invalid.");
      }
      setProcess({ isChange: false, isCalculator: false });
    } catch (error) {
      alert("try it later");
    }
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    let inputName: string = e.target.name;
    let inputValue: string = e.target.value;
    let rgx = inputName !== "people" ? /^[0-9]*\.?[0-9]*$/ : /^[0-9]*$/;
    if (rgx.test(inputValue) || inputValue === "") {
      if (Number(inputValue) <= 10 ** 16) {
        setData({
          ...data,
          [inputName]: inputValue || 0,
        });
        if (
          !(inputName === "tip" && data.bill === "0" && data.people === "0")
        ) {
          setProcess({
            ...canProcess,
            isChange: true,
          });
        }
      }
    }
  };

  const onFocusTipCustom = (): void => {
    if (!data.isCustomTip) {
      setData({ ...data, tip: "", isCustomTip: true });
      setProcess({ ...canProcess, isChange: true });
    }
  };

  const onClickTipBtn = (value: string): void => {
    if (Number(data.tip) !== parseInt(value)) {
      setData({
        ...data,
        tip: value,
        isCustomTip: false,
      });
    } else {
      if (data.isCustomTip) setData({ ...data, isCustomTip: false });
      setData({ ...data, tip: "0", isCustomTip: false });
    }
  };
  const value: IDataValue = {
    data,
    err,
    canProcess,
    resultCal,
    onClickReset,
    handleSubmit,
    handleInput,
    onFocusTipCustom,
    onClickTipBtn,
  };
  return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
}

async function getData(
  bill: number,
  people: number,
  tip: number
): Promise<IFetchApi> {
  let api: string = `${URL}calculate?bill=${Number(bill)}&people=${Number(
    people
  )}&tipPercent=${Number(tip)}`;
  let result = await fetch(api);
  return result.json();
}
export { dataContext, HandleDataProvider };
