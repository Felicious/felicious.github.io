
import {useState} from 'react';

// prop to pass in current checkbox value
function LightToggle (props) {
  let display;
/*
  render() {
    if(theme){
      display = <img src="https://feliciakuan.com/assets/images/DSC_7586.jpg" alt="Day" />;
    } else {
      display = <img src="https://feliciakuan.com/assets/images/DSC_3044.jpg" alt="Night" />;
    }*/

    /* webpage */
    return (
      <span>
        <input type="checkbox" class="toggle" role="button"
          onClick={()=> setTheme(!theme)}/>;
      </span>

      <div>
        {display}
      </div>

      
    );
} 

export default LightToggle; 