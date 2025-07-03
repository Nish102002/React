import React from 'react'
import { useParams } from 'react-router-dom'

function EmployeeDetail() {
    const { empid } = useParams()
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

    let filteremp = emp.filter((e) => e.empid == empid)
    return (
        <>
            <div className='container mt-4'>
                <br></br>
               
                    {
                        filteremp.map((e) => {
                            return (
                                <>
                                    <div className="card" style={{width: "18rem"}}>
                                        <img class="card-img-top" src={e.image} alt="Card image cap"/>
                                            <div className="card-body">
                                                <h5 className="card-title">{e.empid}</h5>
                                                <p className ="card-text">{e.empname}</p>
                                                <a href="#" className  ="btn btn-primary">Go somewhere</a>
                                            </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            
        </>
    )
}

export default EmployeeDetail
