import React from "react";
import "../Stylesheet.css";

// prop to pass in current checkbox value
const LightToggle = props => {
  let display;

  // destructure 1st, 2nd param of props + save them as 2 variables
  // for readability
  const { isOn, handleToggle } = props;

  if (isOn) {
    display = "Night mode";
  } else {
    display = "Day mode";
  }

  /* webpage */
  return (
    <span className="toggle">
      <input
        type="checkbox"
        className="toggle-button"
        role="button"
        checked={isOn}
        onChange={handleToggle}
      />
      <label> {display} </label>
    </span>
  );
};

export default LightToggle;
