import React,{useState,useEffect} from 'react'


const AdOrder = ()=> {
   
    const [order,setOrder]=useState([])
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_KEY}/Cart/Buy`,{
            method:'GET',
            headers:{'Content-Type':'application/json'}
        }).then(res=>res.json(res))
        .then(data=>{
            console.log(data)
            setOrder( order=>data)
        })
    },[])


    return (
        <div>
             <h1>New Orders::</h1>
             <div 
            className='mx-auto'
            style={{width:'90vw',height:'500px',overflow:'scroll',border:'5px solid black'}}>
            <table class="table table-striped " >
                <thead>
                    <tr>
                    <th scope='col'>User</th>    
                    <th scope="col">Title</th>
                    <th scope="col">Status</th>
                    <th scope="col">View</th>
                    
                    </tr>
                </thead>
                                {
                    order.map(items=>(
                        <tbody>
                        <tr>
                    <td>{items.userid}</td>    
                    <td>{items.title}</td>
                    <td><i class="fas fa-check-circle text-success"></i></td>
                    <td><button className='btn btn-warning'>View order</button></td>
                     
                        </tr>
                        
                    
                    </tbody>
                    ))
                }
                </table>
                </div>
           </div>
     
    )
}



export default AdOrder
