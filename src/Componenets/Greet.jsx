
import React from 'react'

function Greet() {

    let cDate= new Date().toLocaleDateString()
    let ctime=new Date(2025,4,5,24).getHours()
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
   <div style={{width:'700px', height:'500px', margin:'auto',border:'5px solid blue',alignItems:'center',display:'flex',marginTop:'150px'}}>
   
   <h2 style={{color:'magenta',marginLeft:'40px'}}>Today's Date:- {cDate} </h2>
  <br></br>
   
   <h3 style={{color:'Bule',margin:'200px',marginRight:'0px'}}> Welcome Students,<span style={newstyle}>{greet} </span></h3>


   </div>
   </>
  )
}

export default Greet
