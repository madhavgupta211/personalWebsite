import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import Home from './homeComponent/homeComponent';

class Main extends Component {
  render() {
    return(
      <Switch>
        <Route path = "/" component = {Home} />
      </Switch>
    );
}
}

export default withRouter(Main);