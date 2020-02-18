import React from 'react'

 const Dashboard = () => {


    const user = localStorage.getItem('info-name');
    const email = localStorage.getItem('info-email');
   

    return (
        <div>
            <h1>Username : {user}</h1><br/>
            <h4>Email :{email}</h4>
        </div>
    )
}

export default Dashboard;
