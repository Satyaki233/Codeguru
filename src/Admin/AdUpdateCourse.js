import React,{useEffect,useState} from 'react'
import {Redirect,Link} from 'react-router-dom'

const AdUpdateCourse = (props) => {
    const[state,setState]= useState({
        title:'',
        intro:'',        
        price:'',
        image:null,
        describtion:''
    })

    const [add ,setAdd ] = useState(false);



   
    const id=props.match.params.id
    

    const onButtonSubmit = (e) => {
        e.preventDefault();
       
        const data= new FormData();
        data.append('title',state.title);
        data.append('intro',state.intro)
        data.append('image', state.image, state.image.name)
        data.append('price',state.price)
        data.append('describtion',state.describtion);
        fetch(`${process.env.REACT_APP_API_KEY}/course/${id}`,{
         method: 'PUT',         
         body:data             
         })
        .then(res => res.json(res))
        .then(data=>{
            console.log(data)
            setAdd( add => true)
        })
        .catch(err=>{
            console.log(err)

        })

        
    }

    

    if(!add){
return (
        <div>
            <form className='formlayout mx-auto' encType='multipart/form-data'>
            <div class="form-group">
                <label >Product Title</label>
                <input type="text"
                 className="form-control" 
                 name='title' 
                 value={state.title} 
                 onChange={(e)=>setState({...state,title:e.target.value})}
                 />
            </div>
            <div class="form-group">
                <label >Intro</label>
                <textarea 
                 type='text'  
                 rows="3"  
                className="form-control" 
                name='intro'  
                value={state.intro}
                onChange={(e)=>setState({...state,intro:e.target.value})}
                ></textarea>
            </div>
            <div class="form-group">
                <label >Image</label>
                <input type="file" 
                className="form-control" 
                name='image'  
                
                onChange={(e)=>{
                    
                    setState({
                        ...state,image:e.target.files[0]
                          
                    })
                   
                
                }}
                />
            </div>
            <div class="form-group">
                <label >Price</label>
                <input type="text" 
                className="form-control" 
                name='price'   
                value={state.price}
                onChange={(e)=>setState({
                    ...state,price:e.target.value
                       
                })}
                />
            </div>
            <div class="form-group">
                <label>textarea</label>
                <textarea className="form-control" 
                type='text'  
                rows="3"  
                value={state.describtion}
                onChange={(e)=>setState({...state,describtion:e.target.value})}
                ></textarea>
            </div>
            <button className='btn btn-primary' 
             onClick={onButtonSubmit}
            >Submit
            </button>
            </form>
                    
        </div>
        
    )
    }
    else{
        return(
          <Redirect to='/AdCourse'/>
   
            )
    }
    
}


export default AdUpdateCourse;
