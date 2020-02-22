import React,{useState} from 'react'
import {Redirect} from 'react-router-dom'
import Intro from './Intro'
import Bio from './Bio'
export default function Register() {
    const [state, setState] = useState({
        username:'',
        email:'',
        password:''
        
    })

    

    const [Log , setLog ] = useState(false)
    const onButtonSubmitLogin = (e) => {
        e.preventDefault();
        if(state.email === '' || state.password === ''){
            return alert('Please fill the form')
        }
        fetch(`${process.env.REACT_APP_API_KEY}/User/register`,{
         method: 'POST',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify({
             username:state.username,
             email:state.email,
             password:state.password
         })
        }).then(res => res.json(res))
          .then(data => {
              
             if(data === 'wrong password'){
                 console.log(' Check password')
                 alert('Check password')
             }
              if(typeof window !== 'undefined'){
                  localStorage.setItem('info-name',(data.username))
                  localStorage.setItem('info-email',(data.email))
                  localStorage.setItem('info-id',(data.id))
                  setLog( Log => true)
              }
            })
         
          .catch(err =>console.log(err))
        
    }

    
    if(!Log){
        return (
            <div>
                 <div>
                     <h1 className='alert alert-dark '>
                         PHONE-HUB
                     </h1>
                 </div>
            <div className='row'>
                <div className='col-md-6'>
                
                <Intro id='2'/>
                </div>
                <div className='col-md-6'>
                <form className='formlayout'>
                 
                 <h2>Register</h2>
                
                 <div className='form-group'>
                    <label>Username:</label><br/>
                    <input className='form-control' 
                    type='text'
                   name='text'
                   value={state.username}
                   onChange={(e)=>setState({...state,username:e.target.value})}
                   required/>
                 </div>
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
                
                 
            </div>
           
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
