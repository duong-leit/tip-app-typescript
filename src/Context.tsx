import { createContext } from "react";
import { useState } from "react";
import React from "react";
import {
  dataType,
  ErrType,
  isProcess,
  resultType,
} from "./components/variables/types";
const url = `https://plitter-server.vercel.app/api/`;

interface IDataValue {
  data: dataType;
  err: ErrType;
  canProcess: isProcess;
  resultCal: resultType;
  onClickReset: () => void;
  handleSubmit: (e: any) => void;
  handleInput: (e: any) => void;
  onFocusTipCustom: (e: any) => void;
  handleTipBtn: (value: string) => void;
}
const dataContext = createContext<IDataValue>({} as IDataValue);

function HandleDataProvider({ children }: any) {
  const [data, setData] = useState<dataType>({
    bill: "0",
    people: "0",
    tip: "0",
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

  const onClickReset = () => {
    setData({ ...data, bill: "0", people: "0", tip: "0" });
    setErr({ isErr: false, message: "" });
    setResult({ tipAmount: "0.00", totalAmount: "0.00" });
    setProcess({ isCalculator: false, isChange: false });
  };

  const handleSubmit = async (e: any) => {
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

      let results: any = await fetch(
        `${url}calculate?bill=${Number(data.bill)}&people=${Number(
          data.people
        )}&tipPercent=${Number(data.tip)}`
      );
      results = await results.json();
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

  const handleInput = (e: any) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
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

  const onFocusTipCustom = (e: any) => {
    if (!data.isCustomTip) {
      setData({ ...data, tip: "", isCustomTip: true });
      setProcess({ ...canProcess, isChange: true });
    }
  };

  const handleTipBtn = (value: string) => {
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
    handleTipBtn,
  };
  return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
}
export { dataContext, HandleDataProvider };
