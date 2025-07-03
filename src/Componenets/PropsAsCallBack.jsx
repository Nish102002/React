import React, { useState } from 'react'
import Child from './Child'

function PropsAsCallBack() {
    const [info,setinfo]=useState()
    function msgfromchild(msg){
        setinfo(msg)
    }
  return (
    <>
    <div>Props As Callback</div>
    
      <Child f={msgfromchild} ></Child>
      <h3>{info}</h3>
    </>
  )
}

export default PropsAsCallBack
