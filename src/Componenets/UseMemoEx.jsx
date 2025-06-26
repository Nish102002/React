import React, { useState } from 'react'

function UseMemoEx() {
    const[count,setcount]=useState(1)
    const[data,setdata]=useState(10)

    function largefun(num){
        for(let i=1; i<100; i++){
            console.log(num*1)
        }
    }
    const memofun=useState(()=>{
        return largefun(6)
    },[data])

  return (
    <>
    <div className='container mt-4'>
        {memofun}
        <p>{count}</p>
        <button className='btn btn-primary' onClick={()=>setcount(count+1)}>Change Count</button>
        &nbsp;&nbsp;
        <p>{data}</p>
        <button className='btn btn-primary' onClick={()=>setdata(count+1)}>Change data</button>

    </div>
    </>
  )
}

export default UseMemoEx
