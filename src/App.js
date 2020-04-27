import React, { Component } from "react";
import HomeBuilder from "./Container/HomeBuilder/HomeBuilder";
import UserBuilder from "./Container/UserBuilder/UserBuilder";
import Layout from "./Hoc/Layout/Layout";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/signin" component={UserBuilder} />
            <Route path="/signup" component={UserBuilder} />
            <Route path="/" exact component={HomeBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
