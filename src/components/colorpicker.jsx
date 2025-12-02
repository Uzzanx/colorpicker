import { useEffect, useState } from 'react';
import "./colorpicker.css"

function Colorpicker() {
    const[color,setColor]=useState('red')
  
  
    useEffect(()=>{
      document.title=`Color: ${color}`
  
    },[color])
    return (
      <div className="Appp">
        <div className='block' style={{backgroundColor:color}}></div>
        <h2>Current Color:{color}</h2>
        <button onClick={()=>setColor('red')}>red</button>
        <button onClick={()=>setColor('green')}>green</button>
        <button onClick={()=>setColor('blue')}>blur</button>
    
      </div>
    );
  }

export default Colorpicker ;