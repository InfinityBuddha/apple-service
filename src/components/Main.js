import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Iphone from './Tabs-iphone'
import Ipad from './Tabs-ipad'

const Main = () => (
  
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/Iphone' component={Iphone}/>
      <Route path='/Ipad' component={Ipad}/>
    </Switch>
  
)

export default Main