
import React from 'react'

function EventDemo() {
    function clickHandler(){
        alert("I am in React")
        console.log("I am in React")
    }
    function overHandler(){
        alert("mouse over Even t triggered")
        console.log("mouse over Even t triggered")
    }
  return (
    <>
    <div className='container'>
     <button className='btn btn-primary mt-4' onClick={clickHandler}>Click me</button>
     <br></br><br></br>
     <p onMouseOver={overHandler}>This is my para</p>
    </div>
    </>
  )
}

export default EventDemo
