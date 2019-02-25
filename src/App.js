import React, { Component } from 'react'
import Navbar from './Components/Layout/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//import { Switch } from '@material-ui/core'
import Dashboard from './Components/Dashboard/Dashboard'
import ProjectDetails from './Components/Project/ProjectDetails'
import SignIn from './Components/Auth/SignIn'
import SignUp from './Components/Auth/SignUp'
import CreateProject from './Components/Project/CreateProject'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>

    )
  }
}