import React from "react";

import { SideBar } from "./view-components/SideBar";
import { Route } from 'react-router-dom';

import Home from './views/Home'
import About from './views/About'
import CanDo from './views/WhatICanDO'
import Contacts from './views/Contacts'

class App extends React.Component {

  componentDidMount() {
    document.body.style.backgroundColor = "rgb(42, 42, 42)";
  }
  
  render() {
    return (
      <div>
        <SideBar />
        <Route exact path="/">
          <Home />
          <About />
          <CanDo />
        </Route>
        <Route exact path="/contacts" component={Contacts} />
      </div>
    )
  }
}

export default App;
