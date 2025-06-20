import React, { useState,useRef } from 'react'

function Clock() {

    // let t = new Date().toLocaleTimeString()
    const interval = useRef(null)
    const [ctime,setCTime] = useState()

    function clickHandler()
    {
       interval.current = setInterval(fun, 1000)
    
    }

    function fun()
    {
       t = new Date().toLocaleTimeString()
       setCTime(t)
    }

    const clickHandler1 = () =>
    {
     
    window.clearInterval(interval.current)

    
    }

  return (
  
    <>
       <div className='text-center mt-3 p-3'>
        <h2 className='text-success text-primary'>Digital Clock Example</h2>
        <br></br>

        <br></br>

        <h4>{ctime}</h4><br></br>
        <button className='btn btn-danger' onClick={clickHandler}>Start Clock </button>&nbsp;&nbsp;
        <button className='btn btn-warning' onClick={clickHandler1}>Stop Clock </button>
       

       </div>
    
    </>
  )
}

export default Clock