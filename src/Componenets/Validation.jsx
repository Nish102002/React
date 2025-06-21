import React, { useState } from 'react'

function Validation() {

    const [uname,setUname] = useState()
    const [mno,setMno] = useState()
    const [error,setError] = useState(false)
    const [merror,setMerror] = useState(false)
    const [sal,setSal] = useState()
    const pattern = /^[789]\d{9}$/
    function uHandler(e)
    {
    //    const {value,name} = e.target 

       let value = e.target.value
       let len = e.target.value.length
       setUname(value)

       if(len < 4)
       {
          setError(true)  
       }
       else
       {
        setError(false)
       }
   }

    function mHandler(e)
    {
         
      let value = e.target.value
      if(!pattern.test(value))
      {
        setMerror(true)
      }
      else
      {
        setMerror(false)
      }
      
    }
  return (
   
    <>

     <div className='container mt-4'>
        <table style={{margin:'auto',border:'2px solid black',width:'400px',height:'300px'}}>
            <tr>
                <td >User Name :-</td>
                <td><input type="text" name="uname" onChange={uHandler} autoComplete='off'></input></td>
               
            </tr>
            <tr>
                <td></td>
                <td>{error && <p style={{color:'red'}}>Username Should be greater than 4</p>}</td>
            </tr>
            <br></br>

            <tr>
                <td>Mobile Number:-</td>
                <td><input type="number" name="mno" onChange={mHandler}  ></input></td>
               
            </tr>

             <tr>
                <td></td>
                <td>{merror && <p style={{color:'red'}}>Invalid Mobile Number....</p>}</td>
            </tr>
   
        </table>
    </div>
   

    
    </>
  )
}

export default Validation
