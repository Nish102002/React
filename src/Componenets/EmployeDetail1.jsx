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
 filterEmp.length !== 0 ? 

    ( <div className='container mt-4 w-75 m-auto '>
                <br></br>
                     {
                        filterEmp.map((e) => {
                            return (
                                <>
                                    <div className="card" style={{width:"25rem"}}>
                                        <img className="card-img-top" src={e.image} alt="Card image cap" />
                                            <div className="card-body">
                                                <h5 className="card-title">Employee Name:-{e.empname}</h5>
                                                <p className="card-text"><b>Name</b>:-{e.empid}</p>

                                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>)

                : <h1 className='text-danger text-center mt-3'>Employee Not Found</h1>
)
}
export default EmployeDetail1
