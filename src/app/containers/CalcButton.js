import React, { useContext } from 'react'
import { CalcContext } from '../context/CalculatorContext';

const CalcButton = ({value}) => {
  const {calc, setCalc} = useContext(CalcContext);
  const getStyle = (name) =>{
    const className = {
      '0': 'zero',
      'x': 'opt',
      '+': 'opt',
      '-': 'opt',
      '/': 'opt',
      '=': 'opt',
    }
    return className[name];
  }

  const commaClick = () => {
    setCalc(
      {
        ...calc,
        num: !calc.num.toString().includes('.') ? calc.num + value : calc.num,
      }
    );
  }

  const resetClick = () => {
    setCalc(
      {
        sign:'',
        num: 0,
        res:0,
      }
    );
  }
  
  const handleClickNumber = () => {
    const numberString = value.toString();
    let numberValue;
    if(numberString === 0 && calc.num ===0){
      numberValue = 0;
    }else{
      numberValue = Number(calc.num + numberString);
    }
    setCalc(
    {
      ...calc,
      num: numberValue,
    }
    );
  }

  const optClick = () =>{
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    })
  }

  const equalsClick = () =>{
    if(calc.res && calc.num){
      const math = (res , num , sign) => {
        const result = {
          '+': (res, num) => res+num,
          '-': (res, num) => res-num,
          'x': (res, num) => res*num,
          '/': (res, num) => res/num,
        }
        return result[sign](res, num);
      }
      setCalc({
        sign: '',
        res: math(calc.res, calc.num, calc.sign),
        num: 0,
      })
    }
  }

  const percentClick = () => {
    setCalc({
      num: (calc.num / 100),
      res: (calc.res / 100),
      sign:'',
    })
  }

  const invertClick = () => {
    setCalc({
      num:calc.num? calc.num * -1: 0,
      res:calc.res? calc.res * -1: 0,
      sign:'',
    })
  }

  const handleBtnClick = () => {
    const results = {
      '.': commaClick,
      'C':resetClick,
      '/': optClick,
      'x': optClick,
      '+': optClick,
      '-': optClick,
      '=': equalsClick,
      '%': percentClick,
      '+-': invertClick,
    }
    if(results[value]){
      return results[value]();
    }else{
     return handleClickNumber();
    }
  }

  return (
   <button onClick={handleBtnClick} className={`button ${getStyle(value)}`}>{value}</button>
  )
}

export default CalcButton