import React from 'react'

const Child = ({name,alert}) => {
  return (
    <>
    <div>Child data name:{name}</div>
    <button onClick={alert}>click me</button>
    </>
  )
}

export default Child
