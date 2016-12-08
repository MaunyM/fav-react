import React, {Component} from 'react';

class Fav extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(key) {
        return function(event) {}
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <a className="item" href={this.props.url}>
                <div className="content">
                    <div className="header">{this.props.name}</div>
                    <a className="description" >{this.props.url}</a>
                </div>
            </a>
        );
    }
}

export default Fav;
