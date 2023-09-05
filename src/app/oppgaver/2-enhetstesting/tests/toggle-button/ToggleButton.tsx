import React, { useState } from "react";

export default function TestComponent({ text }: { text: String }) {
  const [pushed, setPushed] = useState(false);
  return (
    <button aria-pressed={pushed} onClick={() => setPushed(!pushed)}>
      {text}
    </button>
  );
}
