import React, { useState } from "react";

export default function TestComponent() {
    const [pushed, setPushed] = useState(false)
    return (
        <a href="#" aria-pressed={pushed} onClick={() => setPushed(!pushed)}>Toggle button</a>
    )
}