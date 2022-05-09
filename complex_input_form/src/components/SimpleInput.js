// import { useEffect, useState } from "react";
// const SimpleInput = (props) => {
//   // const nameInputRef = useRef();
//   const [enteredName, setEnteredName] = useState();
//   const [enteredNameisValid, setEnteredNameisValid] = useState(false);
//   const [enteredNameTouched, setEnteredNameTouched] = useState(false);

//   // useEffect(() => {
//   //   if (enteredNameisValid) {
//   //     console.log("Name input is valid!");
//   //   }
//   // }, [enteredNameisValid]);

//   const nameInputChangeHandler = (event) => {
//     setEnteredName(event.target.value);
//     if (event.target.value.trim() !== "") {
//       setEnteredNameisValid(true);
//     }
//   };

//   const nameInputBlurHandler = (event) => {
//     setEnteredNameTouched(true);
//     if (enteredName.trim() === "") {
//       setEnteredNameisValid(false);
//     }
//   };

//   const formSubmissionHandler = (event) => {
//     event.preventDefault();

//     setEnteredNameTouched(true);

//     if (enteredName.trim() === "") {
//       setEnteredNameisValid(false);
//       return;
//     }
//     setEnteredNameisValid(true);
//     console.log(enteredName);
//     // const enteredValue = nameInputRef.current.value;
//     // console.log(enteredValue);

//     // nameInputRef.current.value = ""; => NOT IDEAL, DON'T MANIPULATE THE DOM
//     setEnteredName("");
//   };

//   const nameInputisInvalid = !enteredNameisValid && enteredNameTouched;

//   const nameInputClasses = nameInputisInvalid
//     ? "form-control invalid"
//     : "form-control";

//   return (
//     <form onSubmit={formSubmissionHandler}>
//       <div className={nameInputClasses}>
//         <label htmlFor="name">Your Name</label>
//         <input
//           // ref={nameInputRef}
//           type="text"
//           id="name"
//           onChange={nameInputChangeHandler}
//           onBlur={nameInputBlurHandler}
//           value={enteredName}
//         />
//         {nameInputisInvalid && (
//           <p className="error-text">Name must not be empty.</p>
//         )}
//       </div>
//       <div className="form-actions">
//         <button>Submit</button>
//       </div>
//     </form>
//   );
// };

// export default SimpleInput;

import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  useEffect(() => {
    if (enteredNameIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredNameIsValid]);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    setEnteredName("");
    setEnteredNameTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
