import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component{

  state = {
    display: false,
    toys: [],
    name: '',
    image: ''
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

componentDidMount(){
  fetch('http://localhost:3000/toys')
  .then(response => response.json())
  .then(toys => this.setState({toys: toys}))
}

handleAddToy = (e) => {
  e.preventDefault()
  this.setState({
    toys: [...this.state.toys, {name: this.state.name, image: this.state.image}]
  })
}

handleDelete = (e) => {
console.log(e)
const filtered = this.state.toys.filter((elem) => elem.id !== e.id)
this.setState({toys : filtered})

fetch(`http://localhost:3000/toys/${e.id}`, {
  method: 'DELETE',
})
.then(res => res.json())
.then(res => console.log(res))


}

handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}


  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm handleAddToy={this.handleAddToy}
          handleChange={this.handleChange}
          toysNameInput={this.state.name}
          toysImgInput={this.state.image} />
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer handleDelete={this.handleDelete} toys={this.state.toys} />
      </>
    );
  }

}

export default App;
