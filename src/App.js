import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import './App.css';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/home';
import Career from './containers/Career/career';
import Skills from './containers/Skills/skills';
import Examples from './containers/Examples/examples';
import Contact from './containers/Contact/contact';

//Create a main component and use the Router package to create the routing between components.
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
            <Switch>
              <Route path="/career" exact component={Career}/>
              <Route path="/skills" exact component={Skills}/>
              <Route path="/examples" exact component={Examples}/>
              {/* <Route path="/contact" exact component={Contact}/> */}
              <Route path="/" component={Home}/>
            </Switch>
        </Layout>
      </div>
    )
  }
}

export default withRouter(App);
