import React,{useEffect,useState} from 'react'

const AdminRegister = (props) => {
    const adpass = props.match.params.password
    const user = localStorage.getItem('info-name')
    const email = localStorage.getItem('info-email')
    const [admin,setAdmin]= useState(false)
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_KEY}/Admin/`,{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username:user,
                email:email,
                password: adpass
               
            })
           })
           .then(res => res.json(res))
           .then(data =>{
              
                setAdmin( admin => true)
           })
           .catch(err =>{
               console.log(err)
           })
    },[])
    
    if(admin){
        return (
            <div className='alert alert-success'> 
                 You have become an admin.
                 <br/> Login to admin panel to use admin sections
            </div>
        )
    }
    else{
        return(
            <div className='alert alert-danger my-2'>
                <h1>Not Found</h1>
            </div>
        )
    }
    
}

export default AdminRegister
