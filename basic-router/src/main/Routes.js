import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import About from './../pages/About';
import Home from './../pages/Home';

import Topics from './../components/topics/Topics';

export class Routes extends Component {
    render() {
        return (
            <main className="container">
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/topics' component={Topics} />
            </main>
        )
    }
};

export default Routes;
