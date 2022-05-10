import { useState } from "react";

const useNewInput = (validateValue1) => {
  const [enteredValue1, setEnteredValue1] = useState("");
  const [isTouched1, setIsTouched1] = useState(false);
  const valueIsValid1 = validateValue1(enteredValue1);
  const hasError1 = !valueIsValid1 && isTouched1;
  const valueChangeHandler1 = (event) => {
    setEnteredValue1(event.target.value);
  };
  const inputBlurHandler1 = (event) => {
    setIsTouched1(true);
  };
  const reset1 = () => {
    setEnteredValue1("");
    setIsTouched1(false);
  };

  return {
    value: enteredValue1,
    isValid: valueIsValid1,
    hasError: hasError1,
    valueChangeHandler1,
    inputBlurHandler1,
    reset1,
  };
};

export default useNewInput;
