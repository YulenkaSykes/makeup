import React, { useState } from "react";
import Vector from "../Vector.png";

import Select from "./Select";
import Counter from "./Counter";

const Card = ({ imgNumber }) => {
  const colors = ["red", "yellow", "green"];
  const volumes = [100, 200, 300];

  const [check, setCheck] = useState(volumes[0]);

  const [value, setValue] = useState(1);
  return (
    <div className="col centered wrapper">
      <div className="col card centered">
        <div className=" row header">
          <p className=" row new centered">NEW</p>
          <div
            style={{
              background: `url(${process.env.PUBLIC_URL}/images/img${imgNumber}.png)`,
            }}
            alt=""
            className="img"
          ></div>
          <div className="row icon centered">
            <img src={Vector} alt="" className="vector" />
          </div>
        </div>
        <div className="col centered text">
          <h1>Шампунь</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </div>
        <div className="row centered price">
          <Select items={colors} />
          <span>{value * 200}</span>
        </div>
        <div className="col check_container">
          {volumes.map((e) => (
            <div className="row centered checkbox_wrapper">
              <input
                type="checkbox"
                checked={check === e}
                onChange={() => setCheck(e)}
              />
              <span>{e}ml</span>
            </div>
          ))}
        </div>
        <div className="row centered button_wrapper">
          <Counter value={value} setValue={setValue} />
          <button className="row centered">Купить</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
