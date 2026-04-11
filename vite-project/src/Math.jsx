import React from 'react'

function App(){
  return (
    <div>
      <h1>first component {Sum()}</h1>
      <Fruit />
      
      </div>
  )
}
 
function Fruit(){
  return(
    <h1>fruit component</h1>
  )
}
 function Sum(){
  return 10+10;
 }
export default App


