import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import './App.css';
import Layout from './containers/Layout/Layout';
import Home from './containers/Home/home';
import Career from './containers/Career/career';
import Skills from './containers/Skills/skills';
import Examples from './containers/Examples/examples';
import exampBurgerBuilder from './components/Example/ExampleDetails/BurgerBuilder';
import Contact from './containers/Contact/contact';
import NotFound from './components/404/404';

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
              <Route path="/examples/burgerbuilder" exact component={exampBurgerBuilder}/>
              <Route path="/contact" exact component={Contact}/>
              <Route path="/" exact component={Home}/>
              <Route path="/*" exact component={NotFound}/>
            </Switch>
        </Layout>
      </div>
    )
  }
}

export default withRouter(App);
