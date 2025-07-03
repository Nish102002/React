import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Employe() {
         const emp = [
       { "empid": 101, "empname": "Amit Sharma" },
  { "empid": 102, "empname": "Priya Verma" },
  { "empid": 103, "empname": "Rahul Joshi" },
  { "empid": 104, "empname": "Sneha Kulkarni" },
  { "empid": 105, "empname": "Vikram Singh" }

    ]   

 
   
  return (
    
   <>
    <div className='container'>
        <ul>
    {
        emp.map((e)=>{
            return(
                <Link to={`${e.empid}`}>{e.empid}</Link>
            )
        })
    } 
    </ul>

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
