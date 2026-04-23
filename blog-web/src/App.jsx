import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Hollywood from './components/Hollywood'
import Bollywood from './components/Bollywood'
import Technology from './components/Technology'
import Food from './components/Food'
import Fitness from './components/Fitness'
import App from './App.jsx'
// import './App.css'
import Navbar from './components/Navbar'
import './Navbar.css'

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>

//     <Navbar/>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/hollywood" element={<Hollywood />} />
//         <Route path="/bollywood" element={<Bollywood />} />
//         <Route path="/technology" element={<Technology />} />
//         <Route path="/food" element={<Food />} />
//         <Route path="/fitness" element={<Fitness />} />


//       </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App



// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/hollywood" element={<h1>Hollywood</h1>} />
        <Route path="/bollywood" element={<h1>Bollywood</h1>} />
        <Route path="/technology" element={<h1>Technology</h1>} />
        <Route path="/food" element={<h1>Food</h1>} />
        <Route path="/fitness" element={<h1>Fitness</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
