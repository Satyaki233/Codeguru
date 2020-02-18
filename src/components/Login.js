import React,{useState} from 'react'
import {Redirect} from 'react-router-dom'
import Intro from './Intro'
import '../App.css'

export default function Login() {
    const [state, setState] = useState({
        email:'',
        password:''
        
    })

    const [Log , setLog ] = useState(false)
    const onButtonSubmitLogin = (e) => {
        e.preventDefault();
        fetch(`${process.env.REACT_APP_API_KEY}/User/login`,{
         method: 'POST',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify({
            
             email:state.email,
             password:state.password
         })
        }).then(res => res.json(res))
          .then(data => {
              
             if(data === 'wrong password'){
                 console.log(' Check password')
                 alert('Check password')
             }
             else{
                 if(typeof window !== 'undefined'){
                  localStorage.setItem('info-name',(data.username))
                  localStorage.setItem('info-email',(data.email))
                  localStorage.setItem('info-id',(data.id))
                  setLog( Log => true)
              }}
            })
         
          .catch(err =>console.log(err))
        
    }

   

    if(!Log){
        return (
            <div className='row'>
                <div className='col-md-6 '>
                    <h1>
                      Aboute me 
                      </h1> 
                      <Intro id='1'/>   
                    
                </div>
                <div className='col-md-6'>
                <form className='formlayout'>
                 
                 <h2>Login</h2>
                
                 <div className='form-group'>
                    <label>Email:</label><br/>
                    <input className='form-control' 
                    type='email'
                   name='email'
                   value={state.email}
                   onChange={(e)=>setState({...state,email:e.target.value})}
                   required/>
                 </div>
                 <div className='form-group'>
                    <label>Password:</label><br/>
                    <input className='form-control' 
                    type='password' 
                    name='password' 
                    value={state.password}
                   onChange={(e)=>setState({...state,password:e.target.value})}
                    required/>
                 </div>
                 <input className='btn btn-primary' 
                 type='submit' 
                 name='submit'
                 onClick={onButtonSubmitLogin}
                 />
             </form>
                </div>
                 
                   {/* <h1> {JSON.stringify({
                    
                    email:state.email,
                    password:state.password
                })}<br/>
                
                
                
                </h1> */}
            </div>
        )
    }
    else{
        return(
            <div>
                 <Redirect to='/Home'/>
            </div>
        )
    }
   
}
