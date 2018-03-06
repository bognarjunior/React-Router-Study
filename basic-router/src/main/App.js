import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';
import Menu from './Menu';


class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Menu />
                <Routes />
                <footer className="footer">
                    <div className="container">
                        <span className="text-muted">Place sticky footer content here.</span>
                    </div>
                </footer>
            </div>
        </Router>
    );
  }
}

export default App;
