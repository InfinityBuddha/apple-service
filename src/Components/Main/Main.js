import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../Home'
import iPhone from '../Tabs/Tabs-iphone'
import Ipad from '../Tabs/Tabs-ipad'
import Catalog from '../Catalog'

const Main = () => (
    <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Home}/>
        <Route path='/iphone' component={iPhone}/>
        <Route path='/iphone-sell' component={Catalog}/>
        <Route path='/ipad' component={Ipad}/>
    </Switch>
)

export default Main