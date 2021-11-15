import React from "react";
import { BillResult } from "./result/result";
import { BillCompute } from "./compute/compute";

function Container(): JSX.Element {
  return (
    <section className="bill">
      <BillCompute />
      <BillResult />
    </section>
  );
}

export default Container;
