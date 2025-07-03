import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Employe() {
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
    ]   

 
   
  return (
    
   <>
   <div
        style={{
          display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px',
      padding: '20px',
        }}
      >
        {emp.map((e) => {
          return (
            <div
              className="card"
              style={{
                width: "30%",
                minWidth: "250px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <img
                className="card-img-top"
                src={e.image}
                alt="Card image cap"
                style={{ width: "100%", height: "250px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Employee Id:-{e.empid}</h5>
                <p className="card-text">
                  <b>Name</b>:-{e.empname}
                </p>

              </div>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default Employe
    //    <table class="table">
    //             <thead>
    //                 <tr>

    //                     <th style={{color:'orange',fontSize:'25px'}} scope="col">Employe Name:- </th>
    //                     <th style={{color:'orange',fontSize:'25px'}} scope="col">Empolye Id:- </th>
                        
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {
    //                     emp.map((e) => {
    //                         return (
    //                             <tr>
                                    
    //                                 <td style={{color:'blue',fontSize:'20px'}}>{e.emp_id}</td>
    //                                 <td style={{color:'blue',fontSize:'20px'}}>{e.emp_name}</td>
                                    
    //                             </tr>
    //                         )
    //                     })

    //                 }

    //             </tbody>
    //         </table>
