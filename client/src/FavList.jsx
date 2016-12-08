import React, { Component } from 'react';
import Fav from './Fav';
import ApiClient from './ApiClient';

class FavList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favs : []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    ApiClient.readAll( favs => this.setState({favs:favs}))
  }

  handleChange(key) {
    return function(event) {
    }
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="ui list">
          {this.state.favs.map( fav => <Fav key={fav.id} name={fav.name} url={fav.url}/>)}
      </div>
    );
  }
}

export default FavList;
