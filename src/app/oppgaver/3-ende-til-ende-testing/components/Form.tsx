import React from "react";
import NameInputs from "./NameInputs";
import EmailInputs from "./EmailInputs";
import styles from "../page.module.css";
import AcceptCheckbox from "./AcceptCheckbox";

const Form = () => {
  const [matchingEmailsError, setMatchingEmailsError] = React.useState<
    string | null
  >(null);
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    if (data.email !== data.emailRepeat) {
      setMatchingEmailsError("The emails do not match");
      return;
    } else {
      setMatchingEmailsError(null);
    }

    //form.reset();

    console.log(formData);
  };
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <NameInputs />
      <EmailInputs submitErrors={matchingEmailsError} />
      <AcceptCheckbox />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
