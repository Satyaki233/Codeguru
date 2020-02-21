import React,{useState,useEffect} from 'react'
import Layout from './Layout';

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

    return (
        <div>
             <Layout title="Dashboard" describtion="User informations">

            </Layout>
        <div className='row'>
           
            <div className='col'> 

            <img src={`https://robohash.org/${user}`} className='rounded-circle bg-dark' alt='pic'/>
            <h1>Username : {user}</h1><br/>
            <h4>Email :{email}</h4>
            </div>
           <div className='col'>
            <h2> Purchase History</h2>
            <div 
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
                    <td><button className='btn btn-warning'>View course</button></td>
                     
                        </tr>
                        
                    
                    </tbody>
                    ))
                }
                </table>
                </div>
           </div>
           
        </div>
        </div>
    )
}

export default Dashboard;
