
import React from 'react'

function Factorail({b}) {
    let f=1
    for(let i=1; i<=parseInt(b); i++){
        f=f*i
    }
  return (
   <>
   <p>Factorail of 7:-{f}</p>
   </>
  )
}

export default Factorail
