import React, {useState, useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css';
import { AppContext } from './contexts/context';

import Home from  './components/Home'
import Movie from './components/SingleMovie'

function App() {
  const {title} = useContext(AppContext)
  
  return (
    <Switch>
      <Route path='/' exact>
        <Home/>
      </Route>
      <Route path='/movies/:id' children={<Movie/>}/>
    </Switch>
  )
}

export default App;