
import React,{useEffect,useRef,useState} from 'react'

function UserefEx() {
    const  refElement=useRef()
    const clickHandler=()=>{
        refElement.current.style.color="red"
        refElement.current.fontFamily="monospace"
        refElement.current.fontSize="20px"

    }
    const clickHandler1=()=>{
        refElement.current.style.color=""
        refElement.current.fontFamily=""
        refElement.current.fontSize=""
    }
  return (
    <>
    <div className='container'>
        <p ref={refElement}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, amet iusto. Dignissimos consectetur, tempore qui, officia harum ab cumque obcaecati aspernatur unde sapiente maiores rerum magnam totam ipsam explicabo odit.</p><br></br>
        <button className='btn btn-primary' onClick={clickHandler}>Change para style</button>&nbsp;&nbsp;
        <button className='btn btn-danger' onClick={clickHandler1}>Change to previous style</button>
    </div>
    </>
  )
}

export default UserefEx


