import React from 'react'

function Employe() {
  const emp = [
       { "emp_id": 101, "emp_name": "Amit Sharma" },
  { "emp_id": 102, "emp_name": "Priya Verma" },
  { "emp_id": 103, "emp_name": "Rahul Joshi" },
  { "emp_id": 104, "emp_name": "Sneha Kulkarni" },
  { "emp_id": 105, "emp_name": "Vikram Singh" }

    ]
  return (
    
   <>
    <div className='container'>
     <h3 style={{color:'Red',fontSize:'35px'}}>Employe</h3> 
       <table class="table">
                <thead>
                    <tr>

                        <th style={{color:'orange',fontSize:'25px'}} scope="col">Employe Name:- </th>
                        <th style={{color:'orange',fontSize:'25px'}} scope="col">Empolye Id:- </th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        emp.map((e) => {
                            return (
                                <tr>
                                    
                                    <td style={{color:'blue',fontSize:'20px'}}>{e.emp_id}</td>
                                    <td style={{color:'blue',fontSize:'20px'}}>{e.emp_name}</td>
                                    
                                </tr>
                            )
                        })

                    }

                </tbody>
            </table>
    </div>
    </>
  )
}

export default Employe
