import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Iphone from './Tabs-iphone'
import Ipad from './Tabs-ipad'

const Main = () => (

    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/iphone' component={Iphone}/>
      <Route path='/ipad' component={Ipad}/>
    </Switch>

)

export default Main