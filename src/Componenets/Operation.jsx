
import React, { useState } from 'react'

function Operation() {
        const [fno,setfno]=useState()
        const[sno,setsno]=useState()
        const[tno,settno]=useState()
        const[result,setresult]=useState()
        const[status,setstatus]=useState(false)
        const[status1,setstatus1]=useState(false)

        function inputHandler1(e){
        let text1=e.target.value
        setfno(text1)
        //setfno(e.target.value)
    }
        function inputHandler2(e){
        let text2=e.target.value
        setsno(text2)
        //setfno(e.target.value)
    }
        function inputHandler3(e){
        let text3=e.target.value
        settno(text3)
        //setfno(e.target.value)
    }
    function clickHandler(){
        let f=1
        for(let i=1; i<=fno; i++){
            f=f*i
        }
        setresult(f)
        setstatus1(true)
    }
    function greater(){
        if(fno>=sno && fno>=tno){
            setresult(fno)
        }else if(sno>=fno && sno>=tno){
            setresult(sno)
        }else{
            setresult(tno)
        }
        setstatus(true)
    }
        
  return (
    <>
    <div className="container mt-3 p-4">
        <form>
            <tr>
                <td>Enter First Number:- </td>
                <td><input type="text" name="fno"  onChange={inputHandler1}></input> </td>
            </tr>
            <tr>
                <td>Enter Second Number:- </td>
                <td><input type="text" name="fno"  onChange={inputHandler2}></input> </td>
            </tr>
            <tr>
                <td>Enter Third Number:- </td>
                <td><input type="text" name="fno"  onChange={inputHandler3}></input> </td>
            </tr>
            
                <br></br>
                <input type="button" className='btn btn-outline-primary' onClick={clickHandler} value="Factorial"></input>&nbsp;&nbsp;
                 <input type="button" className='btn btn-outline-primary' onClick={greater} value="Max no"></input>
        
             
            
            
        </form>
        {
            status?(<><p>result : {result}</p></>):""
        }

        {
            status1?(<><p>factorial : {result}</p></>):""
        }
    </div>
    </>
  )
}

export default Operation
