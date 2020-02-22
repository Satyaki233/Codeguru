import React, { useState, useEffect } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Feeds = () => {
    const id = localStorage.getItem('info-id')
    const username = localStorage.getItem('info-name')
    const email = localStorage.getItem('info-email')
    const [state,setState] = useState({
        feeds:'',       
        submit:false,
        allFeeds:[]
    })

  useEffect(()=>{
      fetch(`${process.env.REACT_APP_API_KEY}/Feeds`,{
          method:'GET',
          headers:{'Content-Type':'application/json'}
      })
      .then(res=>res.json(res))
      .then(data=>{
        
          setState({...state,allFeeds:data})
      })
      .catch(err=>{console.log(err)})
  },[])

    const onSubmit=(e)=>{
        if(state.feeds === ''){
            return alert('please fill the form')
        }
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
          
         setState({...state,submit:true})
         window.location.reload(false)

      })
      .catch(err=>{
          console.log(err)
      })
    }


   
    return (
        <div className='container'>
             <div className='alert alert-warning '>    
                  Please give your comments about your experience...It will help us to make the website much better..
             </div>
             <form className=' bg-dark text-white' style={{margin:'20px',padding:'20px'}}>
                 <div className='form-group'>
                    <h3>username:{username}</h3>
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
             <div  className='mx-auto' style={{display:'block'}}>
                 {
                     state.allFeeds.map(items=>(
                         <div className='card bg-dark text-white my-2'>
                            <div className='card-body'>
                                <h4 className='card-title'>
                                {items.username}
                                </h4>
                                <p className='card-text' >
                                {items.feeds}
                                </p><br/>
                     <p>upload time:{items.joined}</p>

                            </div>                           
                             
                             <br/>
                             
                         </div>   
                     ))
                 }
             </div>
              
        </div>
    )
}

export default Feeds
