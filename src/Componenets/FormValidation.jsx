import React, { useState } from 'react'

function FormValidation() {
    const[form,setform]=useState({
    username:'',
    email:'',
    password:'',
    confirmPassword:''
    })

  
    function handleChange(e){
        setform({...form,[e.target.name]:e.target.value})
    }
    let pattern=/\S+@\S+\.\S+/
    let upattern=/^([A-Z]{1,1})+([a-z]{2,6})/
    const[error,seterror]=useState()

    function handleSubmit(e){
        e.preventDefault()
        const Validation ={}
          if(!form.username){
            Validation.username="UserName is Required"
          }
          else if(!upattern.test(form.username)){
            Validation.username="Invalid Username....."
          }
          if(!form.email){
            Validation.email="email is Required"
          }
          else if(!pattern.test(form.email)){
            Validation.email="Wrong pattern"
          }
          if(!form.password){
            Validation.password="pasword is Required"
          }
          
          if(!form.confirmPassword){
            Validation.confirmPassword="confirmpasword is Required"
          }
          else if(!form.password.match(form.confirmPassword)){
            Validation.confirmPassword="Confirm password does not match"
          }
          seterror(Validation)

          if (object.keys((Validation.length===0)))
          {
            alert("Form Submitted Successfully")
          }
    }
  return (
    <>
        <div className='container'>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          placeholder='username'  
          autoComplete='off'  
          onChange={handleChange}   
        />
        {error.username && <p className='text-danger'>{error.username}</p>}
         
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder='example@gmail.com'
          autoComplete='off'
          onChange={handleChange} 
        />
          {error.emial && <p className='text-danger'>{error.email}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder='******'
          onChange={handleChange} 
        />
         {error.password && <p className='text-danger'>{error.password}</p>}
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder='******'
          onChange={handleChange} 
        />
       {error.confirmPassword && <p className='text-danger'>{error.confirmPassword}</p>}
      </div>
      <button type="submit" className='btn btn-primary'>Submit</button>
    </form>


    </div>
    </>
  )
}

export default FormValidation
