// App.js

import React, { Component } from 'react'
import Navbar from './Components/Layout/Navbar'
import Index from './Components/Index'
import {BrowserRouter} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Navbar/>
      </div>
      </BrowserRouter>
  
    )
  }
}