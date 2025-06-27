import React from 'react'

function EmployeeDetail() {
        const{empid}=useParams()
         const emp = [
       { "empid": 101, "empname": "Amit Sharma" },
  { "empid": 102, "empname": "Priya Verma" },
  { "empid": 103, "empname": "Rahul Joshi" },
  { "empid": 104, "empname": "Sneha Kulkarni" },
  { "empid": 105, "empname": "Vikram Singh" }

    ]
     let filteremp=emp.filter((e)=>e.empid=empid)
  return (
   <>
   <div className='container mt-4'>
   <br></br>
   <div style={{width:'300px',border:'2px solid blue',margin:'auto',padding:'10px'}}>
    {
        filteremp.map((e)=>{
            return(
                <>
                <h3 className='text-primary'>EmpName:-{e.empname}</h3>
                <p>Empid:- {e.empid}</p>
                </>
            )
        })
    }
   </div>
   </div>
   </>
  )
}

export default EmployeeDetail
