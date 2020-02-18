import React,{useEffect,useState} from 'react'

const Cart = () => {
	
	var i=0;
	const [cart,setCart] = useState([]);
	const [count,setCount] =useState(1);

	cart.map(items=>{
		i=i+items.price;
	})
	useEffect(()=>{
		const user = localStorage.getItem('info-id')
		fetch(`${process.env.REACT_APP_API_KEY}/Cart`,{
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
			   userid: user
			   })
		  }).then(res => res.json(res))
		  .then(data => {
			
		   
			setCart( cart =>data)
			
			})
		 
		  .catch(err =>console.log(err))
		 
	
	  
	},[])


	return (
		<div className='container-fluid' style={{ overflow : 'scroll' , border:' 5px solid black' ,width : '90vw', height:'100vh' }} >
	      <table class="table">
  <thead className='bg-dark text-white'>
    <tr>
      
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      
	  <th scope="col">Drop</th>
    </tr>
  </thead>
  {
	  cart.map(items=>(
		<tbody>
		<tr>
		 
	  <td>{items.title}</td>
	  <td>${items.price}</td>
	  {/* <td>
		  <button 
		  className='mr-1'
		//   onClick={()=>{setCount(count +1)}} 
		  >+</button>
		  {count}
		  <button 
		  className='ml-1'
		//   onClick={()=>{setCount(count -1)}}
		  >-</button>
	  </td> */}
	  <td><button 
	  className='btn btn-danger'
	  onClick={(e)=>{
		const user1 = localStorage.getItem('info-id')
		fetch(`${process.env.REACT_APP_API_KEY}/Cart/delete/${items.courseid}`,{
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
			   userid: user1
			   })
		  }).then(res => res.json(res))
		  .then(data =>{
			  console.log(data)
		  })
		
	  }}
	  >Drop</button></td>
		</tr>
		
	   
	  </tbody>
	  ))
  }
 
</table>
       <h2> <strong>Total price :</strong>
	   ${
		   i
	   }
		</h2>
		</div>
	)
}

export default Cart;

     
// {  
	     
// 	cart.map(items =>(
// 		<div>
	
// 	<td className='col-lg-4'>{items.title}</td>
// 	<td className='col-md-6'> {items.price}</td>
// 	</div>
// 	))
// }