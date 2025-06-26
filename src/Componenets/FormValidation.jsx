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
    const[error,seterror]=useState([])

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

          if (Object.keys((Validation.length===0)))
          {
            alert("Form Submitted Successfully")
          }
    }
  return (
    <>
        <div className='container'>
    <form style={{margin:"auto",border:"2px solid black",width:"400px",height:"300px"}} onSubmit={handleSubmit}>
      <div>
        <label style={{marginLeft:'10px', marginTop:'20px'}}>Username:</label>
        <input
          style={{marginLeft:'10px'}}
          type="text"
          name="username"
          placeholder='username'  
          autoComplete='off'  
          onChange={handleChange}   
        />
        {error.username && <p className='text-danger'>{error.username}</p>}
         
      </div>
      <div>
        <label style={{marginLeft:'10px', marginTop:'20px'}}>Email:</label>
        <input
          style={{marginLeft:'10px'}}
          type="email"
          name="email"
          placeholder='example@gmail.com'
          autoComplete='off'
          onChange={handleChange} 
        />
          {error.emial && <p className='text-danger'>{error.email}</p>}
      </div>
      <div>
        <label style={{marginLeft:'10px', marginTop:'20px'}}>Password:</label>
        <input
          style={{marginLeft:'10px'}}
          type="password"
          name="password"
          placeholder='******'
          onChange={handleChange} 
        />
         {error.password && <p className='text-danger'>{error.password}</p>}
      </div>
      <div>
        <label style={{marginLeft:'10px', marginTop:'20px'}}>Confirm Password:</label>
        <input
          style={{marginLeft:'10px'}}
          type="password"
          name="confirmPassword"
          placeholder='******'
          onChange={handleChange} 
        />
       {error.confirmPassword && <p className='text-danger'>{error.confirmPassword}</p>}
      </div>
      <button type="submit" className='btn btn-primary' style={{marginLeft:'150px', marginTop:'20px'}}>Submit</button>
    </form>


    </div>
    </>
  )
}

export default FormValidation
