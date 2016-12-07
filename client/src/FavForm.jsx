import React, { Component } from 'react';
import ApiClient from './ApiClient';

class FavForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name : '',
      url : ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(key) {
    return function(event) {
      var state = {};
      state[key] = event.target.value;
      this.setState(state);
    }.bind(this);
  }

  handleSubmit(event) {
    ApiClient.add(this.state)
    event.preventDefault();
  }

  render() {
    return (
    <form action="" className="ui form" onSubmit={this.handleSubmit}>
      <div className="inline fields">
        <div className="field">
          <input id="nameFav" value={this.state.name} type="text" placeholder="Nom" onChange={this.handleChange('name')}/>
        </div>
        <div className="field">
          <input id="urlFav" value={this.state.url} type="text" placeholder="Adresse" onChange={this.handleChange('url')}/>
        </div>
      <button className="ui button" type="submit">Ajouter</button>
      </div>
    </form>
    );
  }
}

export default FavForm;
