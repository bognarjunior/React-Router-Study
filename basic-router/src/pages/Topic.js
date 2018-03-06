import React, { Component } from 'react';

export class Topic extends Component {
    
    render() {
        return (
            <div>
                <h1>{this.props.match.params.topicId}</h1>
            </div>
        )
    }
};

export default Topic;
