import React from "react";

interface IInputField {
  className: string;
  labelOption: any;
  labelInput: any;
  section: any;
}

function InputField({
  className,
  labelOption,
  labelInput,
  section,
}: IInputField) {
  return (
    <div className={className}>
      <label id={labelInput.id} htmlFor={labelInput.htmlFor}>
        {labelInput.name}
        {labelOption}
      </label>
      <section className={section.className}>
        {section.span}
        <input {...section.input} />
      </section>
    </div>
  );
}
export default InputField;
