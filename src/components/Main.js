import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import iPhone from './Tabs-iphone'
import Ipad from './Tabs-ipad'

const Main = () => (

    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/iphone' component={iPhone}/>
      <Route path='/ipad' component={Ipad}/>
    </Switch>

)

export default Main