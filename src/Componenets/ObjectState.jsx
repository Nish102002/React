import React, { useState } from 'react'

function ObjectState() {
   const[user,setuser]=useState({
    uname:"",
    email:"",
    age:""
   })
    const [status, setstatus] = useState(false)


    const clickHandler = () => {
        setstatus(true)
    }
    function inputHandler(e){
        let name=e.target.name
        let value=e.target.value
        
        setuser({...user,[name]:value})
    }
    return (
        <>
            <div className='container mt-3 p-4'></div>
            <form style={{ margin: "auto", border: "2px solid black", width: "900px", height: "500px" }}>
                <h2 className='text-danger text-center'>Object State Example </h2>
                <table style={{ marginLeft: "15px" }}>
                    <br></br>
                    <tr>
                        <td>User Name :- <input type="text" name="uname"value={user.uname} onChange={inputHandler} style={{ marginLeft: "23px" }}></input> </td>
                        <br></br><br></br>

                    </tr>
                    <tr>
                        <td>Email :- <input type="text" name="email" value={user.email}onChange={inputHandler}  ></input> </td>
                        <td></td>
                        <br></br><br></br>

                    </tr>
                    <tr>

                        <td>Age:- <input type="text" name="age" value={user.age} onChange={inputHandler}></input> </td>
                        <td></td>
                        <br></br><br></br>
                    </tr>

                    <br></br><br></br>

                    <input type="button" className='btn btn-outline-primary' value="Show user's Data" onClick={clickHandler}></input>&nbsp;
                    <br></br><br></br>

                </table>
                {
                status?<>
            <p style={{marginLeft:"15px"}}>User Name :- {user.uname}</p>
            <p style={{marginLeft:"15px"}}>Email :- {user.email}</p>
            <p style={{marginLeft:"15px"}}>Age :- {user.age}</p></>:""

            }
            </form>
            

        </>
    )
}

export default ObjectState
