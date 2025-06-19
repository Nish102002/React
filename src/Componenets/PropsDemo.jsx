
import React from 'react'

function PropsDemo({data}) {
    console.log(data)

    let arr=data.map((e)=>{
        return '${e.m1} ${e.m2} ${e.m3}'
    })
  return (
    <div className='container'>
        <h1  className='text-center text-primary'>Props Example</h1>
        <br></br>
        <p>{arr[0]}</p>
        <p>{arr[1]}</p>
    </div>
  )
}

export default PropsDemo
