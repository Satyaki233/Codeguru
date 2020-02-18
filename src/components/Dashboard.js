import React from 'react'
import Layout from './Layout';

 const Dashboard = () => {


    const user = localStorage.getItem('info-name');
    const email = localStorage.getItem('info-email');
   

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
             Purchase History
           </div>
           
        </div>
        </div>
    )
}

export default Dashboard;
