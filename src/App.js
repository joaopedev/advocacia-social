import React from 'react';
import './App.css';
import Nav from './components/NavBar';
import Header from './components/Hero';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Available Colours:
  // blue, cyan, gray, green, orange, pink, purple, red, teal, yellow

  // edit this variable to change the color theme
  const color = 'grey';

  return (
    <>
      <Nav color={color} />
      <Header color={color} />
      {/* <About color={color} /> */}
      {/* <Experience color={color} /> */}
      {/* <Projects color={color} /> */}
      {/* <Image/> */}
      <Contact color={color} />
      
      <Footer />
    </>
  );
}

export default App;
