import React from 'react'
import { Link } from 'react-router-dom'

const Docs = () => {
    return (
        <div className='container'>
            <div>
                <h1 className='alert alert-dark'>Docmantation:</h1>
            </div>
            <p>
                This is a <strong className='text-primary'>  DEMO ECOMMERCE WEBSITE.</strong>.which means I am not going to store any information about you..<br/>
                <p className='text-danger'>In this Website You can buy Fake products such as mobile phones.</p><br/>
                To use this website you need to create a account.<strong className='text-success'>if you already have a account
                 goto<Link to='/'> LOGIN</Link> to enter in HOME page.</strong>
                <strong className='text-warning'>Incase you don't have account create one in <Link to='/Register'>REGISTER</Link>.</strong><br/>
               <div className='aler alert-warning'>
                All the purchase are fake..That means You dont have to Pay any money to buy a product.<br/>
                All the products will be saved in your purchase history.
           
                </div>
            </p>
        </div>
    )
}

export default Docs
