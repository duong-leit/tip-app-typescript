import React from "react";
import { useContext } from "react";
import { dataContext } from "../../Context";
import InputField from "./InputField";

import Button from "./TipButton";
import dollar from "../../assets/img/icon-dollar.svg";
import person from "../../assets/img/icon-person.svg";

const tipList = [5, 10, 15, 25, 50];

function BillCompute() {
  // const { messageValidata} = props;

  return (
    <div className="bill__compute">
      <form id="billForm" name="billForm">
        <BillInput />
        <TipOption
        // optionList={tipList}
        // minCustom="0"
        // step="0.01"
        // data={data}
        // handleInput={handleInput}
        // handleTipBtn={handleTipBtn}
        // onFocusTipCustom={onFocusTipCustom}
        />
        <PeopleInput
        // data={data}
        // handleInput={handleInput}
        // messageValidata={err.message}
        />
      </form>
    </div>
  );
}

function BillInput() {
  const dataValue = useContext(dataContext);
  // const { data, handleInput } = props;
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

function TipOption() {
  // const dataValue = useContext(dataContext);
  // const { handleInput, optionList } = props;
  const { data, handleInput, onFocusTipCustom, handleTipBtn } =
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
        handleTipBtn={handleTipBtn}
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

function PeopleInput() {
  // const dataValue = useContext(dataContext);

  const { data, err, handleInput } = useContext(dataContext);

  //declare information of peopleInput
  const labelInput = {
    htmlFor: "numberDivision",
    name: "Number of People",
    id: "peopleLabel",
  };
  const option = (
    <span>
      <img src={person} alt="cannot find" />
    </span>
  );
  const labelOption = <span className="error-number">{err.message}</span>;
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
