import React from 'react'
import { useState } from 'react'
import "./count.css"


const App = () => {

  let[count,countset]=useState(0)
 
  let a=(a)=>{

     countset(count+1);
  }


  let b=(b)=>{

    countset(count-1);
}


let c=(c)=>{

  countset(0);
}
 
  return (
     
     <div>     <h1>{count}</h1>
               <div onClick={a}><button>Increment</button></div><br/>
               <div onClick={b}><button>Decrement</button></div><br/>
               <div onClick={c}><button>Reset</button></div>
   
    
    </div>
  )
}

export default App