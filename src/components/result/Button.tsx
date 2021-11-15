import React from "react";
import { btnProps } from "../variables/interface";

function Button(props: btnProps): JSX.Element {
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
