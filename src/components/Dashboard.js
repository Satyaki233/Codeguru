import React,{useState,useEffect} from 'react'
import Layout from './Layout';
import {Link,Redirect} from 'react-router-dom'

 const Dashboard = () => {
   
    const [buy ,setBuy ]= useState([])
    const userid = localStorage.getItem('info-id')
    const user = localStorage.getItem('info-name');
    const email = localStorage.getItem('info-email');
    

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_KEY}/Cart/Buy/${userid}`,{
            method:'GET',
            headers:{'Content-Type':'application/json'}
        }).then(res=>res.json(res))
        .then(data=>{
            console.log(data)
            setBuy( buy=>data)
        })
    },[])

    const shop =() =>{
        if(buy.length === 0){
            return (
                <div className='alert alert-danger mx-auto' style={{width:'400px'}} >
                   You Dont Have Parchase anyrhin Yet..<br/>
                   Please visit <Link to='/Home'>Home</Link>
                </div>
            )
        }else{
            return( <div 
                className='mx-auto'
                style={{width:'365px',height:'500px',overflow:'scroll',border:'5px solid black'}}>
                <table class="table table-striped " >
                    <thead>
                        <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Status</th>
                        <th scope="col">View</th>
                        
                        </tr>
                    </thead>
                                    {
                        buy.map(items=>(
                            <tbody>
                            <tr>
                            
                        <td>{items.title}</td>
                        <td><i class="fas fa-check-circle text-success"></i></td>
                        <td><button className='btn btn-warning'>View Order</button></td>
                         
                            </tr>
                            
                        
                        </tbody>
                        ))
                    }
                    </table>
                    </div>)
           
        }
    }

    if(!localStorage.getItem('info-email')){
        return <Redirect to='/'/>
      }

    return (
        <div>
             <Layout title="Dashboard" describtion="User informations">

            </Layout>
        <div className='row'>
           
            <div className='col'> 

            <img src={`https://robohash.org/${user}`} className='rounded-circle bg-dark' alt='pic'/>
            <h1>Username : {user}</h1><br/>
            <h4>Email :{email}</h4>
            <Link className='btn btn-dark my-2' to='/Bio'>Bio Data</Link><br/>
            <Link className='btn btn-dark my-2' to='/Docs'>Docs</Link>
            <Link className='btn btn-dark my-2' to='/Feeds'>Feedbacks</Link>
            </div>
           <div className='col'>
            <h2> Purchase History</h2>
              {shop()}
           </div>
           
        </div>
        </div>
    )
}

export default Dashboard;
