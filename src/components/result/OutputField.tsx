import React from "react";

function OutputField({ label, outputField }: any) {
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
