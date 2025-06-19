
import React from 'react'

function MapFilter() {

  const employees = [
    { empid: 101, name: "Amit Sharma", profession: "Software Engineer", salary: 75000 },
    { empid: 102, name: "Sneha Patel", profession: "Project Manager", salary: 68000 },
    { empid: 103, name: "Ravi Mehta", profession: "Data Analyst", salary: 72000 },
    { empid: 104, name: "Neha Singh", profession: "HR Manager", salary: 65000 },
    { empid: 105, name: "Karan Verma", profession:"Project Manager", salary: 80000 },
    { empid: 106, name: "Pooja Desai", profession: "Data Analyst", salary: 77000 },
    { empid: 107, name: "Arjun Nair", profession: "Frontend Developer", salary: 74000 },
    { empid: 108, name: "Ritika Roy", profession: "QA Tester", salary: 60000 },
    { empid: 109, name: "Manish Kumar", profession: "Project Manager", salary: 90000 },
    { empid: 110, name: "Divya Joshi", profession: "Data Analyst", salary: 71000 }
  ];

    let filterArr=employees.filter((e)=>e.profession=="Project Manager")

    let filter=employees.filter((e)=>e.salary>=70000)

  return (
    <div className='text-center text-danger'>
      <h2 className='text-primary'>Show Employee info using map</h2>
      <br></br>
      <div className="">
        <table class="table table-striped w-50 p-4 m-auto border rounded">
          <thead>
            <tr>
              <th scope="col">Empid</th>
              <th scope="col">Name</th>
              <th scope="col">Profession</th>
              <th scope="col">Salary</th>
            </tr>
          </thead>
          <tbody>
            {
              employees.map((e) => {
                return (
                  <>
                    <tr>
                      <td>{e.empid}</td>
                      <td>{e.name}</td>
                      <td>{e.profession}</td>
                      <td>{e.salary}</td>
                    </tr>
                  </>
                )
              })

            }
          </tbody>
        </table>
       <br></br>

      </div>
     
     <div>
      <h2 className='text-warning'>Show info as per conndition using filter</h2>
      <br></br>
      <table class="table table-striped w-50 p-4 m-auto border rounded table-bordered table-shadow 4px">
          <thead>
            <tr>
              <th scope="col">Empid</th>
              <th scope="col">Name</th>
              <th scope="col">Profession</th>
              <th scope="col">Salary</th>
            </tr>
          </thead>
          <tbody>
            {
              filterArr.map((e) => {
                return (
                  <>
                    <tr>
                      <td>{e.empid}</td>
                      <td>{e.name}</td>
                      <td>{e.profession}</td>
                      <td>{e.salary}</td>
                    </tr>
                  </>
                )
              })

            }
          </tbody>
          </table>

     </div>
     <br></br>

     <div>
      <h2 className='text-warning'>Show Employee who has salary greater than 50000</h2>
      <br></br>
      <table class="table table-striped w-50 p-4 m-auto border rounded">
          <thead>
            <tr>
              <th scope="col">Empid</th>
              <th scope="col">Name</th>
              <th scope="col">Profession</th>
              <th scope="col">Salary</th>
            </tr>
          </thead>
          <tbody>
            {
              filter.map((e) => {
                return (
                  <>
                    <tr>
                      <td>{e.empid}</td>
                      <td>{e.name}</td>
                      <td>{e.profession}</td>
                      <td>{e.salary}</td>
                    </tr>
                  </>
                )
              })

            }
          </tbody>
        </table>
     </div>
     




    </div>
  )
}

export default MapFilter
 
