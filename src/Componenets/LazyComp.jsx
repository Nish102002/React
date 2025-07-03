import React, { Suspense } from 'react'
const lazy1=React.lazy(()=>import('./Emp1'))

function LazyComp() {
  return (
    <>
    <div>
        <h1>Learning Lazy Loading Component</h1>
      <Suspense fallback={<div>Loading.....</div>}>
         <lazy1></lazy1>
      </Suspense>
    </div>
    </>
  )
}

export default LazyComp
