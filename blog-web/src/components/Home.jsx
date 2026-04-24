import React from 'react'
import Data from '../Data'

const Home = () => {
  const HomeData = Data.filter((item) => item.category === "Home")
  console.log(HomeData)
  return (
    <>
    <div></div>
    {HomeData.map((homedata)=>(
      <>
      <h1>{homedata.title}</h1> 
      <img src={homedata.img_url}/>
      </>
    ))}
    </>
  )
}

export default Home
