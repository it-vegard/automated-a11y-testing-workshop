import exp from "constants";
import React from "react";

const EmailInputs = ({ submitErrors }) => {
  const [email, setEmail] = React.useState<string>("");
  const [emailError, setEmailError] = React.useState<string | null>(null);
  const [emailRepeat, setEmailRepeat] = React.useState<string>("");
  const [emailRepeatError, setEmailRepeatError] = React.useState<string | null>(
    null
  );

  const validateEmail = (
    input: string,
    callback: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    if (input.indexOf("@") === -1) {
      callback("Invalid email. Must contain @.");
    } else {
      callback(null);
    }
  };

  return (
    <>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onBlur={(event) => validateEmail(event.target.value, setEmailError)}
          onChange={(event) => setEmail(event.target.value)}
          aria-invalid={emailError ? true : undefined}
        />
        {emailError && <p style={{ color: "red" }}>{emailError}</p>}
      </div>
      <div>
        <label htmlFor="emailRepeat">Repeat email</label>
        <input
          id="emailRepeat"
          name="emailRepeat"
          type="email"
          onBlur={(event) =>
            validateEmail(event.target.value, setEmailRepeatError)
          }
          onChange={(event) => setEmailRepeat(event.target.value)}
          aria-invalid={emailRepeatError || submitErrors ? true : undefined}
        />
        {emailRepeatError && (
          <p id="emailRepeatError" style={{ color: "red" }}>
            {emailRepeatError}
          </p>
        )}
        {submitErrors && (
          <p id="emailsMatchError" style={{ color: "red" }}>
            {submitErrors}
          </p>
        )}
      </div>
    </>
  );
};

export default EmailInputs;
