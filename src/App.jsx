import { Component, useState } from "react"
import StateEx from "./Componenets/StateEx"
import Calculator from "./Componenets/Calculator"
import FormStu from "./Componenets/FormStu"
import Operation from "./Componenets/Operation"
import Greet from "./Componenets/Greet"
import ObjectState from "./Componenets/ObjectState"
import StateExamples from "./Componenets/StateExamples"
import ConditionalRender from "./Componenets/ConditionalRender"
import Clock from "./Componenets/Clock"




function App()
{

  var [a,setA]=useState(2)

  function increment(){
    if(a<10){
    setA(a+1)
    }
    else{
      alert("You cant excced")
      setA(0)
    }
  }
  function decrement(){
    if(a>0){
    setA(a-1)
    console.log(a)
    }else{
      alert("you cant decrese")
    }
  }
  function fact(){
    let f=1
    for(let i=1; i<=a; i++){
        f=f*i
    }
    setA(f)
  }
  function cube(){
    setA(a*a*a)
  }
  function square(){
    setA(a*a)
  }
  return(
    <>
    <div className="text-center mt-3">
    <br></br>
    <h3>{a}</h3>
    <div className="btn btn-outline-primary" onClick={increment}>increment A</div>
    <br></br><br></br>
        <div className="btn btn-outline-primary" onClick={decrement}>decrement A</div>
        <br></br><br></br>
         <div className="btn btn-outline-primary" onClick={fact}>fact A</div>
         <br></br><br></br>
          <div className="btn btn-outline-primary" onClick={cube}>cube A</div>
          <br></br><br></br>
          <div className="btn btn-outline-primary" onClick={square}>square A</div>
    </div>
    <Greet></Greet>
    <Calculator></Calculator>
    <FormStu></FormStu>
    <Operation></Operation>
    <ObjectState></ObjectState>
    <StateExamples></StateExamples>
    <ConditionalRender></ConditionalRender>
    <Clock></Clock>
    {/* <StateEx></StateEx> */}
    </>
  )
}
export default App

//app-predefined Component---root Component
//fragment ek hi hota hai 
//fragment ek undar ek aur fragment bana skte hain
//component name should be same as file name this rule is applicable to all file 
//command to start programme is npm run dev
//inedx.html 2.main 3.app.jsx 4.first
//all tags have closing tags
//object in java script syntax = let newstyle={
    //     color:'blue',
    //     fontFamily:'Arial',
    //     textTransform:'uppercase',
    //     textAlign:'center'
    // }
// import './index.css' .- meaning from currentt working directory 
// three styles of applying css 1.inline css, 2.css from object,3.external css
// jsx=js+html 
// return (
//  jsx-- HTML +{}-->expression to write js in html
//    )
// babel--> js compiler JSX->js 
// chrome mein ek engine hain v8 engine 

//single element is render to browser in react
//<> --> react fargment
// render is component lifecycle method

// class base component
//export default class Third extends Comment
// {
//     //constructor 
//     render()
//     {
//         // js part
//         return(
//             <>
//          //jsx
//             </>
//         )
//     }
// }

// object has key value structure
//object calling in jsx = student.roll where student is object ang roll is key 

//Array in js can contain hectrogenous elements
//loops in js = for of--- array 
//              for in--- objects
//              forEach--- array+object(array)
//              map--- transformation and iterate---HOF (higher order function)
// arr.map((variable e)=>{
//    console.log(e)
//   })

//Array of objects ->
//let studentinfo=[
//{
//   object 1
//},
//{
//   object 2
//},
//{
//   object 3
//}
// ]

// studentinfo.map((e)=>{
//console.log(e)
//console.log(e.name)
//  })

//interview question
// Q1.What is React Js?
// Q2.What are Components? and explain types of components?
// Q3.How to write class based and functional based components
// Q4.What is JSX?
// Q5.How write javascript within jsx which syntax will be used for this?
// Q6.What is map function and how to iterate array or array of objects throuh map function?
// Q7.Explain folder structre of react project?
// Q8.Explain React js features?
// Q9.Explain difference between package.json and package.lock.json File
// Q10.What is render method od class based Component?
// Q11.What are props?
// Q12.How tto pass data from parent comp to child comp using props.write one example
// Q13.How to render Array or Array of objects using map
// Q14.Explain Virtual DOM in react
// Q15.What is map and filter
// Q16.What is array destructuring
// Q17.How to define props in react app
// Q18.What are features of react
// Q19.What is state?How to create state using useState hook
// Q20.What is difference between state & props?
// Q21.How do you pass data between components?
// Q21.Exxplain event.target.value
// Q22.Explain Event handling in react
// Q23.What is the use of useState hook


//filter is always writeen in js because wo array deta hai aur us array ko render karne ke liye map lagta hai

//props-proprties are immutable cant change
// use to send data  from parent comp to child comp
// app is parent comp home is child comp
// react mein one way binding hain means data one way hi transfer hoga from parent comp to child comp not in reverse child to parent 
//props as a callback se hum child se parent mein data transfer kar skte hain
//child comp can not change the value of props

//function PropsDemo({name,age,city}) curly bracket means array destructuring  

//State:- it is built in react object
//        it helps to hold dynamic data of components 
//        When state will update then component will rerender on UI with reflect new changes
//        states are updated asynchronus 
//        in class based component state is used as setstate method and in functional based component state are used using Hooks
//        state can be modified .states are mutable
//        state is always associated with a  only one component
//        each component has own state
//        class based component has internal state
//        state can not be updated directly

//Hooks:- const[state name,function]=useState(intial value of state)
// ex= cont[a,setA]=useState()

//state update hua to return browser mein reload hota hain but only new changes

// Virtual Dom:- DOM (Document Object Model) is the structure of your webpage. It represents the HTML elements in a tree-like form.
//Problem with real Dom:- When something changes in the webpage (like a button click or typing), the real DOM updates – but it’s slow, especially if the page is large.
// If this changes to Count: 1, the whole DOM might get checked, even for small changes.
// The Virtual DOM (V-DOM) is a lightweight JavaScript copy of the real DOM.
// React uses it to:
// Keep a copy of the DOM in memory.
// When a change happens, React:
// Updates the virtual DOM first.
// Compares (diffs) old virtual DOM and new virtual DOM.
// Finds only the changed parts.
// Updates only those parts in the real DOM.
// This process is called Reconciliation.

// Real-Life Analogy
// Think of it like writing on a whiteboard:
// Instead of erasing and rewriting everything,
// You look at the old version,
// Only update the changed word or number.
// Faster and easier.

//function inputHandler(e){
//        let text=e.target.value
//        setfno(text)
//        //setfno(e.target.value)
//    } e is the event

// const inputHandler=(e)=>{
//   let text=e.target.value
//   setfno(text)
// } arow function

//<td><input type="text" name="fno" value="fno" onChange={(e)=>setfno(e.target.value)}></input></td>
//it is shortcut there is  no need of inputHandler function
//&nbsp is for space

//event.target.value
//each function in react have arguement which is event
//event is a internal arguement works on onchange means 
// target specify on which particular text box it is working on
//value textbox ka value 

//Object State
//setuser({user,[name]:value})
//only store updated value
//three dots are use before
//setuser({...user,[name]:value})
//this three dots stores all the data
//it is spread operator
