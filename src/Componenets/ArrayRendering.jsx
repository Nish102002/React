
function ArrayRendering() {

    let fruits = ["Apple", "Banana", "Mango", "Orange", "Kiwi"]

    let studInfo = [
        {
            id: 1,
            name: "nish",
            age: 22,
            sub:"math"
        },
        {
            id: 2,
            name: "rushi",
            age: 23,
            sub:"chem"
        },
        {
            id: 3,
            name: "love",
            age: 24,
            sub:"chem"
        },
        {
            id: 4,
            name: "janu",
            age: 24,
            sub:"math"
        }
        
    ]
    var newArr = studInfo.map((e)=>{
        return<li>{e.id} {e.name} {e.age} {e.sub}</li>
    })

    return (
        <>
        <div style={{textAlign:'center'}}>
            <uL>
                {
                    fruits.map((e) => {
                        return (
                            <>
                                <li>{e}</li>
                            </>
                        )
                    })

                }
            </uL>
            <hr></hr>
            {
                studInfo.map((e) => {
                    return (
                        <>
                            <p>{e.id } {e.name } {e.age}</p>
                        </>
                    )
                })
            }
            <hr></hr>
            <table border='2' width='300px' align='center' cellPadding={7}>
            <caption><h2>Student Information</h2></caption>
            <tr>
                <th>Td</th>
                <th>Name</th>
                <th>Age</th>
                <th>Subject</th>
            </tr>
            {
                studInfo.map((e)=>{
                    return(
                        <>
                        <tr>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.age}</td>
                            <td>{e.sub}</td>
                        </tr>
                        </>
                    )
                })
            }
            </table>
            <hr></hr>
            <ul>{newArr}</ul>
        </div>
        </>
        
    )
}
export default ArrayRendering