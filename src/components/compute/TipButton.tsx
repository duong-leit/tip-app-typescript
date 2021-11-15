import React from "react";

interface IButton {
  data: any;
  classTip: any;
  valueTip: any;
  onClickTipBtn: any;
}

function Button(props: IButton): JSX.Element {
  const { data, classTip, valueTip, onClickTipBtn } = props;
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
          onClickTipBtn(valueTip);
        }}
      >
        {valueTip}%
      </button>
    </div>
  );
}

export default Button;
