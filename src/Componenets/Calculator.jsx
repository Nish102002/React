
import React, { useState } from 'react'

function Calculator() {
    const [fno,setfno]=useState()
    const[sno,setsno]=useState()
    const[result, setresult]=useState()

    function inputHandler(e){
        let text=e.target.value
        setfno(text)
        //setfno(e.target.value)
    }

    function inputHandler1(e){
        let txt1=e.target.value
        setsno(txt1)
    }
    function clickHandler(){
       let sum=parseInt(fno)+parseInt(sno)
       setresult(sum)
    }
    function clickHandler1(){
        let sub=parseInt(fno)-parseInt(sno)
        setresult(sub)
    }
    function clickHandler2(){
        let mul=parseInt(fno)*parseInt(sno)
        setresult(mul)
    }
    function clickHandler3(){
        let div=parseInt(fno)/parseInt(sno)
        setresult(div)
    }
    function clickHandler4(){
        let f=1
        for(let i=1; i<=fno; i++){
            f=f*i
        }
        setresult(f)
    }
    function clearHandler(){
        setfno("")
        setsno("")
        setresult("")
    }

  return (
    <>
    <div className='container mt-3 p-4'></div>
    <form>
        <h2 className='text-danger'>Calculator</h2>
        <table>
            <br></br>
            <tr>
                <td>Enter First Number:- </td>
                <td><input type="text" name="fno"  onChange={inputHandler1}></input> </td>
            </tr>
            <tr>
                <td>Enter Second Number:- </td>
                <td><input type="text" name="sno"  onChange={inputHandler}></input> </td>
            </tr>
            <tr>
                <td>Result:-{result}</td>
                <td></td>
            
            <tr>
                <td></td>
                <td><input type="button" className='btn btn-outline-primary' onClick={clickHandler} value="Additon"></input></td>

                <td><input type="button" className='btn btn-outline-primary' onClick={clearHandler} value="clear"></input></td>

                <td><input type="button" className='btn btn-outline-primary' onClick={clickHandler1} value="Substraction"></input></td>
                <td><input type="button" className='btn btn-outline-primary' onClick={clickHandler2} value="Multiplication"></input></td>
                <td><input type="button" className='btn btn-outline-primary' onClick={clickHandler3} value="Division"></input></td>
                <td><input type="button" className='btn btn-outline-primary' onClick={clickHandler4} value="Factorial"></input></td>
                
            </tr>
            </tr>
        </table>
    </form>
    </>
  )
}

export default Calculator
