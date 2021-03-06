import React from 'react'
import {BrowserRouter , Switch , Route} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Menu from './components/Menu'
import Course from './components/Course'
import Dashboard from './components/Dashboard'
import Cart from './components/Cart'
import AdminLogin from './components/AdminLogin'
import Bio from './components/Bio'
import Docs from './components/Docs'
import Feeds from './components/Feeds'
import AdminRegister from './components/AdminRegister'
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
            <Route path='/Admin/Login/:password' component={AdminLogin}/>
            <Route path='/Admin/Register/:password' component={AdminRegister}/>
            <Route path='/Bio' component={Bio}/>
            <Route path='/Docs' component={Docs}/>
            <Route path='/Feeds' component={Feeds}/>

        </Switch>
        
        
        </BrowserRouter>
    )
}

export default Routes
