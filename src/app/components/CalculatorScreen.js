import React, { useContext } from "react";
import AutoScaleScreen from "../containers/AutoScaleScreen";
import { CalcContext } from "../context/CalculatorContext";

const CalculatorScreen = () => {


  const {calc} = useContext(CalcContext);

  return (
    <div className="screen ">
      <AutoScaleScreen> {calc.num? calc.num : calc.res}</AutoScaleScreen>
    </div>
  );
};

export default CalculatorScreen;
