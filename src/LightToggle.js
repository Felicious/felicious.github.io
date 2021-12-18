import React from "react";

// prop to pass in current checkbox value
const LightToggle = props => {
  let display;

  // destructure 1st, 2nd param of props + save them as 2 variables
  // for readability
  const { isOn, handleToggle } = props;
  /*
  render() {
    if(theme){
      display = <img src="https://feliciakuan.com/src/images/DSC_7586.jpg" alt="Day" />;
    } else {
      display = <img src="https://feliciakuan.com/src/images/DSC_3044.jpg" alt="Night" />;
    }*/

  if (isOn) {
    display = "Night mode";
  } else {
    display = "Day mode";
  }

  /* webpage */
  return (
    <span>
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
