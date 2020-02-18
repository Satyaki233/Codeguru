import React from 'react'
import {BrowserRouter , Switch , Route} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Menu from './components/Menu'
import Course from './components/Course'
import Dashboard from './components/Dashboard'
import Cart from './components/Cart'
import Admin from './components/Admin'
function Routes() {
    return (
        <BrowserRouter>
         <Menu/>
        <Switch>
            <Route path='/Home' exact component={Home}/>
            <Route path='/' exact component={Login}/>
            <Route path='/Register' exact component={Register}/>
            <Route path='/Dashboard' exact component={Dashboard}/>
            <Route path='/course/:id' component={Course}/>
            <Route path='/Cart' component={Cart}/>
            <Route path='/Admin/:password' component={Admin}/>

        </Switch>
        
        
        </BrowserRouter>
    )
}

export default Routes
