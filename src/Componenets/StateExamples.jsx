import React, { useState } from 'react'

function StateExamples() {
    const[info,setinfo]=useState({
       uname:"nish",
       email:"nish@gmail.com",
       age:23
    })
    function clickHandler(){
        setinfo({...info,age:info.age+1})
    }
  return (
    <>
    <div className='container'>
    <p>{info.uname}</p>
    <p>{info.email}</p>
    <p>{info.age}</p>

    <button className='btn btn-outline-primary' onClick={clickHandler}>Update State</button>
    </div>
    </>
  )
}

export default StateExamples

