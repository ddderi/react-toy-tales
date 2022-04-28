import React, { Component } from 'react';

class ToyForm extends Component {

  
  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onClick={e=> this.props.handleAddToy(e)}>
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." value={this.props.name} onChange={this.props.handleChange} className="input-text"/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." value={this.props.image} onChange={this.props.handleChange} className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
