import useNewInput from "../hooks/use-newInput";

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler1: nameChangeHandler,
    inputBlurHandler1: nameBlurHandler,
    reset1: resetNameInput,
  } = useNewInput((value) => value.trim() !== "");

  const {
    value: enteredLName,
    isValid: enteredLNameIsValid,
    hasError: lNameInputHasError,
    valueChangeHandler1: lNameChangeHandler,
    inputBlurHandler1: lNameBlurHandler,
    reset1: resetLNameInput,
  } = useNewInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler1: emailChangeHandler,
    inputBlurHandler1: emailBlurHandler,
    reset1: resetEmailInput,
  } = useNewInput((value) => value.includes("@"));

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }
    resetNameInput();
    resetEmailInput();
    resetLNameInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const lNameInputClasses = lNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameInputHasError && (
            <p className="error-text">Please enter a valid name.</p>
          )}
        </div>
        <div className={lNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lNameChangeHandler}
            onBlur={lNameBlurHandler}
            value={enteredLName}
          />
          {lNameInputHasError && (
            <p className="error-text">Please enter a valid lastname.</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
