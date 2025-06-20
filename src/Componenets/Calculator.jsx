
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
    <form style={{margin:"auto",border:"2px solid black",width:"900px",height:"300px"}}>
        <h2 className='text-danger text-center'>Calculator</h2>
        <table style={{marginLeft:"15px"}}>
            <br></br>
            <tr>
                <td >Enter First Number:- <input type="text" name="fno"  onChange={inputHandler1} style={{marginLeft:"23px"}}></input> </td>
                <br></br><br></br>

            </tr>
            <tr>
                <td>Enter Second Number:- <input type="text" name="sno"  onChange={inputHandler}></input> </td>
                <td></td>
                
            </tr>
            <tr>
                
                <td>Result:-{result}</td>
                <td></td>
            </tr>
            <br></br><br></br>
                
                <input type="button" className='btn btn-outline-primary' onClick={clickHandler} value="Additon"></input>&nbsp;

                <input type="button" className='btn btn-outline-primary' onClick={clearHandler} value="clear"></input>&nbsp;

                <input type="button" className='btn btn-outline-primary' onClick={clickHandler1} value="Substraction"></input>&nbsp;
                <input type="button" className='btn btn-outline-primary' onClick={clickHandler2} value="Multiplication"></input>&nbsp;
                <input type="button" className='btn btn-outline-primary' onClick={clickHandler3} value="Division"></input>&nbsp;
                <input type="button" className='btn btn-outline-primary' onClick={clickHandler4} value="Factorial"></input>&nbsp;
                
            
            
        </table>
    </form>
    </>
  )
}

export default Calculator
