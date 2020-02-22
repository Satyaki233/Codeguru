import React from 'react'
import '../App.css'
import Bio from './Bio'
import { Link } from 'react-router-dom'
const Intro = ({id})=> {
    return (
        <div className=''>
        <div className='container ' style={{width:'400px'}}>
            <div className='row  mx-4 '>
                 <img className="rounded mx-auto d-block bg-dark Shadow" src={`https://robohash.org/${id}`} alt='intro img'/>
            </div>
            <div className='row mx-auto d-block'>
              <h3 className='text-primary'>
                  this is a DEMO ECOMMERCE WEBSITE created by <br/><strong className='text-danger'>Satyaki De Sarkar</strong>.
                  
              </h3>
              <p>
                  please Login to see the entire website.<br/>
                  <div className='text-success'>We gareyntee you that you will not have any secuarity issue.</div><br/>
                  <div className='text-danger'>All your data will be secure.No personal information will be stored from user.</div>
              </p>
            </div>
            <Link 
            className='btn btn-dark'
            to='Bio'>
              About Me
            </Link>
        </div>
        </div>
        
    )
}

export default Intro;
