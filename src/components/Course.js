import React,{useEffect,useState} from 'react'
import {Link,Redirect} from 'react-router-dom'
import axios from 'axios';
import '../App.css'
const Course = (props) => {
    const [course , setCourse ] = useState({});
    const [add,setAdd] = useState(false);
    

    useEffect(()=>{
        const picsId = props.match.params.id
        
        axios.get(`http://localhost:8080/course/${picsId}`)
        .then(res =>{ 
        
        return setCourse(res.data[0])
        
    })
     },[])
 
    if(!add)
        
        {
            return (
        
    
        <div>
        <div className='jumbotron'>           
            
          <h1> {course.title}</h1><br/>
            <h3>Price : ${course.price}</h3>

        </div>
         <div className='container'>
             <div className='row'>
                 <div className='col-sm-6'>                     
                   <img  
                   className='courseImg' 
                   src={`http://localhost:8080/${course.image}`}
                   style={{width:'300px'}}/>
                 </div>
                 <div className='col-sm-6'>                     
                    
                    <p><h2><strong>Specs:</strong></h2>{course.intro}</p><br/>
                    <button className='btn btn-success m-2' onClick={(e) => {
                        const user = localStorage.getItem('info-id');
                         e.preventDefault();
                         fetch(`${process.env.REACT_APP_API_KEY}/Cart/${course.id}`,{
                          method: 'POST',
                          headers: {'Content-Type': 'application/json'},
                          body: JSON.stringify({
                             userid: user
                             })
                        }).then(res => res.json(res))
                        .then(data => {
                          
                          
                           if(data==='already carted'){
                               alert(`${data}`)
                           }else{
                               alert(`course hass been added`)
                               setAdd( add => true );
                           }
                          
                          })
                       
                        .catch(err =>console.log(err))
                    }} >Add to cart</button>
                    <Link to='/Home' className='btn btn-primary m-4'>
                        Home
                    </Link>
                    </div>

             </div>
             <div className='row container mx-auto' style={{border:'3px solid black'}}>
                 <h1 className='mx-auto alert alert-dark my-2'>Describtion:</h1>
                {course.describtion}
             </div>
         </div>
         
           
         
        </div>
    )}
    else{
        return(
            <Redirect to='/Home'/>
        )
    }
}

export default Course;
