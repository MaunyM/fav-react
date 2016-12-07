import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FavForm from './FavForm';

class App extends Component {
    render() {
        return (
            <div>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
                <div className="ui container">
                    <FavForm></FavForm>
                </div>
            </div>
        );
    }
}

export default App;
