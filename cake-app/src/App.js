import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Cake from './Components/Cake';
import CakeDetail from './Components/CakeDetail'
import API from './API'

class App extends React.Component {

  state = {
    cakes: [],
    selected_cake: null
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

  // SHOWS A FORM FOR ADDING A NEW CAKE
  showCakeForm = () => {
    this.setState({
      addCake: true
    })
    this.clearSelection();
  }

  // REMOVES A SINGLE CAKE FROM BEING "SELECTED" IN STATE
  clearSelection = () => {
    this.setState({
      selected_cake: null
    })
  }

  render() {
  
  return (
    <div className="App">
      <Header title="Cake App"/>
        <div className="main-container">
          <div className="cakes">
            {/* BUTTON ALLOWS USER TO ADD A NEW CAKE */}
            <button onClick={() => this.showCakeForm()}>Add a New Cake</button>
            <h3>Select a Cake</h3>
            {this.state.cakes ? this.state.cakes.map(cake => <Cake cake={cake} selectCake={this.setSelectedCake} key={cake.id}/>) : null}
            <div className="main">
            {/* INSTRUCTS USER TO SELECT A CAKE OR ADD A NEW CAKE  */}
            { !this.state.selected_cake && !this.state.addCake ? <h2>Please select a cake from the menu, or click "Add a New Cake".</h2>
            : null }
            {/* SHOWS A DETAILED VIEW OF THE SELECTED CAKE */}
            {this.state.selected_cake ? <CakeDetail cake={this.state.selected_cake}/>
            : null }
            {/* SHOWS A FORM TO ADD A NEW CAKE */}
            {this.state.addCake ?<CakeForm addCakeToList={this.addCakeToList}/>
            : null }
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  );
}};

export default App;