import React from 'react';

export class Button extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        <button className = {this.props.style}></button>
        );
    }
}