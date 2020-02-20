import React,{useEffect,useState} from 'react'
import { Redirect } from 'react-router-dom';
import PaypalBtn from './PaypalBtn'
import axios from 'axios'
import DropIn from 'braintree-web-drop-in-react'

const Cart = () => {
	const user = localStorage.getItem('info-id')
	var i=0;
	const [cart,setCart] = useState([]);
	const [data,setData] = useState({
		success : false,
		clientToken: null,
		error: '',
		instance:{},
		address:''
	})
	

	cart.map(items=>{
		i=i+items.price;
	})
	useEffect(()=>{
		
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
	

	useEffect(()=>{
		const user1 =localStorage.getItem('info-id')
           fetch(`${process.env.REACT_APP_API_KEY}/Braintree/getToken/${user1}`,{
			method: 'GET',
			headers: {'Content-Type': 'application/json'}   
		   }).then(res=>res.json(res))
		   .then(data=>{
			  
			   if(data.error){
				   setData({...data,error:data.error})
			   }else{
				   setData({...data,clientToken:data})
			   }
			  
		   }) .catch(err =>{
			  
			    setData({...data,error:err})
			})
			console.log(data.error)
	},[])
	
	const showError =()=>{
		if(data.error !== 'undefined'){
			return(
				<div className='container bg-danger text-white'>
                    <h2>{data.error}</h2>
				</div>
			)
		}
		else{
			return null
		}
	}

	const buy = ()=>{
		let nonce;
		let getNonce = data.instance.requestPaymentMethod()
		.then(data =>{
			// console.log(data)
			nonce = data.nonce;
			// console.log(nonce)
			// console.log(i)
            fetch(`${process.env.REACT_APP_API_KEY}/Braintree/paymentProcess/${user}`,{
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body:JSON.stringify({
					paymentMethodNonce: nonce,
					amount:i
				})
			}).then(res=>res.json(res))
			.then(data=>{
				console.log(data)
			})
            .catch(err =>{
				console.log(err)
			})

		})
		.catch(err =>{
			setData({...data,error:err.message})
			
		})
		
	}

	

	const showDropIn=()=>{
		
		if(data.clientToken !== null && cart.length>0){
			return(
				<div onBlur={()=>{setData({...data,error:''})}} 
				className='mx-auto'
				style={{width:'400px'}}>
				  <DropIn options={{
					  authorization:data.clientToken
				  }} onInstance={instance =>(data.instance = instance)}/>
				  <button 
				  className='btn btn-success' 
				  onClick={buy}
				  >Buy Now</button>
				</div>
			)
	   }else{
		   return null
	   }

	  
	}

	console.log(`error :---${data.error}`)

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
			//   setDrop( drop => true)
			window.location.reload(false);
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
		<div>
			<PaypalBtn total={i} />
		</div>
         <div>
			 {showError()}
			 {showDropIn()}
		 </div>

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