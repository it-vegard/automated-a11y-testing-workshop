import React from "react";

const NameInputs = ({}) => {
  return (
    <>
      <div>
        <label htmlFor="firstName">First name</label>
        <input id="firstName" name="firstName" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last name</label>
        <input id="lastName" name="lastName" type="text" />
      </div>
    </>
  );
};

export default NameInputs;
