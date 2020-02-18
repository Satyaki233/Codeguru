import React,{useState, Fragment,useEffect} from 'react'
import Layout from './Layout'
import { Redirect ,Link} from 'react-router-dom'
import '../App.css'


const Home = (e)=> {
    
    
     const user = localStorage.getItem('info-name');
      
     const [state ,setState] = useState({
       course :[],
       searchField :''
     })
    
      const [pic,setPic] = useState([]);
      const [search,setSearch] = useState([]);
      
      useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_KEY}/course`,{
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
         
         }).then(res => res.json(res))
         .then( data =>{
          
          setPic( pic =>data )
          if(search.length===0){
            setSearch( search=> data)
          }
         })
      
        
      },[])
     

      

      const onSerach =(e)=>{
         
          
          // console.log(pic[0].title.toLowerCase())
             
            
              const filtercourse = pic.filter(pics =>{
                return pics.title.toLowerCase().includes(e.target.value.toLowerCase())
             })
            
             setSearch( search=>filtercourse )
          
             
          

         
      }
   
   
        return (
          <Fragment>
            <div>
                <Layout title='Home-Page' describtion='This is Home Page'>
                  
                  Welcome: {user}
                 
                </Layout>

                <div>
                  <input className='my-3' 
                  type='text' 
                  placeholder='Search' 
                  style={{ width:'200px', height:'50px' }} 
                  
                  onChange={onSerach}
                  />
                <div >


            <ul className='container-fluid' >
            <div className='whole-body' style={{ overflow : 'scroll' , border:' 5px solid black' ,width : '90vw', height:'100vh' }} >
              {search.map(pics =>(
                <Fragment className='row d-flex flex-column my-2'>

                  <div  className='col-sm-4 mb-3'>
                  <div class="Shadow">
                     <div className='card mb-3'>
                     <div className='card-header bg-warning'>
                             {pics.title}
                          </div>
                     <img className="card-img-top" src={`${process.env.REACT_APP_API_KEY}/${pics.image}`} alt="Card image"/>
                         
                          <div className='card-body'>
                              < p>{pics.price} </p>
                              <p>{pics.intro}</p>
                              <Link className='btn btn-info'  to={`/course/${pics.id}`}>
                                 See course
                              </Link>
                          </div>
                     </div>
                     </div>
                  </div>
                </Fragment>
              ))}
              </div>
            </ul>
                </div>
                
            </div>
            </div>
          
        </Fragment>
        );
    
}

export default Home;
