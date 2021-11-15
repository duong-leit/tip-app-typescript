import React from "react";
import { IOutputField } from "../variables/interface";

function OutputField(props: IOutputField): JSX.Element {
  const { label, outputField } = props;
  return (
    <section>
      <label>
        {label.map((element: any, index: number) => (
          <span key={index}>{element}</span>
        ))}
      </label>
      <input
        type={outputField.type}
        id={outputField.id}
        name={outputField.name}
        value={outputField.value}
        readOnly
      />
    </section>
  );
}

export { OutputField };
