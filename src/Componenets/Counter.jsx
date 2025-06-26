import React, { useEffect, useState } from 'react'

function Counter() {
    const [data,setdata]=useState(0)
    const[count,setcount]=useState(10)
    useEffect(()=>{
     console.log("Component mount")
    },[])
    useEffect(()=>{
     console.log("Component updated")
     return function(){
        console.log("componenet unmount")
     }
    },[count])

  return (
  <>
  <div className='container text-center'>
       <h1 className='text-primary'>Counter Component</h1>
       <h2>{data}</h2>
       <button className='btn btn-danger' onClick={()=>setdata(data+1)}>Increment Data</button>&nbsp;&nbsp;
       <h2>{count}</h2>
       <button className='btn btn-danger' onClick={()=>setcount(data+10)}>Increment count</button>
  </div>
  </>
  )
}

export default Counter
