import React from 'react'
import {Link , withRouter } from 'react-router-dom'


const isActive =(history,path)=>{
    if(history.location.pathname === path){
        return {color: '#fff'}
    }else{
       return { color :'#000'}
    }
 }


const Admenu = ({history}) => {
    return (
        <div className=''>
             <ul className='nav nav-tab bg-warning '>
               <li className='col-3 nav-items'>
                   <Link className='nav-link' style={isActive(history,'/AdUser')} to='/AdUser' >Aduser</Link>
               </li>
               
               <li className='col-3 nav-items'>
                   <Link className='nav-link' style={isActive(history,'/AdCourse')} to='/AdCourse'>AdCourse</Link>
               </li>
               </ul>
        </div>
    )
}

export default withRouter(Admenu)
