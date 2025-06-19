
import React, { useState } from 'react'

function FormStu() {
    const[username,setusername]=useState()
    const[email,setemail]=useState()
    const[password,setpassword]=useState()
    const[gender,setgender]=useState()
    const[hobbies,sethobbies]=useState()
    const[submited,setSubmited]=useState(false)

    function inputHandler(e){
        let text=e.target.value
        setusername(text)
    }
    function inputHandler1(e){
        setemail(e.target.value)
    }
    function inputHandler2(e){
        setpassword(e.target.value)
    }
    function inputHandler3(e){
        setgender(e.target.value)
    }
    function inputHandler4(e){
        sethobbies(e.target.value)
    }
    function clickHandler(){
        setSubmited(true)

    }
  return (
    <>
    <div className='container mt-3 p-4'>
    <form>
        <h2 className='text-danger'>Student Regestration Form:-</h2>
        <table>
            <br></br>
            <tr>
                <td>User name:- </td>
                <td><input type="text" name="user name" onChange={inputHandler}></input></td>
            </tr>
            <br></br>
            <tr>
                <td>Email:- </td>
                <td><input type="email" name="email" onChange={inputHandler1}></input> </td>
            </tr>
            <br></br>
            <tr>
                <td>Password:- </td>
                <td><input type="password" name="password" onChange={inputHandler2}></input> </td>
            </tr>
            <br></br>
            <tr>
                <td>Gender:- </td>
               <label> <td><input type="radio"  name="gender" value="male" onChange={inputHandler3}></input> Male </td></label>
               &nbsp;&nbsp;
                <label><td><input type="radio"  name="gender" value="female" onChange={inputHandler3}></input> Female </td></label>
            </tr>
            <br></br>
            <tr>
                <td>Hobbies:- </td>
                <td><input type="text" name="hobbies" onChange={inputHandler4}></input> </td>
            </tr>
            <br></br>
            <tr>
                <td><input type="button" className='btn btn-outline-primary' onClick={clickHandler} value="Submit"></input></td>
            </tr>
            
        </table>
    </form>
    {submited &&(
        <div className='mt-4'>
        <h2 className='text-success'>Submitted Information :- </h2>
        <p>User name:- {username}</p>
        <p>Email:- {email}</p>
        <p>Password:- {password}</p>
        <p>Gender:- {gender}</p>
        <p>Hobbies:- {hobbies}</p>
        </div>
    )}
    </div>
    </>
  )
}

export default FormStu


