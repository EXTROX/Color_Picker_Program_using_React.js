import React, {useState} from 'react';


function ColorPicker() {
  const [color,setColor] = useState("#FFFFFF");
  // const [color,setColor] = useState({hue : 0, saturation : 50, lightness : 50}); //This command is little bit lengthy because we have to give a javascript object with properties so that why i use hexadecimal values of color coding

  function handleColorChange(event){
    setColor(event.target.value);
  }

  return ( 
    <div className='color-picker-container'>
        <h1>Color Picker</h1>
        <div className='color-display' style={{backgroundColor: color}}>
            <p>Selected Color: {color}</p>
        </div>
        <label htmlFor="">Select a Color</label>
        <input type="color" value={color} onChange={handleColorChange} />
    </div>
   );
}

export default ColorPicker;