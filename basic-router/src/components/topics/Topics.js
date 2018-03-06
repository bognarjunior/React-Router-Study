import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import Topic from './../../pages/Topic';

export class Topics extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-8">
                    <Route path={`${this.props.match.url}/:topicId`} component={Topic} />
                    <Route exact path={this.props.match.url} render={() => <h3>Selecione um tópico</h3>}
                    />
                </div>
                <div className="col-sm-4">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <h3>Tópicos</h3>
                        </li>
                        <li className="list-group-item">
                            <Link to={`${this.props.match.url}/rendering`}>Rendering with React</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to={`${this.props.match.url}/components`}>Components</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to={`${this.props.match.url}/props-v-state`}>Props v. State</Link>
                        </li>
                    </ul>
                </div>
               
            </div>
        )
    }
};

export default Topics;
