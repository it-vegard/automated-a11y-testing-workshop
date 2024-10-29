import React from "react";

const AcceptCheckbox = ({}) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
      <input
        type="checkbox"
        id="conditionsAcceptance"
        name="conditionsAcceptance"
      />
      <label htmlFor="conditionsAcceptance">Jeg aksepterer vilkårene</label>
    </div>
  );
};

export default AcceptCheckbox;
