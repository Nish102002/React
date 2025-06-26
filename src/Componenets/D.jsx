import React, { useContext } from 'react'
import { data1, data2, data3 } from './A'
function D() {
    const U = useContext(data1)
    const a = useContext(data2)
    const e = useContext(data3)
    return (
        <>

            <div>D component</div>
            <p>Username:- {U}</p>
            <p>Age:- {a} </p>
            <p>Email:- {e}</p>
        </>
    )
}

export default D
