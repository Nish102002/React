import React from 'react'
import { useParams } from 'react-router-dom'

function EmployeDetail1() {
    const {empname}=useParams()
        const emp = [
  {
    "empid": "E001",
    "empname": "Alice Johnson",
    "image": "https://picsum.photos/id/1011/200/200"
  },
  {
    "empid": "E002",
    "empname": "Bob Smith",
    "image": "https://picsum.photos/id/1012/200/200"
  },
  {
    "empid": "E003",
    "empname": "Charlie Davis",
    "image": "https://picsum.photos/id/1013/200/200"
  },
  {
    "empid": "E004",
    "empname": "Diana Ross",
    "image": "https://picsum.photos/id/1014/200/200"
  },
  {
    "empid": "E005",
    "empname": "Ethan Brown",
    "image": "https://picsum.photos/id/1015/200/200"
  }
];
const filterEmp=emp.filter((e)=>e.empname==empname)
  return (
    filterEmp.length!==0?
    (<div className='container mt-4 w-50' style={{border:'3px solid black'}}>
   
 
    {
        filterEmp.map((e)=>{
            return(
                <>
                <h3>Empname:- {e.empname}</h3>
                <p>EmpId:- {e.empid}</p>
                </>
            )
        })
    }
   </div>
   
  ):<div style={{textAlign:'center'}}>Employe Not Found</div>
)
}
export default EmployeDetail1
