import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { globalstate } from './App';
import axios from 'axios'

function SingleCartProduct() {
    const obj = useParams();
    const [SingleProduct,setSingleProduct] = useState([]);
    const {cart,setcart} = useContext(globalstate);
    const [buttondisabled,setbuttondisabled] = useState(false)

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/' + obj.id).then((result) => {
            console.log(result.data);
            setSingleProduct(result.data);
        })
    } , [])
    
    function handleCart(e,result) 
    {
        e.preventDefault();
        setcart([...cart,result]);
        console.log(cart);
        setbuttondisabled(true);
    }

  return (
    <>
          <div className='containerbox'>
                <img src={SingleProduct.image}></img>
                <div className='des'>
                    <h1>{SingleProduct.title}</h1>
                    <p>{SingleProduct.category}</p>
                    <p>$ {SingleProduct.price}</p>
                    <p>{SingleProduct.description}</p>
                    <button className={buttondisabled ? 'disabled-button' : 'singlebutton'} 
                        disabled={buttondisabled} href='' onClick={(e) => handleCart(e,SingleProduct)}>Add to Cart</button>
                </div>
          </div>
    </>
  )
}

export default SingleCartProduct