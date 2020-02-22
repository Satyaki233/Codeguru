import React from 'react'
import Docs from './Docs'

const Bio = () => {
    return (
        <div>
            <div className='row'>
               <div className='col'>
                 <h1 
                 style={{width:'350px'}}
                 className='alert alert-dark mx-auto my-2'>About Me</h1>
                <div className='view overlay zoom'>   
               <img 
               src={`https://scontent.frdp1-1.fna.fbcdn.net/v/t1.0-9/79690425_581499619089605_3734431079839301632_n.jpg?_nc_cat=105&_nc_ohc=EFDMrTezpRAAX9Wpfsf&_nc_ht=scontent.frdp1-1.fna&oh=d032ca4ba452cb4c859f52e6a25b2386&oe=5EF599F9`} 
               className='rounded-circle bg-dark my-2 img-fluid' alt='pic'
               style={{width:'300px',height:'300px'}}
               />
               <p className='mx-auto'
               style={{width:'400px'}}>
                   Hi..<br/>
                   <h2> I am <strong> Satyaki de Sarkar.</strong></h2>I bulit this Website as a side project in my web dev career.
                   I Devloped this website as solo Devloper.This is a <strong className='text-primary'>DEMO ECOMMERCE WEBSITE.</strong>After watching this 
                   Please make sure You Have visited the website and give feedbacks in feedback section..
               </p>
               <p className='alert alert-success mx-auto' style={{width:'400px'}} >
                   This website is bulit using only JAVASCRIPT..<br/>
                    <ul>
                        <li>Front-End:React.js</li>
                        <li>Back-End:Node.js</li>
                        <li>DataBase:Postgres SQL</li>
                    </ul>
               

               </p>
               </div>
               </div>

               <div className='col'>
                  <div className='mx-auto' style={{width:'420px'}} > 
                    <Docs/>
             
                    </div>
              </div>
            </div>
        
        </div>
    )
}

export default Bio
