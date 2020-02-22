import React,{useState, useEffect} from 'react'
import {Link, Redirect} from 'react-router-dom'
const axios = require('axios');

const AdCourse = (e) => {
    const [course,setCourse]= useState([]);
    const [drop, setDrop ] = useState(false)
    




    useEffect(()=>{
           fetch(`${process.env.REACT_APP_API_KEY}/course`,{
               methode:'GET',
               headers: {'Content-Type':'application/json'},

           }).then(res=>res.json(res))
           .then(data =>{
               console.log(data)
               setCourse( course=> data);
           })
    },[])

    if(!drop)
    {return (
        <div className='container-fluid'>
             <div><Link className='btn btn-primary my-3' to='/AdNewCourse'>Add New course</Link></div> 
             <div className='mx-auto' style={{ overflow : 'scroll' , border:' 5px solid black' ,width : '95vw', height:'100vh' }}>
            <table class="table" >
            <thead className='bg-dark text-white'>
                <tr>
                
                <th scope="col-3">id</th>
                <th scope="col-3">title</th>
                <th scope="col-3">intro</th>
                <th scope="col-3">price</th>
                <th scope='col-3'>image</th>
                <th scope='col-3'>Describtion</th>
                <th scope='col-3'>Delete</th>
                <th scope='col-3'>Upadte</th>
                </tr>
            </thead>
            {
                course.map(items=>(
                    <tbody>
                    <tr>
                    
                <td>{items.id}</td>
                <td>{items.title}</td>
                <td>{items.intro}</td>
                <td>${items.price}</td>
                <td><img className='img-thumbnail' src={`${process.env.REACT_APP_API_KEY}/${items.image}`} alt='pic'/></td>
                <td>{items.describtion}</td>
                <td><button
                 className='btn btn-danger'
                 onClick={(e)=>{
                    // return fetch(`${process.env.REACT_APP_API_KEY}/course/${items.id}`,{
                    // methode:"delete"                    

                    // })
                    axios.delete(`${process.env.REACT_APP_API_KEY}/course/${items.id}`)
                    
                    .then(data =>{
                     alert(`you will be redirected to Home page .`) 
                     alert(`login again to see adcourse`)
                      setDrop(drop=>true)
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                 }}
                  >Drop</button></td>
                  <td><Link 
                  to={`AdUpdateCourse/${items.id}`}
                  className='btn btn-warning' >Edit</Link></td>
                    </tr>
                
                </tbody>
                ))
            }
            
            </table>
            </div>
                    </div>
    )}
    else{
        return(
            <Redirect to='/Home'/>    
            )
    }
}

export default AdCourse
