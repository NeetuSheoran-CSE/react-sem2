


// // function App() {
// //   const name="react";
// //   let x=10;
// //   let y=20;
// //   function fruit(){
// //     return "apple"
// //   }
// //   function sum(a,b){
// //     return a+b;
// //   }
// //   return(
// //     <div>
// //       <h1>JSX with Curly Braces</h1>
// //       <h1>{name}</h1>
// //       <h1>{x+y}</h1>
// //       <h1>{fruit()}</h1>
// //       <h1>{sum(10,20)}</h1>
// //     </div>
// //   )

// // }




// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <HeroSection />
//       <Features />
//       <Testimonials />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from 'react';
// import './styles/style.css';
// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import Features from './components/Features';
// import Testimonials from './components/Testimonials';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <HeroSection />
//       <Features />
//       <Testimonials />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import Parent from "./props/Parent";
import Ifelse from './ConditionalRendering/Ifelse';
// import Ternary from './ConditionalRendering/Ternary';
import UseStateone from './hooks/UseStateone';
function App(){
  return(
    <>
    <Parent/>
    <Ifelse/>
    {/* <Ternary/> */}
    <UseStateone/>
    </>
  );
}
export default App





// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import Features from './components/Features';
// import Testimonials from './components/Testimonials';
// import Footer from './components/Footer';
// import './styles/style.css';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <HeroSection />
//       <Features />
//       <Testimonials />
//       <Footer />
//     </div>
//   );
// }

// export default App;
