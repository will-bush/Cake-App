import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import API from './API'

function App() {
  return (
    <div className="App">
      <Header title="Cake App"/>
      <Footer/>
    </div>
  );
}

export default App;
