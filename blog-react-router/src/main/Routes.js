import React, {Component} from 'react';
import {
    Route, Switch
} from 'react-router-dom';

import About from './../components/About';
import Home from './../components/Home';
import Contact from './../components/Contact';
import Blog from './../components/Blog';
import NoMatch from './../components/NoMatch';

export class Routes extends Component {
    render() {
        return (
            <main className="container">
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/contact' component={Contact}/>
                <Route path='/blog' component={Blog}/>
                <Route component={NoMatch}/>
                </Switch>
            </main>
        )
    }
};

export default Routes;
