import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        count: 0,
        date: "11/11/2011",
        imageUrl: 'https://picsum.photos/200'
    };

    spanStyle = {
        fontSize: '20px',
        fontWeight: 'bold'
    };
    
    render() { 
        return (
        <React.Fragment>
            <span style={this.spanStyle} className="badge bg-primary m-2">{this.formatCount()}</span>
            <button className='btn btn-secondary m-2'>Increment</button>
            <img className='m-2' src={this.state.imageUrl} alt=''></img>
        </React.Fragment>);
    };

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    };
}