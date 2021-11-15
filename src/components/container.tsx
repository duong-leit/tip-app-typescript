import React, { useContext } from "react";
import { BillInput, TipOption, PeopleInput } from "./compute/compute";
import { BillResult } from "./result/result";
import { BillCompute } from "./compute/compute";

function Container() {
  return (
    <section className="bill">
      <BillCompute />
      <BillResult />
    </section>
  );
}

export default Container;
