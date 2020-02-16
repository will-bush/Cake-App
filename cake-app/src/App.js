import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import API from './API'

class App extends React.Component {

  state = {
    cakes: []
  }

  componentDidMount() {
    API.getCakes()
    .then((cakes) => this.setCakes(cakes))
  }

  // SETS AN ARRAY OF CAKES IN STATE
  setCakes = data => {
    this.setState({
      cakes: data
    })
  }

  render() {
  
  return (
    <div className="App">
      <Header title="Cake App"/>
      <Footer/>
    </div>
  );
}};

export default App;