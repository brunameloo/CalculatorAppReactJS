import React from 'react'
import './Components/reset.css'
import './App.css'
import Calculator from './Components/Calculator'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return (
    <div className='app-container'>
      <Header />
      <Calculator />
      <Footer />
    </div>

  );
}

export default App;
