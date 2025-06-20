
import React from 'react'

function Greet() {

    let cDate= new Date().toLocaleDateString()
    let ct = new Date().toLocaleTimeString()
    let ctime=new Date().toLocaleTimeString()
    let newstyle ={}
    let greet=""

    if(ctime>=12 && ctime<=16)
    {
        greet="Good Afternoon"
        newstyle.color="red"
        newstyle.fontSize="30px"
        newstyle.fontFamily="Arial"
        newstyle.fontWeight="bold"
    }
    else if(ctime>=17 && ctime<=19)
    {
        greet="Good Evening"
        newstyle.color="Brown"
        newstyle.fontSize="30px"
        newstyle.fontFamily="Arial"
        newstyle.fontWeight="bold"

    }
    else if(ctime>=20 && ctime<=12)
    {
        greet="Good Night"
        newstyle.color="Purple"
        newstyle.fontSize="30px"
        newstyle.fontFamily="Arial"
        newstyle.fontWeight="bold"

    }

    else 
    {
        greet="Good Morning"
        newstyle.color="Purple"
        newstyle.fontSize="30px"
        newstyle.fontFamily="Arial"
        newstyle.fontWeight="bold"

    }
  return (
   <>
   <div style={{width:'700px', height:'250px', margin:'auto',border:'5px solid blue',marginTop:'150px'}}>
   
   <h2 style={{color:'magenta', margin:"auto" , marginTop:"5px"}} className='text-center'>Today's Date:- {cDate} </h2>
  <br></br>

    <h2 style={{color:'magenta', margin:"auto" , marginTop:"5px"}} className='text-center'>Current Date:- {ct} </h2>
  <br></br>
   
   <h3 style={{color:'Bule'}} className='text-center'> Welcome Students,<span style={newstyle}>{greet} </span></h3>


   </div>
   </>
  )
}

export default Greet
