import React, { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Feeds = () => {
    const id = localStorage.getItem('info-id')
    const username = localStorage.getItem('info-name')
    const email = localStorage.getItem('info-email')
    const [state,setState] = useState({
        feeds:'',
        submit:false
    })



    const onSubmit=(e)=>{
      e.preventDefault()
      fetch(`${process.env.REACT_APP_API_KEY}/Feeds/${id}`,{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({
              username: username,
              email:email,
              feeds:state.feeds
          })
         
      })
      .then(res=>res.json(res))
      .then(data=>{
          console.log(data)
         setState({...state,submit:true})

      })
      .catch(err=>{
          console.log(err)
      })
    }


    if(state.submit){
        return(
            <div className='alert alert-success my-2 mx-auto'>
                 Your feedback Has been recived.
                 please visit <Link to='/Home'>Home</Link> home for more shopping
            </div>
        )
    }
    return (
        <div className='container'>
             <form className=' bg-dark text-white' style={{margin:'20px',padding:'20px'}}>
                 <div className='form-group'>
                 <label><h1>Feeds:</h1></label><br/>
                 <textarea
                 rows="4"
                 type='text'
                 style={{width:'70vw'}}
                onChange={(e)=>{
                  setState({...state,feeds:e.target.value})
                }}
                 >                
                 </textarea>
                 </div>
             
                <button 
                
                className='btn btn-primary'
                onClick={onSubmit}
                >
                    Submit
                </button>
                
             </form>
        </div>
    )
}

export default Feeds
