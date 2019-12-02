import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../helpers';
import { HomePage } from '../HomePage';
import { NavBar } from '../components/navbar';

class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            this.props.clearAlerts();
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div>
                <NavBar></NavBar>
                <div className="container-fluid">
                    <div className="col-sm-12">
                        <Router history={history}>
                            <div>
                                <Route path="/" component={HomePage} />
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    return state;
}

const actionCreators = {
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };