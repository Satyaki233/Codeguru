import React,{useEffect,useState} from 'react'
import { Redirect, Link } from 'react-router-dom';

import DropIn from 'braintree-web-drop-in-react'

const Cart = () => {
	const user = localStorage.getItem('info-id')
	var i=0;
	const [cart,setCart] = useState([]);
	const [data,setData] = useState({
		success :false,
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
			  
			    setData({...data,error:err.message})
			})
			console.log(data.error)
	},[])
	
	const showError =()=>{
		if(data.error){
			return(
				<div className='alert alert-danger'>
                    <h2>{data.error}</h2>
				</div>
			)
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
				
			    setData({...data,success:data.success})
			})
            .catch(err =>{
				setData({...data,error:err.message})
			})
           
			
		})
		.catch(err =>{
			setData({...data,error:err.message})
			
		})
		
	}
	

	const emptyCart = () =>{
			// console.log(i)
			if(cart.length >0 ){
				return(
					<div>
						<button 
						className='btn btn-danger'
						onClick={()=>{
                          fetch(`${process.env.REACT_APP_API_KEY}/Cart/emptyCart/${user}`,{
							method: 'POST',
							headers: {'Content-Type': 'application/json'},
							body:JSON.stringify({
								amount:i
							})
						}).then(res=>res.json(res))
						.then(data=>{
							
							window.location.reload(false);
						})
						.catch(err => {
							console.log(err)
						})
						}}>
							 Clear cart
						</button>
					</div>
				)
			}else{
				return null
			}
           
	}
	if(!localStorage.getItem('info-email')){
		return <Redirect to='/'/>
	  }
	 

	const showDropIn=()=>{
		
		if(data.clientToken !== null && cart.length>0){
			return(
				<div onBlur={()=>{setData({...data,error:''})}} 
				className='mx-auto'
				style={{width:'300px'}}>
				  <DropIn options={{
					  authorization:data.clientToken,
					  paypal:{
						flow: 'checkout',
						amount: i,
						currency: 'USD'
					  }
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

	


	if(cart.length === 0){
		return(
			<div className='container my-2 alert alert-danger'>
				Your Cart corrently empty Now<br/>
				Please visit <Link to='/Home' >Home</Link>
			</div>
		)
	}
	if(data.success === true){
		fetch(`${process.env.REACT_APP_API_KEY}/Cart/Checkout/${user}`,{
			method:'POST',
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({
				amount:i
			})
		})
		.then(res=>res.json(res))
		.then(data=>{
			console.log('successfully stored')
		})
		.catch(err=>{
			setData({...data,error:err.message})
		})

		return(
			<div className='container my-2 alert alert-success'>
				 Your payment Was Successfull.<br/>
				 Please vist <Link to='/Home'>Home</Link> for more shopping.<br/>
				 Else visit Dash. 
			</div>
		)
	}

	if(user === 'undefined' ){
		return <Redirect to='/'/>
	}
	

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
	  ><i class="fas fa-trash"></i></button></td>
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
	    {emptyCart()}
		{/* <div>
			<PaypalBtn total={i} />
		</div> */}
         <div>
			 {showError()}
			 {showDropIn()}
		 </div>

		</div>
	)
	
}

export default Cart;

     
