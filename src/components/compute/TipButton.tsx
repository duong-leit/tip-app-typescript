import React from "react";

interface IButton {
  data: any;
  classTip: any;
  valueTip: any;
  handleTipBtn: any;
}

function Button({ data, classTip, valueTip, handleTipBtn }: IButton) {
  return (
    <div className={classTip}>
      <button
        type="button"
        className={
          "tip-option " +
          (data.isCustomTip === false && data.tip === valueTip ? "active" : "")
        }
        id={"tip-option-" + valueTip}
        name="tip"
        onClick={() => {
          handleTipBtn(valueTip);
        }}
      >
        {valueTip}%
      </button>
    </div>
  );
}

export default Button;
