import React, { Component } from "react";
import './AddItems.css';

class AddItems extends Component {
    state = {
        name : '',
        hours : ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if(e.target.name.value !== '') {
            this.props.AddItem(this.state)
            this.setState({
                name : '',
                hours : ''
            })
        }
    }
    
    render() {
        return (
            <form className="addItems" onSubmit={this.handleSubmit}>
                <input id="name" type="text" placeholder="Enter Todo ..." onChange={this.handleChange} value={this.state.name} />
                <input id="hours" type="number" placeholder="Enter Hours ..." onChange={this.handleChange} value={this.state.hours} />
                <input type="submit" value="Add" />
            </form>
        )
    }
}

export default AddItems;
