import React, { createContext } from 'react'
import B from './B'

const data1 = createContext()
const data2 = createContext()
const data3 = createContext()

function A() {
    const uname = "nish"
    const age = 22
    const email = "nish@"
    return (
        <>
            <div>A component</div>
            <data1.Provider value={uname}>
                <data2.Provider value={age}>
                    <data3.Provider value={email}>
                        <B></B>
                    </data3.Provider>
                </data2.Provider>
            </data1.Provider>
        </>
    )
}

export default A
export { data1, data2, data3 }
//provider is inbuilt property
