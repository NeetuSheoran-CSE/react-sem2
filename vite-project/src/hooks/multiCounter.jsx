import React from 'react'

const multiCounter = () => {
    const[count,setCount]   =  useState([0,0])
  
  const increment=(index)=>{
    //setCount{((prev))}=>console.log(prev,"previous")}
    setCount((prevCount)=>{
      const newCount = [...prevCount]
      console.log(newCount);
      newCount[index] += 1
      return newCount
    })
  }
  return (
    <div>
       {count.map((counter,index)=>(
      <div>
      <h1> count:{counter}</h1>
      <button onClick={()=>increment(index)}>increment</button>
      
    </div>
    ))}
  </div>
  )
}

export default multiCounter
