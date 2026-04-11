import React from 'react'
import Child from './Child';

const Parent = () => {

  const fullname="ram";
  function Alert(){
    alert("hello")
  }


  return (
    <>
    <div> Parent</div>
    <h1>Rendered in parent comp:{fullname}</h1>
    <Child name={fullname} alert={Alert} />
    </>
  )
}

export default Parent
