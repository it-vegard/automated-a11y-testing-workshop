import React, { useState } from "react";

export default function TestComponent() {
  const [pushed, setPushed] = useState(false);
  return (
    <div>
      <button aria-pressed={pushed} onClick={() => setPushed(!pushed)}>
        Toggle button
      </button>
      <button>Another button</button>
    </div>
  );
}
