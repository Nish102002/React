import Second from "./Second"
import './App.css'

export default function First()
{
    let newstyle={
        color:'blue',
        fontFamily:'Arial',
        textTransform:'uppercase',
        textAlign:'center'
    }
    let student={
        roll:2,
        name:"nish",
        marks:56,
        stream:"BE comp"
    }
    return(
        <>
        <div className="app">
            <h1>First component</h1>
            <hr></hr>
        <div className="c1">
            <p>Roll No :- {student.roll}</p>
            <p>Student name :- {student.name}</p>
            <p>Marks :- {student.marks}</p>
            <p>Stream :- {student.stream}</p>
        </div>
        </div>
        </>
    )
}