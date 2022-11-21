import "./App.css";
import Wrapper from "./app/components/Wrapper";
import CalculatorProvider from "./app/context/CalculatorContext";
import CalculatorBox from "./app/components/CalculatorBox";
import CalcButton from "./app/containers/CalcButton";
import CalculatorScreen from "./app/components/CalculatorScreen";

function App() {
  const calculatorButtons = [
    ["C", "+-", "%", "/"],
    ["7", "8", "9", "x"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];
  return ( 
    <CalculatorProvider>
      <Wrapper>
        <CalculatorScreen />
        <CalculatorBox>
          {calculatorButtons.flat().map((btn, i) => {
            return <CalcButton value={btn} key={i} />;
          })}
        </CalculatorBox>
      </Wrapper>
    </CalculatorProvider>
  );
}

export default App;
