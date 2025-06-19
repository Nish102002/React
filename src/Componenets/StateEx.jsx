
import React, { useState } from 'react'

function StateEx() {
    var[a,setA]=useState(2)

    function increment(){
        setA(a+1)
    }
    function decrement(){
        setA(a-1)
    }
    function square(){
        setA(a*a)
    }
    function cube(){
        setA(a*a*a)
    }
    function Factorail(){
        f=1
        for(let i=0; i<=a; i++){
            f=f*1
        }
    }
  return (
  <>
  <div className='text-center mt-4'>
    <br></br>   
    <h3>{a}</h3>
    <div className="btn btn-outline-primary" onClick={increment}>increment A</div>
    <br></br><br></br>
    <div className="btn btn-outline-primary" onClick={decrement}>decrement A</div>
    <br></br><br></br>
    <div className="btn btn-outline-primary" onClick={square}>square A</div>
    <br></br><br></br>
    <div className="btn btn-outline-primary" onClick={cube}>cube A</div>
    <br></br><br></br>
    <div className="btn btn-outline-primary" onClick={Factorail}>Factorail A</div>
    <br></br><br></br>
  </div>
  </>
  )
}

export default StateEx
