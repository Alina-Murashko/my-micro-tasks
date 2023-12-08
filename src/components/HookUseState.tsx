import { useState } from "react";

export function HookUseState() {

    let [a, setA] = useState(1);
  
    const clickNumber = () => {
      setA(++a);
      console.log(a)
    }
  
    const clickNumber0 = () => {
      setA(a=0);
    }
      
      return ( 
          <div className='App'>
            <h1>{a}</h1>
            <button onClick={clickNumber}>number</button>
            <button onClick={clickNumber0}>0</button>
          </div>
         
      )
  }
  

  