import React, { Suspense } from 'react'
const lazycomp=React.lazy(()=>import('./components/Emp1'))

function LazyComp() {
  return (
    <>
    <div>
        <h1>Learning Lazy Loading Component</h1>
      <Suspense fallback={<div>Loading.....</div>}>
         <lazycomp></lazycomp>
      </Suspense>
    </div>
    </>
  )
}

export default LazyComp
