import React from 'react'
import '../App.css'
const Intro = ({id})=> {
    return (
        <div className=''>
        <div className='container '>
            <div className='row  mx-4 '>
                 <img className="rounded mx-auto d-block bg-secondary Shadow" src={`https://robohash.org/${id}`} alt='intro img'/>
            </div>
            <div className='row mx-autu d-block'>
              <h3>
                  this is a portfolio website created by <br/><strong className='text-danger'>Satyaki De Sarkar</strong>.
                  
              </h3>
              <p>
                  please Login to see the entire website.<br/>
                  <div className='text-success'>We gareyntee you that you will not have any secuarity issue.</div><br/>
                  <div className='text-danger'>All your data will be secure.No personal information will be stored from user.</div>
              </p>
            </div>
        </div>
        </div>
        
    )
}

export default Intro;
