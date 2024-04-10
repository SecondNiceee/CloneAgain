import React, { memo } from "react";
import cl from "./BudgetInput.module.css";
import Info from "../../../images/icons/info.svg";

const BudgetInput = ({ className, setBudget, budget , tonValue , setTonValue, tonConstant }) => {
  const KisInteger = function (obj) {
    return "0123456789".includes(obj[obj.length - 1]);
  };

  function format(strPar) {
    let str = strPar;
    if (str.length > 1) {
      if (str[0] === "0") {
        str = str.replace("0", "");
      }
    }
    str = str.replaceAll(" ", "").substring(0, 6);
  
    const s = str.length;
    const chars = str.split("");
    const strWithSpaces = chars.reduceRight((acc, char, i) => {
      const spaceOrNothing = (s - i) % 3 === 0 ? " " : "";
      return spaceOrNothing + char + acc;
    }, "");

    return strWithSpaces[0] === " " ? strWithSpaces.slice(1) : strWithSpaces;
  }

  function budgetWidth(bg) {
    let str = bg.toString();
    str = str.replaceAll(" ", "");
    return "calc( " + str.length.toString() + "ch" + " + 10px )";
  }
  return (
    <div
      className={
        className ? [className, cl.BudgetInput].join(" ") : cl.BudgetInput
      }
    >
      <input
        style={{ width: budgetWidth(budget) }}
        value={budget}
        onChange={(e) => {
          setBudget(
            KisInteger(e.target.value)
              ? format(e.target.value)
              : e.target.value.substring(0, e.target.value.length - 1)
          );
        }}
        type="text"
        onFocus={(e) => {
          setBudget(e.target.value === "0" ? "" : e.target.value);
        }}
        onBlur={(e) => {
           setBudget(e.target.value.length > 0 ? e.target.value : "0");
        }}
        className={cl.input}
      />
      <p className={cl.budgetText}>RUB</p>
      <div className={cl.bottomTextContainer}>
        <p className={cl.text}> К оплате {tonValue} TON </p>
        <img src={Info} alt="" />
      </div>
    </div>
  );
};

export default memo(BudgetInput);
