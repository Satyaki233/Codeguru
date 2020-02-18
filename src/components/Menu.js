import React, { Fragment } from 'react'
import {Link , withRouter} from 'react-router-dom'


const isActive =(history,path)=>{
    if(history.location.pathname === path){
        return {color: '#e8c413'}
    }else{
       return { color :'#fff'}
    }
 }




const Menu = ({history}) =>{

    if(localStorage.getItem('info-email')){
        return(
            <Fragment className='container-fluid'>
            <ul className='nav nav-tab bg-dark '>
            
              <li className='col-3 nav-items'>
              
                   <Link className='nav-link' style={isActive(history,'/Home')} to='/Home'><i class="fas fa-home mr-1"></i>Home</Link>
               </li>
               <li className='col-3 nav-items'>
                   <Link className='nav-link' style={isActive(history,'/Dashboard')} to='/Dashboard'><i class="fas fa-smile mr-1"></i>Dash</Link>
               </li>
               <li className='col-3 nav-items'>
                   <Link className='nav-link' style={isActive(history,'/Cart')} to='/Cart'><i class="fas fa-shopping-cart mr-1"></i>Cart</Link>
               </li>
               <li className='col-3 nav-items'>
                  <span className='nav-link'
                    style={{ corsur:"pointer", color :"#ffffff"}}
                     onClick={()=>{
                         if(typeof window !== 'undefined'){
                            localStorage.removeItem('info-name')
                            localStorage.removeItem('info-email')
                            localStorage.removeItem('info-id')
                            history.push('/');
                         }
                     }}
                  >
               <i class="fas fa-door-open mr-1"></i>
                      Logout
                  </span>
                  
               </li>
              
               </ul>
            </Fragment>
        )
    }


    return (
        <div>
           <ul className='nav nav-tab bg-dark '>
               <li className='nav-items'>
                   <Link className='nav-link' style={isActive(history,'/')} to='/' >Login</Link>
               </li>
               
               <li className='nav-items'>
                   <Link className='nav-link' style={isActive(history,'/Register')} to='/Register'>Register</Link>
               </li>
              
           </ul>
        </div>
    )
}

export default withRouter(Menu);