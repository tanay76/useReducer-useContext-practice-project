import React from "react";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Home from "./components/Home";
import { Switch, Route, Redirect } from "react-router";

function App() {

  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/admin'>
          <Redirect to='/' />
        </Route>
        {/* Remember that in actual application when not logged in, '/' & '/login' would be the same page */}
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
