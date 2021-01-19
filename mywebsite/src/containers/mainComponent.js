import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import Home from './homeComponent/homeComponent';
import Header from './headerComponent/headerComponent';

class Main extends Component {
  render() {
    return(
      <div>
        <Header />
        <Switch>
          <Route path = "/" component = {Home} />
        </Switch>
      </div>
    );
}
}

export default withRouter(Main);