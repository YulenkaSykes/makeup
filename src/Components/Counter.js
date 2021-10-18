import React, { useState } from "react";

export default function Counter({ value, setValue }) {
  return (
    <div className="row centered counter">
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        +
      </button>
      <span>{value}</span>
      <button
        onClick={() => {
          setValue(value - 1 <= 0 ? 1 : value - 1);
        }}
      >
        -
      </button>
    </div>
  );
}
