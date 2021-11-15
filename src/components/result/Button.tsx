import React from "react";
import { btnList } from "./ButtonType";

export interface btnProps {
  btnList: btnList[];
}

function Button(props: btnProps) {
  const btnList = props.btnList;
  return (
    <>
      {btnList.map((element: any, index: number) => (
        <button key={index} {...element.attribute}>
          {element.context}
        </button>
      ))}
    </>
  );
}

export { Button };
