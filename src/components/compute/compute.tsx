import React from "react";
import { useContext } from "react";
import { dataContext } from "../../Context";
import InputField from "./InputField";

import Button from "./TipButton";
import dollar from "../../assets/img/icon-dollar.svg";
import person from "../../assets/img/icon-person.svg";

const tipList = [5, 10, 15, 25, 50];

function BillCompute(): JSX.Element {
  return (
    <div className="bill__compute">
      <form id="billForm" name="billForm">
        <BillInput />
        <TipOption />
        <PeopleInput />
      </form>
    </div>
  );
}

function BillInput(): JSX.Element {
  const dataValue = useContext(dataContext);
  const labelInput = {
    htmlFor: "billTotal",
    name: "Bill",
    id: "billLabel",
  };
  const option = (
    <span>
      <img src={dollar} alt="cannot find" />
    </span>
  );
  const section = {
    className: "bill-total--details",
    span: option,
    input: {
      className: "billTotal",
      id: "billTotal",
      value: dataValue.data.bill || "",
      name: "bill",
      placeholder: "0.00",
      onChange: dataValue.handleInput,
    },
  };

  return (
    <InputField
      className="bill-total"
      labelOption=""
      labelInput={labelInput}
      section={section}
    />
  );
}

function TipOption(): JSX.Element {
  const { data, handleInput, onFocusTipCustom, onClickTipBtn } =
    useContext(dataContext);

  let tipListBtn = [];
  let optionLength = tipList.length;
  for (let i = 0; i < optionLength; i++) {
    tipListBtn.push(
      <Button
        key={i}
        data={data}
        classTip="percent-tip__option"
        valueTip={tipList[i]}
        onClickTipBtn={onClickTipBtn}
      />
    );
  }
  return (
    <div className="bill-tip">
      <label htmlFor="tipCustom">Select Tip %</label>
      <section className="percent-tip">
        {tipListBtn}
        <div className="percent-tip__option">
          <input
            className="tip-option opt-custom"
            id="tipCustom"
            name="tip"
            type="text"
            placeholder="Custom"
            onChange={handleInput}
            value={data.isCustomTip ? data.tip : ""}
            onFocus={onFocusTipCustom}
          />
        </div>
      </section>
    </div>
  );
}

function PeopleInput(): JSX.Element {
  const { data, err, handleInput } = useContext(dataContext);

  //declare information of peopleInput
  const labelInput: object = {
    htmlFor: "numberDivision",
    name: "Number of People",
    id: "peopleLabel",
  };
  const option: JSX.Element = (
    <span>
      <img src={person} alt="cannot find" />
    </span>
  );
  const labelOption: JSX.Element = (
    <span className="error-number">{err.message}</span>
  );
  const section = {
    className: "bill-total--details",
    span: option,
    input: {
      className: "numberDivision",
      id: "numberDivision",
      value: data.people || "",
      name: "people",
      placeholder: "0",
      onChange: handleInput,
    },
  };

  return (
    <InputField
      className="number-people"
      labelOption={labelOption}
      labelInput={labelInput}
      section={section}
    />
  );
}

export { BillCompute, BillInput, TipOption, PeopleInput };
