import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Cake from './Components/Cake';
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

   // SETS A SINGLE CAKE AS BEING "SELECTED" IN STATE
   setSelectedCake = cake => {
    this.setState({
      selected_cake: cake,
      addCake: false
    })
  }

  render() {
  
  return (
    <div className="App">
      <Header title="Cake App"/>
        <div className="main-container">
          <div className="cakes">
            <h3>Select a Cake</h3>
            {this.state.cakes ? this.state.cakes.map(cake => <Cake cake={cake} selectCake={this.setSelectedCake} key={cake.id}/>) : null}
          </div>
        </div>
      <Footer/>
    </div>
  );
}};

export default App;