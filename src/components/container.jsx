import React, { useContext } from "react";
import { BillInput, TipOption, PeopleInput } from "./compute/compute";
import { BillResult } from "./result/result";
import { dataContext } from "./Context";

const tipList = [5, 10, 15, 25, 50];

function Container() {
  return (
    <section className="bill">
      <BillCompute className="bill__compute" />
      <BillResult className="bill__result" />
    </section>
  );
}

function BillCompute(props) {
  const { messageValidata } = props;
  const { data, handleInput, handleTipBtn, onFocusTipCustom } =
    useContext(dataContext);

  return (
    <div className="bill__compute">
      <form id="billForm" name="billForm">
        <BillInput data={data} handleInput={handleInput} />
        <TipOption
          optionList={tipList}
          minCustom="0"
          step="0.01"
          data={data}
          handleInput={handleInput}
          handleTipBtn={handleTipBtn}
          onFocusTipCustom={onFocusTipCustom}
        />
        <PeopleInput
          data={data}
          handleInput={handleInput}
          messageValidata={messageValidata}
        />
      </form>
    </div>
  );
}

export default Container;
