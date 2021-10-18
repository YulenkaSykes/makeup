import React, { useState } from "react";
import Vector1 from "../Vector 1.svg";

const Select = ({ items }) => {
  const [select, setSelect] = useState();
  const [selecting, setSelecting] = useState(false);
  return (
    <div
      className={`col centered select ${selecting && "bordersOff"}`}
      onMouseOver={() => setSelecting(true)}
      onMouseLeave={() => setSelecting(false)}
    >
      <div className="row centered header">
        {<span>{select || "Цвет"}</span>}
        <img
          src={Vector1}
          alt=""
          onClick={() => {
            setSelecting(!selecting);
          }}
          className={selecting && "down"}
        />
      </div>
      {selecting && (
        <div className="col dropdown">
          {items.map((e) => (
            <span
              onClick={() => {
                setSelect(e);
                setSelecting(false);
              }}
            >
              {e}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
