import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FavForm from './FavForm';
import FavList from './FavList';

class App extends Component {
    render() {
        return (
            <div>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
                <div className="ui container">
                    <FavForm></FavForm>
                    <FavList></FavList>
                </div>
            </div>
        );
    }
}

export default App;
